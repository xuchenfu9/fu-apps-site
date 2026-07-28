# FU apps Static Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a responsive, five-language FU apps catalog with product pages, Storefront-aware App Store links, and complete public support, privacy, and terms pages for five released apps.

**Architecture:** Astro generates one static HTML page per locale, product, and document route. TypeScript catalog data supplies independent locale copy and Storefront listings, while a small browser script persists the visitor's selected App Store region and updates contextual product names and CTAs. Legal prose lives in per-product, per-locale TypeScript modules so policy content has a reviewable, explicit source rather than runtime translation.

**Tech Stack:** Astro 7.1.4, TypeScript 7.0.2, Vitest 4.1.10, Playwright 1.62.0, Astro sitemap 3.7.3, GitHub Pages Actions.

---

## File Structure

```text
.
├── .github/workflows/deploy-pages.yml        # Test, build, and GitHub Pages deployment
├── public/assets/apps/                       # Versioned icons and screenshots copied from source projects
├── scripts/check-content.mts                 # Catalog, legal-content, asset, and route validation
├── scripts/refresh-storefronts.mts           # Apple Lookup refresh for live Storefronts
├── src/components/
│   ├── AppCard.astro                         # Homepage product card and Storefront-aware CTA data hooks
│   ├── AppStoreCTA.astro                     # Accessible App Store CTA with region/status messaging
│   ├── DocumentNav.astro                     # Privacy, support, and terms navigation
│   ├── LanguageSwitcher.astro                # Route-preserving five-language selector
│   ├── LegalDocument.astro                   # Semantic legal-document renderer
│   └── StorefrontSelector.astro              # Browser-region-aware App Store region selector
├── src/data/
│   ├── apps.ts                               # Five products, localized feature copy, icons, screenshots, listings
│   └── legal/                                # One reviewed five-language document module per product
├── src/lib/
│   ├── locales.ts                            # Locale constants, path generation, and display labels
│   ├── storefront.ts                         # Storefront parsing, fallback, display-name, and CTA resolution
│   └── types.ts                              # Shared content and listing contracts
├── src/layouts/SiteLayout.astro              # Metadata, header, footer, selector script bootstrap
├── src/pages/
│   ├── index.astro                           # Browser-locale redirect landing page
│   ├── 404.astro                             # Localized navigation-safe not-found page
│   └── [locale]/
│       ├── index.astro                       # FU apps gallery homepage
│       └── apps/[slug]/
│           ├── index.astro                   # Product detail page
│           └── [document].astro              # privacy, support, or terms page
├── src/scripts/storefront-preference.ts      # DOM update and localStorage persistence
├── src/styles/global.css                     # Responsive visual system and gallery layout
├── tests/lib/locales.test.ts
├── tests/lib/storefront.test.ts
├── tests/scripts/check-content.test.ts
├── tests/e2e/site.spec.ts
├── astro.config.mjs
├── package.json
├── playwright.config.ts
├── tsconfig.json
├── vitest.config.ts
├── docs/adding-an-app.md
└── docs/legal-source-map.md
```

### Task 1: Bootstrap the Astro project and quality commands

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `vitest.config.ts`
- Create: `playwright.config.ts`
- Create: `src/styles/global.css`

- [ ] **Step 1: Create `package.json` with deterministic commands and dependencies.**

```json
{
  "name": "fu-apps-site",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "engines": { "node": ">=22.0.0" },
  "scripts": {
    "dev": "astro dev",
    "check": "astro check",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:e2e": "playwright test",
    "validate": "tsx scripts/check-content.mts",
    "build": "npm run validate && npm run check && astro build",
    "preview": "astro preview",
    "refresh:storefronts": "tsx scripts/refresh-storefronts.mts"
  },
  "devDependencies": {
    "@astrojs/check": "0.9.10",
    "@astrojs/sitemap": "3.7.3",
    "@playwright/test": "1.62.0",
    "astro": "7.1.4",
    "tsx": "4.23.1",
    "typescript": "7.0.2",
    "vitest": "4.1.10"
  }
}
```

- [ ] **Step 2: Add the Astro and test configuration.**

```js
// astro.config.mjs
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://xuchenfu9.github.io",
  base: "/fu-apps-site",
  output: "static",
  integrations: [sitemap({ filter: (page) => !page.endsWith("/404/") })]
});
```

```json
// tsconfig.json
{
  "extends": "astro/tsconfigs/strict",
  "include": ["src", "scripts", "tests"]
}
```

```ts
// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: { include: ["tests/**/*.test.ts"] }
});
```

```ts
// playwright.config.ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  use: { baseURL: "http://127.0.0.1:4321", screenshot: "only-on-failure" },
  webServer: { command: "npm run preview -- --host 127.0.0.1 --port 4321", url: "http://127.0.0.1:4321", reuseExistingServer: true }
});
```

- [ ] **Step 3: Install packages and establish the empty test harness.**

Run: `npm install && npx playwright install chromium && npm run check`

Expected: package lock is created and Astro checks successfully. Task 2 adds the first Vitest files before the test command is run.

- [ ] **Step 4: Add initial global CSS tokens and browser defaults.**

```css
@layer reset, theme, components;

@layer reset {
  *, *::before, *::after { box-sizing: border-box; }
  html { color-scheme: light; }
  body { margin: 0; min-width: 320px; }
  a { color: inherit; }
  img { display: block; max-width: 100%; }
  button, select { font: inherit; }
}

@layer theme {
  :root {
    --paper: #f7f7f2;
    --surface: #ffffff;
    --ink: #161616;
    --muted: #686861;
    --line: #deded7;
    --focus: #075fcc;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  body { background: var(--paper); color: var(--ink); }
  :focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
}
```

- [ ] **Step 5: Commit the project foundation.**

```bash
git add package.json package-lock.json astro.config.mjs tsconfig.json vitest.config.ts playwright.config.ts src/styles/global.css
git commit -m "chore: bootstrap Astro static site"
```

### Task 2: Define locale and Storefront domain behavior with tests first

**Files:**
- Create: `src/lib/types.ts`
- Create: `src/lib/locales.ts`
- Create: `src/lib/storefront.ts`
- Create: `tests/lib/locales.test.ts`
- Create: `tests/lib/storefront.test.ts`

- [ ] **Step 1: Write locale and Storefront resolution tests before implementation.**

```ts
// tests/lib/storefront.test.ts
import { describe, expect, it } from "vitest";
import { getListingDisplayName, resolveListing, resolveRequestedStorefront } from "../../src/lib/storefront";
import type { AppRecord } from "../../src/lib/types";

const fixtureCopy = {
  "zh-Hans": { eyebrow: "测试", summary: "测试", features: [{ title: "测试", description: "测试" }] },
  "zh-Hant": { eyebrow: "測試", summary: "測試", features: [{ title: "測試", description: "測試" }] },
  en: { eyebrow: "Test", summary: "Test", features: [{ title: "Test", description: "Test" }] },
  ja: { eyebrow: "テスト", summary: "テスト", features: [{ title: "テスト", description: "テスト" }] },
  ko: { eyebrow: "테스트", summary: "테스트", features: [{ title: "테스트", description: "테스트" }] }
} satisfies AppRecord["copy"];

const partyGames: AppRecord = {
  slug: "party-games", appStoreId: "6759240304", contactEmail: "fxcpxs@163.com", icon: "/icon.png", screenshots: ["/screen.png"], copy: fixtureCopy,
  listings: { US: { storefront: "US", state: "live", currentName: "Party Games", url: "https://apps.apple.com/us/app/id6759240304" } }
};
const idPhoto: AppRecord = {
  slug: "jiajia-id-photo", appStoreId: "6758612379", contactEmail: "panxiaosen@163.com", icon: "/icon.png", screenshots: ["/screen.png"], copy: fixtureCopy,
  listings: {
    CN: { storefront: "CN", state: "planned", currentName: "佳佳证件照", nextReleaseName: "证照准拍", url: "https://apps.apple.com/cn/app/id6758612379" },
    HK: { storefront: "HK", state: "planned", nextReleaseName: "證照好拍", url: "https://apps.apple.com/hk/app/id6758612379" },
    TW: { storefront: "TW", state: "planned", nextReleaseName: "證照好拍", url: "https://apps.apple.com/tw/app/id6758612379" },
    CA: { storefront: "CA", state: "planned", nextReleaseName: "MapleLens ID", url: "https://apps.apple.com/ca/app/id6758612379" },
    US: { storefront: "US", state: "planned", nextReleaseName: "US PassSnap", url: "https://apps.apple.com/us/app/id6758612379" }
  }
};

describe("Storefront resolution", () => {
  it("uses a browser region before a locale default", () => {
    expect(resolveRequestedStorefront("en", ["en-CA", "en-US"])).toBe("CA");
    expect(resolveRequestedStorefront("zh-Hant", ["zh-Hant-TW"])).toBe("TW");
  });

  it("uses the locale default when no browser region is present", () => {
    expect(resolveRequestedStorefront("ja", ["ja"])).toBe("JP");
  });

  it("uses US before another available Storefront as fallback", () => {
    expect(resolveListing(partyGames, "CA").resolvedStorefront).toBe("US");
  });

  it("keeps planned ID-photo names separate from current live names", () => {
    expect(getListingDisplayName(resolveListing(idPhoto, "CA").listing)).toBe("MapleLens ID");
    expect(getListingDisplayName(resolveListing(idPhoto, "US").listing)).toBe("US PassSnap");
    expect(getListingDisplayName(resolveListing(idPhoto, "TW").listing)).toBe("證照好拍");
    expect(resolveListing(idPhoto, "JP").resolvedStorefront).toBe("US");
  });
});
```

- [ ] **Step 2: Run the tests to verify the imports fail.**

Run: `npm test -- tests/lib/storefront.test.ts tests/lib/locales.test.ts`

Expected: FAIL with a missing `src/lib/storefront.ts` module.

- [ ] **Step 3: Define shared contracts and locale helpers.**

```ts
// src/lib/types.ts
export const storefronts = ["CN", "HK", "TW", "CA", "US", "JP", "KR"] as const;
export type Storefront = (typeof storefronts)[number];
export type ListingState = "live" | "planned";
export type Locale = "zh-Hans" | "zh-Hant" | "en" | "ja" | "ko";

export interface StorefrontListing {
  storefront: Storefront;
  state: ListingState;
  currentName?: string;
  nextReleaseName?: string;
  url: string;
}

export interface LocalizedAppCopy {
  eyebrow: string;
  summary: string;
  features: readonly { title: string; description: string }[];
}

export interface AppRecord {
  slug: string;
  appStoreId: string;
  contactEmail: string;
  icon: string;
  screenshots: readonly string[];
  copy: Record<Locale, LocalizedAppCopy>;
  listings: Partial<Record<Storefront, StorefrontListing>>;
}
```

```ts
// src/lib/locales.ts
import type { Locale } from "./types";

export const locales = ["zh-Hans", "zh-Hant", "en", "ja", "ko"] as const satisfies readonly Locale[];
export const localeLabels: Record<Locale, string> = {
  "zh-Hans": "简体中文", "zh-Hant": "繁體中文", en: "English", ja: "日本語", ko: "한국어"
};
export const localeDefaultStorefront: Record<Locale, string> = {
  "zh-Hans": "CN", "zh-Hant": "HK", en: "US", ja: "JP", ko: "KR"
};
export const isLocale = (value: string | undefined): value is Locale => locales.includes(value as Locale);
export const localePath = (locale: Locale, suffix = "") => `/${locale}/${suffix}`.replace(/\/$/, "/");
```

- [ ] **Step 4: Implement pure Storefront parsing and fallback behavior.**

```ts
// src/lib/storefront.ts
import { localeDefaultStorefront } from "./locales";
import { storefronts, type AppRecord, type Storefront, type StorefrontListing, type Locale } from "./types";

const fallbackOrder: readonly Storefront[] = ["US", "CN", "HK", "TW", "CA", "JP", "KR"];
const isStorefront = (value: string | undefined): value is Storefront => storefronts.includes(value as Storefront);

export function resolveRequestedStorefront(locale: Locale, languageTags: readonly string[] = []): Storefront {
  for (const tag of languageTags) {
    const region = tag.replace(/_/g, "-").split("-").find((part) => /^[A-Z]{2}$/.test(part.toUpperCase()))?.toUpperCase();
    if (region && isStorefront(region)) return region;
  }
  return localeDefaultStorefront[locale] as Storefront;
}

export function resolveListing(app: AppRecord, requestedStorefront: Storefront) {
  const resolvedStorefront = app.listings[requestedStorefront]
    ? requestedStorefront
    : fallbackOrder.find((storefront) => app.listings[storefront]);
  if (!resolvedStorefront) throw new Error(`${app.slug} has no App Store listing`);
  return {
    requestedStorefront,
    resolvedStorefront,
    usedFallback: requestedStorefront !== resolvedStorefront,
    listing: app.listings[resolvedStorefront]!
  };
}

export function getListingDisplayName(listing: StorefrontListing): string {
  const name = listing.state === "planned" ? listing.nextReleaseName ?? listing.currentName : listing.currentName;
  if (!name) throw new Error(`${listing.storefront} listing is missing a display name`);
  return name;
}
```

- [ ] **Step 5: Run unit tests and commit the domain layer.**

Run: `npm test -- tests/lib/locales.test.ts tests/lib/storefront.test.ts`

Expected: PASS using the explicit test fixtures in `tests/lib/storefront.test.ts`.

```bash
git add src/lib tests/lib
git commit -m "feat: add locale and storefront resolution"
```

### Task 3: Build the typed five-product catalog and copy the verified media

**Files:**
- Create: `src/data/apps.ts`
- Create: `public/assets/apps/perfectlist/`
- Create: `public/assets/apps/meowtalk-diary/`
- Create: `public/assets/apps/my-bookmarks/`
- Create: `public/assets/apps/jiajia-id-photo/`
- Create: `public/assets/apps/party-games/`
- Modify: `tests/lib/storefront.test.ts`

- [ ] **Step 1: Add the smallest catalog fixture that makes Task 2's Storefront tests meaningful.**

```ts
// src/data/apps.ts (catalog export shape)
import type { AppRecord } from "../lib/types";

export const apps = [perfectlist, meowtalkDiary, myBookmarks, jiajiaIdPhoto, partyGames] as const satisfies readonly AppRecord[];
export const appsBySlug = Object.fromEntries(apps.map((app) => [app.slug, app])) as Record<string, AppRecord>;
```

Define `perfectlist`, `meowtalkDiary`, `myBookmarks`, `jiajiaIdPhoto`, and `partyGames` as complete `AppRecord` literals directly above that export. Populate all records with the App Store IDs in the design spec and one listing for each confirmed Storefront. Use `https://apps.apple.com/{country}/app/id{id}` as the canonical URL shape. Populate the ID-photo record exactly as follows:

```ts
listings: {
  CN: { storefront: "CN", state: "planned", currentName: "佳佳证件照", nextReleaseName: "证照准拍", url: "https://apps.apple.com/cn/app/id6758612379" },
  HK: { storefront: "HK", state: "planned", nextReleaseName: "證照好拍", url: "https://apps.apple.com/hk/app/id6758612379" },
  TW: { storefront: "TW", state: "planned", nextReleaseName: "證照好拍", url: "https://apps.apple.com/tw/app/id6758612379" },
  CA: { storefront: "CA", state: "planned", nextReleaseName: "MapleLens ID", url: "https://apps.apple.com/ca/app/id6758612379" },
  US: { storefront: "US", state: "planned", nextReleaseName: "US PassSnap", url: "https://apps.apple.com/us/app/id6758612379" }
}
```

Use `fxcpxs@163.com` for PerfectList, MeowTalk Diary, My Bookmarks, and Party Games; use `panxiaosen@163.com` for the ID-photo record. Add five complete localized `copy` objects per app; source features from the project marketing/app-store material, not from code comments. Extend `tests/lib/storefront.test.ts` with `expect(appsBySlug["jiajia-id-photo"].listings.CA?.nextReleaseName).toBe("MapleLens ID")` so production data, not only a fixture, verifies the regional name.

- [ ] **Step 2: Verify the Storefront tests pass.**

Run: `npm test -- tests/lib/storefront.test.ts`

Expected: PASS with the CA/US/HK/TW planned ID-photo expectations and US fallback assertion.

- [ ] **Step 3: Copy only inspectable production media into the repository.**

Use the 1024px icon assets and real screenshots from these sources, normalize filenames to `icon.png` and `screen-01.png` through `screen-03.png`, and preserve aspect ratio:

```text
Mylist/mylist/Assets.xcassets/AppIcon.appiconset/icon_ios_1024.png
Mylist/output/imagegen/ios-native-ui-2026-07-20/*.png
noteofpets/PetDiary/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png
noteofpets/截屏/Simulator Screenshot - iPhone 17 Pro Max - 2026-04-06 at 21.14.10.png
noteofpets/截屏/Simulator Screenshot - iPhone 17 Pro Max - 2026-04-06 at 21.14.46.png
noteofpets/截屏/Simulator Screenshot - iPhone 17 Pro Max - 2026-04-06 at 21.15.33.png
WebManger/WebManager/Assets.xcassets/AppIcon.appiconset/icon_1024.png
WebManger/iap_promo_1024.png
OneDollarID/OneDollarID/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png
OneDollarID/images/test0.jpg
OneDollarID/images/test1.jpg
OneDollarID/images/test2.jpg
fastwin-1/ReactionDuel/AppStoreAssets/icons/icon-1024x1024.png
fastwin-1/ReactionDuel/PartyGames/Assets.xcassets/GameSelectionReactionHero.imageset/GameSelectionReactionHero.png
fastwin-1/ReactionDuel/PartyGames/Assets.xcassets/GameSelectionPenaltyHero.imageset/GameSelectionPenaltyHero.png
fastwin-1/ReactionDuel/PartyGames/Assets.xcassets/GameSelectionWheelHero.imageset/GameSelectionWheelHero.png
```

Do not copy `build/`, `tmp/`, simulator products, derived data, or source project files. Inspect each copied image at its destination before referencing it in the catalog.

- [ ] **Step 4: Commit the catalog and assets.**

```bash
git add src/data/apps.ts public/assets/apps tests/lib/storefront.test.ts
git commit -m "feat: add FU app catalog and media"
```

### Task 4: Migrate and localize all legal and support content

**Files:**
- Create: `src/data/legal/types.ts`
- Create: `src/data/legal/perfectlist.ts`
- Create: `src/data/legal/meowtalk-diary.ts`
- Create: `src/data/legal/my-bookmarks.ts`
- Create: `src/data/legal/jiajia-id-photo.ts`
- Create: `src/data/legal/party-games.ts`
- Create: `src/data/legal/index.ts`
- Create: `docs/legal-source-map.md`
- Create: `tests/scripts/check-content.test.ts`

- [ ] **Step 1: Write a failing content-completeness test.**

```ts
import { describe, expect, it } from "vitest";
import { apps } from "../../src/data/apps";
import { legalDocumentsBySlug } from "../../src/data/legal";
import { locales } from "../../src/lib/locales";

describe("legal document completeness", () => {
  it("provides privacy, support, and terms in every supported locale", () => {
    for (const app of apps) {
      for (const locale of locales) {
        const documents = legalDocumentsBySlug[app.slug][locale];
        expect(documents.privacy.sections.length).toBeGreaterThan(0);
        expect(documents.support.sections.length).toBeGreaterThan(0);
        expect(documents.terms.sections.length).toBeGreaterThan(0);
      }
    }
  });
});
```

- [ ] **Step 2: Run the test to verify the legal modules are absent.**

Run: `npm test -- tests/scripts/check-content.test.ts`

Expected: FAIL with a missing `src/data/legal` module.

- [ ] **Step 3: Define a semantic legal content model and create all five product modules.**

```ts
// src/data/legal/types.ts
import type { Locale } from "../../lib/types";

export type LegalKind = "privacy" | "support" | "terms";
export interface LegalSection { title: string; paragraphs: readonly string[]; bullets?: readonly string[]; }
export interface LegalDocument { title: string; updatedAt: string; sections: readonly LegalSection[]; }
export type LocalizedLegalDocuments = Record<LegalKind, LegalDocument>;
export type AppLegalDocuments = Record<Locale, LocalizedLegalDocuments>;
```

For every application module, supply the five locale keys `zh-Hans`, `zh-Hant`, `en`, `ja`, and `ko`, and all three `privacy`, `support`, and `terms` objects. Preserve the source document's fact pattern: data collection and permissions, device/local/iCloud behavior, subscription or purchase terms where present, deletion instructions, version/support information, and the product-specific contact email. The My Bookmarks and ID-photo terms modules are new product-specific terms; do not copy Party Games subscription, networking, or game rules into them.

- [ ] **Step 4: Record content provenance in `docs/legal-source-map.md`.**

Each product section must list the exact paths from the design spec, the contact email, the date of review, and whether its terms originated from an existing terms document or were newly authored. Include the following fixed entries:

```md
| App | Email | Terms source |
| --- | --- | --- |
| PerfectList | fxcpxs@163.com | Mylist/docs/terms-of-use.html |
| MeowTalk Diary | fxcpxs@163.com | noteofpets/docs/terms/index.html and docs/assets/content.js |
| 我的书签 | fxcpxs@163.com | Newly authored from product facts |
| 佳佳证件照 | panxiaosen@163.com | Newly authored from product facts |
| 派对游戏 | fxcpxs@163.com | fastwin-1/ReactionDuel/AppStoreAssets/terms-of-service.html |
```

- [ ] **Step 5: Run completeness tests and commit the legal migration.**

Run: `npm test -- tests/scripts/check-content.test.ts`

Expected: PASS with 75 nonempty locale/document combinations.

```bash
git add src/data/legal docs/legal-source-map.md tests/scripts/check-content.test.ts
git commit -m "feat: add localized legal and support content"
```

### Task 5: Implement shared layout, locale-preserving navigation, and document UI

**Files:**
- Create: `src/layouts/SiteLayout.astro`
- Create: `src/components/LanguageSwitcher.astro`
- Create: `src/components/StorefrontSelector.astro`
- Create: `src/components/DocumentNav.astro`
- Create: `src/components/LegalDocument.astro`
- Create: `src/scripts/storefront-preference.ts`
- Modify: `src/styles/global.css`
- Test: `tests/e2e/site.spec.ts`

- [ ] **Step 1: Write the first browser test for semantic navigation and locale preservation.**

```ts
import { expect, test } from "@playwright/test";

test("a legal-page language switch keeps the app and document", async ({ page }) => {
  await page.goto("/ja/apps/party-games/privacy/");
  await page.getByRole("button", { name: /language|言語|语言|언어/i }).click();
  await page.getByRole("link", { name: "한국어" }).click();
  await expect(page).toHaveURL(/\/ko\/apps\/party-games\/privacy\/$/);
});
```

- [ ] **Step 2: Implement locale-safe link generation.**

`LanguageSwitcher.astro` accepts `locale`, `slug?`, and `document?`; it builds each target with the same `slug` and `document` values. It renders a native button plus an accessible link list, never a form submission. `DocumentNav.astro` always emits the three sibling routes for the current locale and app.

- [ ] **Step 3: Implement `SiteLayout.astro` and the Storefront selector bootstrap.**

The layout must include `<html lang={locale}>`, title/description/canonical metadata, a skip link, the FU apps wordmark link, the language switcher, a `<select aria-label="App Store region">`, and footer links. Import `storefront-preference.ts` with `is:inline` only once.

```ts
// src/scripts/storefront-preference.ts
const storageKey = "fu-apps-storefront";
const allowed = new Set(["CN", "HK", "TW", "CA", "US", "JP", "KR"]);

function applyStorefront(storefront: string) {
  document.documentElement.dataset.storefront = storefront;
  document.querySelectorAll<HTMLElement>("[data-storefront-name]").forEach((node) => {
    const value = node.getAttribute(`data-storefront-name-${storefront.toLowerCase()}`);
    if (value) node.textContent = value;
  });
  document.querySelectorAll<HTMLAnchorElement>("[data-storefront-url]").forEach((node) => {
    const value = node.getAttribute(`data-storefront-url-${storefront.toLowerCase()}`);
    if (value) node.href = value;
  });
}

const selector = document.querySelector<HTMLSelectElement>("[data-storefront-selector]");
const saved = localStorage.getItem(storageKey);
const browserRegion = navigator.languages.map((tag) => tag.split("-").at(-1)?.toUpperCase()).find((value) => value && allowed.has(value));
const storefront = saved && allowed.has(saved) ? saved : browserRegion ?? selector?.value ?? "US";
if (selector) {
  selector.value = storefront;
  selector.addEventListener("change", () => { localStorage.setItem(storageKey, selector.value); applyStorefront(selector.value); });
}
applyStorefront(storefront);
```

- [ ] **Step 4: Run the e2e test and commit shared navigation.**

Run: `npm run build`, then `npm run preview -- --host 127.0.0.1 --port 4321` in one terminal, then `npx playwright test tests/e2e/site.spec.ts` in another terminal.

Expected: the test initially fails until Task 7 creates dynamic routes; after Task 7 it passes and the language switch retains `party-games/privacy`.

```bash
git add src/layouts src/components src/scripts src/styles/global.css tests/e2e/site.spec.ts
git commit -m "feat: add shared locale and storefront controls"
```

### Task 6: Build the responsive FU apps gallery homepage

**Files:**
- Create: `src/components/AppCard.astro`
- Create: `src/components/AppStoreCTA.astro`
- Create: `src/pages/index.astro`
- Create: `src/pages/[locale]/index.astro`
- Modify: `src/styles/global.css`
- Modify: `tests/e2e/site.spec.ts`

- [ ] **Step 1: Add homepage visual and functional assertions.**

```ts
test("the gallery shows all five products and preserves the mobile layout", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/zh-Hans/");
  await expect(page.getByRole("heading", { name: /FU apps/i })).toBeVisible();
  await expect(page.locator("[data-app-card]")).toHaveCount(5);
  await expect(page.locator("[data-app-card]").first()).toBeVisible();
  await expect(page).toHaveScreenshot("home-zh-hans-mobile.png", { fullPage: true });
});
```

- [ ] **Step 2: Implement `AppStoreCTA.astro` with static fallbacks and client data attributes.**

The component receives a resolved listing and all listing variants. It renders an ordinary server-side `href` for the locale's resolved Storefront, data attributes for each listing URL/name, an `aria-label` containing the region, and a localised planned-state message. The static fallback must never be an empty or JavaScript URL.

- [ ] **Step 3: Implement gallery cards and homepage composition.**

`AppCard.astro` renders an icon, the locale copy, its first screenshot, the app detail link, and `AppStoreCTA`. On desktop use a three-column grid with a two-row feature card; below 760px use a single stable column. Keep card corners at 8px or less and do not nest cards. `src/pages/index.astro` chooses saved/browser language in a small script and redirects to an existing locale route; `[locale]/index.astro` calls `getStaticPaths` from the `locales` list.

- [ ] **Step 4: Run visual tests, inspect screenshots, and commit.**

Run: `npx playwright test tests/e2e/site.spec.ts --update-snapshots`

Expected: checked desktop and mobile baseline screenshots show the five-card gallery with no overlapping text.

```bash
git add src/components/AppCard.astro src/components/AppStoreCTA.astro src/pages/index.astro 'src/pages/[locale]/index.astro' src/styles/global.css tests/e2e/site.spec.ts
git commit -m "feat: add FU apps responsive gallery"
```

### Task 7: Generate product detail and legal routes

**Files:**
- Create: `src/pages/[locale]/apps/[slug]/index.astro`
- Create: `src/pages/[locale]/apps/[slug]/[document].astro`
- Create: `src/pages/404.astro`
- Modify: `src/components/AppStoreCTA.astro`
- Modify: `src/components/LegalDocument.astro`
- Modify: `tests/e2e/site.spec.ts`

- [ ] **Step 1: Add route-generation and planned-name coverage.**

```ts
test("Canada uses the planned MapleLens ID name and link", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("fu-apps-storefront", "CA"));
  await page.goto("/en/apps/jiajia-id-photo/");
  await expect(page.getByText("MapleLens ID")).toBeVisible();
  await expect(page.getByRole("link", { name: /App Store/i })).toHaveAttribute("href", /apps\.apple\.com\/ca\/app\/id6758612379/);
  await expect(page.getByText(/next release/i)).toBeVisible();
});

test("all three public documents render for every app", async ({ page }) => {
  await page.goto("/zh-Hant/apps/my-bookmarks/terms/");
  await expect(page.locator("article")).toContainText(/條款|Terms/);
});
```

- [ ] **Step 2: Implement static paths and defensive 404 handling.**

Both dynamic route files enumerate `locales x apps`; the document route additionally enumerates `privacy`, `support`, and `terms`. Reject any route parameter outside those values with `Astro.redirect("/404")`. Do not rely on GitHub Pages history fallback.

- [ ] **Step 3: Render the product detail page.**

Place the app icon, dynamic Storefront display name, summary, App Store CTA, a three-item feature list, screenshot gallery, and `DocumentNav` in this order. The component must provide `data-storefront-name{CODE}` and `data-storefront-url{CODE}` attributes for each catalog listing so the client selector changes labels and links without requesting data.

- [ ] **Step 4: Render legal documents as semantic, standalone content.**

`LegalDocument.astro` takes `LegalDocument`, uses one `<article>`, emits the document title and updated date, then one `<section>` per source section with an `h2`, paragraphs, optional `ul`, and `mailto:` contact link from the app record. Never hide the language switcher or document navigation on a legal page.

- [ ] **Step 5: Add static `404` and sitemap behavior.**

`404.astro` must link to every language homepage without JavaScript. Keep the `@astrojs/sitemap` integration from Task 1 as the sole sitemap generator; after a production build its sitemap index must include the five home routes, 25 product routes, and 75 legal routes using the configured `site` and `base` values.

- [ ] **Step 6: Run route and browser tests, then commit.**

Run: `npm run build && npx playwright test tests/e2e/site.spec.ts`

Expected: every static route is emitted, the Canada page shows `MapleLens ID`, and the Japanese-to-Korean privacy switch assertion passes.

```bash
git add src/pages src/components tests/e2e/site.spec.ts
git commit -m "feat: add product and legal document routes"
```

### Task 8: Add content validation and App Store metadata refresh tooling

**Files:**
- Create: `scripts/check-content.mts`
- Create: `scripts/refresh-storefronts.mts`
- Modify: `tests/scripts/check-content.test.ts`
- Modify: `package.json`

- [ ] **Step 1: Extend validation tests with precise rejected states.**

```ts
it("rejects a record without a five-language terms document", () => {
  expect(() => validateCatalog([{ ...apps[0], slug: "broken" }], {})).toThrow(/broken.*zh-Hans.*terms/i);
});

it("accepts an unresolved planned listing but rejects an unresolved live listing", () => {
  expect(() => validateListing({ storefront: "CA", state: "planned", nextReleaseName: "MapleLens ID", url: "https://apps.apple.com/ca/app/id6758612379" })).not.toThrow();
  expect(() => validateListing({ storefront: "US", state: "live", url: "https://apps.apple.com/us/app/id6758612379" })).toThrow(/display name/i);
});
```

- [ ] **Step 2: Implement `check-content.mts`.**

Export `validateCatalog(apps, legalDocumentsBySlug)` and `validateListing(listing)`, with `legalDocumentsBySlug` typed as `Partial<Record<string, AppLegalDocuments>>`. The command must throw on absent locale copy, absent icon or screenshot asset, empty feature title/description, missing email, missing privacy/support/terms sections, non-HTTPS listing URL, or a live listing with no `currentName`. It must allow a planned listing with `nextReleaseName` and a canonical URL before Apple Lookup returns it.

- [ ] **Step 3: Implement the refresh command with non-destructive planned behavior.**

```ts
const lookup = async (id: string, country: string) => {
  const response = await fetch(`https://itunes.apple.com/lookup?id=${id}&country=${country}`);
  if (!response.ok) throw new Error(`Lookup ${id}/${country} failed: ${response.status}`);
  return response.json() as Promise<{ resultCount: number; results: Array<{ trackName: string; trackViewUrl: string }> }>;
};
```

For each `live` listing, fail if `resultCount !== 1`; update its name and URL only after outputting a JSON diff. For a `planned` listing with `resultCount === 0`, output `unchanged planned listing`; with one result, write a proposed transition to `live`, preserving the old `nextReleaseName` in the printed diff for human review. The command must never edit files unless called with `--write`.

- [ ] **Step 4: Run unit validation and command dry-run tests.**

Run: `npm test -- tests/scripts/check-content.test.ts && npm run validate && npm run refresh:storefronts -- --dry-run`

Expected: catalog validation passes; planned non-live listings are reported but do not fail the dry run.

- [ ] **Step 5: Commit maintenance tooling.**

```bash
git add scripts tests/scripts package.json
git commit -m "feat: validate catalog and refresh storefront metadata"
```

### Task 9: Document future app additions and configure GitHub Pages deployment

**Files:**
- Create: `docs/adding-an-app.md`
- Create: `.github/workflows/deploy-pages.yml`
- Modify: `README.md`

- [ ] **Step 1: Write `docs/adding-an-app.md` as a release gate.**

The document must require each new application to add: a unique slug and App Store ID, five localized product-copy objects, per-Storefront actual or planned names/URLs/status, an inspected 1024px icon, at least one product screenshot, three five-language legal/support document objects, contact email already used by the app, source-map entries, unit-test expectations, and a successful `npm run validate`, `npm test`, and `npm run build`. It must explicitly prohibit reusing another app's legal text or claiming a Storefront is live before Apple Lookup confirms it.

- [ ] **Step 2: Create the official GitHub Pages workflow.**

```yaml
name: Deploy GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: false
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - uses: actions/configure-pages@v5
      - run: npm ci
      - run: npx playwright install --with-deps chromium
      - run: npm test
      - run: npm run build
      - uses: actions/upload-pages-artifact@v4
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 3: Add a concise repository README.**

Include local development (`npm install`, `npm run dev`), validation/build commands, the expected GitHub Pages URL, the App Store metadata refresh command and `--write` safety, and the required GitHub repository setting: Pages source is `GitHub Actions`.

- [ ] **Step 4: Verify the workflow syntax and commit documentation/deployment.**

Run: `git diff --check && rg -n 'uses: actions/(configure-pages@v5|upload-pages-artifact@v4|deploy-pages@v4)' .github/workflows/deploy-pages.yml`

Expected: no whitespace errors and all three required GitHub Pages actions are present with their reviewed major versions.

```bash
git add .github/workflows/deploy-pages.yml docs/adding-an-app.md README.md
git commit -m "docs: add app release guide and Pages deployment"
```

### Task 10: Perform production verification and publish readiness review

**Files:**
- Modify: `tests/e2e/site.spec.ts`
- Modify: `README.md`

- [ ] **Step 1: Add desktop and mobile smoke coverage for every product and document.**

```ts
for (const slug of ["perfectlist", "meowtalk-diary", "my-bookmarks", "jiajia-id-photo", "party-games"]) {
  test(`${slug} has a working product and document route`, async ({ page }) => {
    await page.goto(`/en/apps/${slug}/`);
    await expect(page.getByRole("link", { name: /App Store/i })).toBeVisible();
    await page.getByRole("link", { name: /privacy/i }).click();
    await expect(page.locator("article")).toBeVisible();
  });
}
```

- [ ] **Step 2: Run the full production gate.**

Run: `npm run validate && npm run check && npm test && npm run build && npx playwright test`

Expected: all commands exit 0 and `dist/` contains the five homepages, 25 product pages, 75 legal pages, `404.html`, and sitemap output.

- [ ] **Step 3: Inspect actual rendered images at desktop and mobile sizes.**

Run the preview server, capture homepage, each application detail page, and one legal page at 1440x960 and 390x844. Check nonblank images, visible App Store CTA, no text overlap, 44px controls, language-switch route preservation, CA `MapleLens ID`, US `US PassSnap`, and HK/TW `證照好拍` states.

- [ ] **Step 4: Record deployment readiness and commit final QA changes.**

Add the final tested commit hash and Pages enablement instruction to `README.md`.

```bash
git add tests/e2e/site.spec.ts README.md
git commit -m "test: verify FU apps production routes"
```

## Plan Self-Review

- Design coverage: Tasks 2-3 implement five-language, per-Storefront names and US-first fallback; Tasks 4 and 7 implement all public policy/support/terms pages; Tasks 5-7 implement the responsive gallery, product pages, navigation, and persistent Storefront selection; Task 8 supplies data maintenance and build validation; Task 9 deploys GitHub Pages and documents future apps; Task 10 verifies the complete static artifact.
- Placeholder scan: No task delegates unspecified validation, translation, or release behavior. The two newly authored terms are expressly constrained to verified product facts and have a source-map record.
- Type consistency: `AppRecord`, `StorefrontListing`, `Locale`, `resolveRequestedStorefront`, `resolveListing`, `getListingDisplayName`, `validateCatalog`, and `validateListing` are defined before later tasks reference them.
