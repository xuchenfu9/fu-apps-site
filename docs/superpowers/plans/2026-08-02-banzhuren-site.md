# 班主任小秘书网站接入 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将未上架的“班主任小秘书”以中文独占、无商店链接的“上架中”状态加入 FU apps，并发布中文政策页面。

**Architecture:** 在现有静态 Astro 目录模型上增加可选的应用支持语言和可选 listing URL。现有应用保持五语言和现有 App Store 行为；班主任小秘书只生成 `zh-Hans` 的首页、详情页和三类文档。法律文档继续使用 `src/data/legal` 的数据驱动路径，未上架 CTA 由组件渲染为状态而不是链接。

**Tech Stack:** Astro 7、TypeScript、Vitest、Playwright、Sharp/WebP、GitHub Pages Actions。

---

### Task 1: Establish failing tests for Chinese-only catalog behavior

**Files:**
- Modify: `tests/data/legal.test.ts`
- Modify: `tests/scripts/check-content.test.ts`
- Modify: `tests/lib/storefront.test.ts`
- Modify: `tests/e2e/site.spec.ts`

- [ ] **Step 1: Add the catalog assertions before production changes**

Add tests that import `appsBySlug`, `legalDocumentsBySlug`, and the locale helper and assert:

```ts
const banzhuren = appsBySlug.banzhuren;

expect(banzhuren.supportedLocales).toEqual(["zh-Hans"]);
expect(banzhuren.copy["zh-Hans"]?.features).toHaveLength(5);
expect(banzhuren.copy.en).toBeUndefined();
expect(banzhuren.listings.CN?.state).toBe("planned");
expect(banzhuren.listings.CN?.url).toBeUndefined();
expect(legalDocumentsBySlug.banzhuren["zh-Hans"]?.privacy).toBeDefined();
expect(legalDocumentsBySlug.banzhuren.en).toBeUndefined();
```

Update the legal completeness loop to iterate `app.supportedLocales ?? locales`, and keep the existing five-locale loop for apps that support all locales. Add a storefront test for a planned listing without `url` so `getListingDisplayName` still returns its `nextReleaseName`.

Add E2E expectations for the Chinese home page: the `banzhuren` card is visible, its CTA has no App Store anchor, and the text “上架中” is visible. Add a request check that `/en/apps/banzhuren/` returns the existing 404 page after the supported-locale routing is implemented.

- [ ] **Step 2: Run the new focused tests and confirm they fail for the missing feature**

Run:

```bash
npm test -- tests/data/legal.test.ts tests/scripts/check-content.test.ts tests/lib/storefront.test.ts
```

Expected: FAIL because `banzhuren` is not in the catalog and the current types do not support a missing App Store URL.

### Task 2: Add locale-aware catalog and listing types

**Files:**
- Modify: `src/lib/types.ts`
- Create: `src/lib/apps.ts`
- Modify: `src/lib/storefront.ts`
- Modify: `src/data/apps.ts`
- Modify: `scripts/refresh-storefronts.mts`

- [ ] **Step 1: Define the minimal type changes**

Change the catalog contracts as follows:

```ts
export interface StorefrontListing {
  storefront: Storefront;
  state: ListingState;
  currentName?: string;
  nextReleaseName?: string;
  url?: string;
}

export interface AppRecord {
  slug: string;
  appStoreId?: string;
  supportedLocales?: readonly Locale[];
  contactEmail: string;
  icon: string;
  screenshots: readonly string[];
  copy: Partial<Record<Locale, LocalizedAppCopy>>;
  listings: Partial<Record<Storefront, StorefrontListing>>;
}
```

Change `AppLegalDocuments` to `Partial<Record<Locale, LocalizedLegalDocuments>>` in `src/data/legal/types.ts` so a legal record can be Chinese-only without weakening the per-supported-locale validation.

Create `src/lib/apps.ts` with these exact helpers:

```ts
import { locales } from "./locales";
import type { AppRecord, Locale, LocalizedAppCopy } from "./types";

export function appLocales(app: AppRecord): readonly Locale[] {
  return app.supportedLocales ?? locales;
}

export function appSupportsLocale(app: AppRecord, locale: Locale): boolean {
  return appLocales(app).includes(locale);
}

export function appCopy(app: AppRecord, locale: Locale): LocalizedAppCopy {
  const copy = app.copy[locale];
  if (!copy) throw new Error(`${app.slug} has no copy for ${locale}`);
  return copy;
}
```

Update `getListingDisplayName` and `resolveListing` only as needed to preserve current fallback behavior when a planned listing has no URL. Update `refresh-storefronts.mts` to skip apps without `appStoreId` and skip planned listings, while keeping live-listing lookups unchanged.

- [ ] **Step 2: Add the no-URL planned listing helper and the catalog record**

In `src/data/apps.ts`, add:

```ts
function plannedWithoutStorefront(storefront: Storefront, nextReleaseName: string): StorefrontListing {
  return { storefront, state: "planned", nextReleaseName };
}
```

Add `banzhuren` with `supportedLocales: ["zh-Hans"]`, `contactEmail: publicContactEmail`, the copied WEB icon path, at least one generated WEB screenshot, five Chinese feature stories, and planned listings for the supported storefronts using the public working name. Do not add an App Store ID or URL. Append it to `apps` and `appsBySlug` through the existing array construction.

- [ ] **Step 3: Run the focused type and catalog tests**

Run:

```bash
npm test -- tests/lib/storefront.test.ts tests/scripts/check-content.test.ts
npm run check
```

Expected: the type checker passes; content tests may still fail until routing, legal data, and assets are added.

### Task 3: Render an honest “上架中” CTA and locale-filtered routes

**Files:**
- Modify: `src/lib/ui.ts`
- Modify: `src/lib/storefront-dom.ts`
- Modify: `src/components/AppStoreCTA.astro`
- Modify: `src/components/AppCard.astro`
- Modify: `src/pages/[locale]/index.astro`
- Modify: `src/pages/[locale]/apps/[slug]/index.astro`
- Modify: `src/pages/[locale]/apps/[slug]/[document].astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Add localized status copy without changing existing planned copy**

Add `releasePreparing` to `UiCopy`; use `上架中` for `zh-Hans` and the natural equivalent in other locales so the existing type remains exhaustive. Keep `releasePlanned` for already-known planned App Store listings such as ID Photo.

In `storefrontDataAttributes`, emit an empty URL for a no-URL planned listing and use `releasePreparing(region)` as its storefront message. This lets the existing selector update names/messages without creating a fake href.

- [ ] **Step 2: Make `AppStoreCTA.astro` render a status element for no-URL listings**

Use the following branch shape:

```astro
{resolved.listing.url ? (
  <a {...attributes} data-storefront-cta href={resolved.listing.url} target="_blank" rel="noreferrer">
    <span>{ui[locale].openAppStore}</span><span aria-hidden="true">↗</span>
  </a>
) : (
  <span {...attributes} data-storefront-status>{ui[locale].releasePreparing}</span>
)}
```

Keep the existing note element and its state data attribute. Add a small status style in `global.css` using the existing border, surface, ink, and muted tokens; do not make it look like a clickable button.

- [ ] **Step 3: Use `appCopy` and `appSupportsLocale` at every static route boundary**

Filter the homepage app list by `appSupportsLocale(app, locale)`. Filter `getStaticPaths` in the app and document pages by the same helper. Replace direct `app.copy[locale]` access with `appCopy(app, locale)`. Resolve the legal document with a checked lookup so an unsupported locale cannot render a blank page.

- [ ] **Step 4: Run the CTA and route tests**

Run:

```bash
npm test -- tests/lib/storefront.test.ts tests/data/legal.test.ts tests/scripts/check-content.test.ts
npm run check
```

Expected: the new no-link status assertions pass; missing legal data and assets remain the only expected failures until the next tasks.

### Task 4: Add the Chinese legal documents

**Files:**
- Create: `src/data/legal/banzhuren.ts`
- Modify: `src/data/legal/index.ts`
- Modify: `tests/data/legal.test.ts`

- [ ] **Step 1: Write the Chinese document data**

Define one `AppLegalDocuments` entry for `zh-Hans` with `updatedAt: "2026-08-02"`, using these sections:

- Privacy: 运营者与适用范围；收集和处理的班级/学生资料；本地存储与删除；语音、通知、相册和系统服务；局域网编辑与网络节假日数据；Apple StoreKit 一次性购买；联系我们。
- Support: 获得帮助；问题报告所需信息；数据与隐私边界；购买与恢复购买支持；联系我们。
- Terms: 接受条款与使用许可；班级和学生资料责任；局域网编辑与导入导出；第三方系统服务和网络；一次性购买；服务可用性、免责声明和条款变更；联系我们。

Use only facts verified in `/Volumes/外置硬盘/Developer/班主任`: local Core Data/Application Support storage, microphone and speech recognition for voice todos, notifications for reminders, add-only Photos access for saved images, foreground-only LAN editor with pairing/token, holiday-data network refresh without class-data upload, and StoreKit product `com.fuxuchen.banzhuren.lifetime`. State that Apple ID payment credentials are handled by Apple, and publish only `fxcpxs@163.com` as contact.

- [ ] **Step 2: Register the legal record and test the exact scope**

Register `banzhurenLegal` in `legalDocumentsBySlug`. Add assertions that all three Chinese documents contain the contact address, all have sections, and `legalDocumentsBySlug.banzhuren.en` is undefined. Keep the existing approved-email checks for all apps.

- [ ] **Step 3: Run legal tests**

Run:

```bash
npm test -- tests/data/legal.test.ts
```

Expected: PASS for legal completeness and approved contact coverage.

### Task 5: Add approved media without changing the source app

**Files:**
- Create: `public/assets/apps/banzhuren/icon.png`
- Create: `public/assets/apps/banzhuren/web/icon.webp`
- Create: `public/assets/apps/banzhuren/screen-01.png`
- Create: `public/assets/apps/banzhuren/web/screen-01.webp`
- Create: additional screenshot derivatives under `public/assets/apps/banzhuren/` only when a second or third current-state screen is captured

- [ ] **Step 1: Copy the icon from the app project**

Copy `/Volumes/外置硬盘/Developer/班主任/Banzhuren/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png` to the WEB app asset directory. Do not alter the source project.

- [ ] **Step 2: Capture a current app screen and keep originals separate**

Build or launch the existing Banzhuren scheme on an available iOS Simulator, capture the dashboard/classroom screen, and place the approved PNG capture at `public/assets/apps/banzhuren/screen-01.png`. If the simulator is unavailable, use an existing current-state capture from the Banzhuren project only; do not synthesize product UI.

- [ ] **Step 3: Generate WEB derivatives and inspect dimensions**

Run:

```bash
npm run optimize:media
```

Confirm `icon.webp` is square and the screenshot WebP exists. Keep source PNGs and generated WebP files in the WEB repository only.

### Task 6: Update source mapping and content validation

**Files:**
- Modify: `docs/legal-source-map.md`
- Modify: `scripts/check-content.mts`
- Modify: `tests/scripts/check-content.test.ts`

- [ ] **Step 1: Add the source-map row**

Record `/Volumes/外置硬盘/Developer/班主任` as the reviewed source for the app, state that no standalone privacy/support/terms source files were found, and identify the three WEB data documents as reviewed site copy. Keep `fxcpxs@163.com` as contact.

- [ ] **Step 2: Validate only supported locales and no fake live links**

In `validateApp`, iterate `appLocales(app)` for copy/legal checks. Require `app.screenshots.length >= 1`; require a URL for live listings; allow a missing URL only for planned listings; reject any listing URL that is not an Apple URL when a URL is present. Change the catalog count expectation from five to six and calculate the legal document count from supported locales in the success message.

- [ ] **Step 3: Run the validator and content tests**

Run:

```bash
npm run validate
npm test -- tests/scripts/check-content.test.ts
```

Expected: six apps validate, including the Chinese-only banzhuren record and all required assets.

### Task 7: Build, inspect routes, and publish

**Files:**
- Modify: `tests/e2e/site.spec.ts` only if the route assertions from Task 1 need final selectors
- Generated: `dist/` is not committed unless the repository workflow requires it

- [ ] **Step 1: Run the complete local verification**

Run:

```bash
npm test
npm run validate
npm run check
npm run build
npm run test:e2e
```

Expected: all unit tests pass, Astro check passes, the static build creates `/zh-Hans/apps/banzhuren/` plus its three document pages, and no `/en/apps/banzhuren/` page is generated.

- [ ] **Step 2: Inspect the generated Chinese pages**

Use the local preview or generated files to confirm the homepage card, detail page, icon, screenshot, “上架中” status, and all three policy links render without empty hrefs or overlapping content. Confirm existing English app pages still render.

- [ ] **Step 3: Commit the implementation**

Run:

```bash
git add src public docs scripts tests
git commit -m "feat: add banzhuren app and Chinese legal pages"
```

- [ ] **Step 4: Push to the configured website remote**

Run:

```bash
git push origin main
```

Confirm the push succeeds and report the resulting commit. The `.github/workflows/deploy-pages.yml` workflow will run `npm ci`, `npm test`, `npm run build`, upload `dist`, and deploy GitHub Pages. If GitHub authentication or remote access blocks the push, preserve the local commit and report the exact blocker without claiming deployment succeeded.

## Completion Checklist

- [ ] Only `zh-Hans` routes exist for `banzhuren`.
- [ ] Homepage and detail page show “班主任小秘书”.
- [ ] The pre-release CTA has no App Store URL and visibly says “上架中”.
- [ ] Chinese privacy, support, and terms pages contain the approved email and verified app behavior.
- [ ] Existing five-language apps remain unchanged.
- [ ] `npm test`, `npm run validate`, `npm run check`, `npm run build`, and `npm run test:e2e` pass, or any unavailable command is explicitly reported.
- [ ] `git push origin main` succeeds and the deployment workflow is triggered, or the exact push blocker is reported.
