# FU apps 官网视觉与响应式重设计 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 FU apps 官网改造成具有独立 Apple 软件工作室气质的静态产品展厅，并保证全部文档链接和手机端体验稳定。

**Architecture:** 保留 Astro 静态生成、现有应用数据和法律文档数据。通过首页与详情页的结构重排、共用展示组件和一套响应式 CSS 完成视觉升级；文档页只调整页面外壳和阅读布局，路由与正文保持原样。

**Tech Stack:** Astro 7、TypeScript、CSS、Vitest、Playwright、GitHub Pages Actions。

**Spec:** `docs/superpowers/specs/2026-09-12-fu-apps-site-redesign-design.md`

## Global Constraints

- 文档 URL 必须保持 `/{locale}/apps/{slug}/privacy/`、`support/`、`terms/`、`marketing/`。
- 现有五种语言路径和八款应用 slug 不变。
- 不修改 `src/data/legal/` 法律正文、更新时间、联系方式或应用实际链接。
- 保留 Astro 静态输出和 `.github/workflows/deploy-pages.yml`。
- 不引入数据库、登录、服务端 API 或运行时渲染。
- 手机端覆盖 320px、390px、768px，页面不得横向溢出。
- 保留 `public/assets/apps/` 中已批准素材。

### Task 1: 建立可复用的首页产品展厅结构

**Files:**
- Modify: `src/pages/[locale]/index.astro`
- Modify: `src/components/AppCard.astro`
- Create: `src/components/FeaturedApp.astro`
- Create: `src/components/UpdateRow.astro`
- Modify: `src/lib/ui.ts`

**Interfaces:**
- `FeaturedApp` consumes `{ app: AppRecord; locale: Locale; tone: string }` and produces a linked featured product block.
- `UpdateRow` consumes `{ app: AppRecord; locale: Locale }` and produces a linked update summary.
- Existing `AppCard` keeps its `app`, `locale`, and `position` props and keeps the whole-card route plus independent App Store CTA.

- [ ] **Step 1: Add localized labels for the new homepage sections**

Add `featuredApps`, `latestUpdates`, `exploreApps`, `studioIntro`, and `viewDetails` to `UiCopy`, with values in all five locale objects.

- [ ] **Step 2: Create the featured product component**

Render the app icon, localized name, eyebrow, summary, version, first screenshot, App Store CTA, and detail link. Set a `data-tone` attribute from the `tone` prop so CSS can theme each featured item.

- [ ] **Step 3: Create the update row component**

Read `app.release.notes[locale]` with `zh-Hans` fallback, render the first note as the summary, render version/build, and link to the app detail route.

- [ ] **Step 4: Replace the homepage markup**

Use a brand hero, a three-app featured grid, the existing full app catalog, and a latest-updates section. Select `appstoryline`, `jiajia-id-photo`, and `perfectlist` as featured apps because they represent the screenshot, portrait, and productivity categories.

- [ ] **Step 5: Run focused checks**

Run `npm run check` and `npm test`. Expected: no Astro diagnostics and all existing tests pass.

### Task 2: Rebuild the shared visual system and mobile layout

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/layouts/SiteLayout.astro`

**Interfaces:**
- Preserve all existing class hooks used by App Store, language, storefront, legal, and document components.
- Add only presentation classes for the new sections and mobile navigation behavior.

- [ ] **Step 1: Add the new theme tokens and base layout rules**

Define dark ink, warm paper, panel, muted text, line, coral, blue, and green tokens. Add `clamp()` typography, rounded cards, section spacing, and focus-visible states.

- [ ] **Step 2: Style the hero and featured grid**

Create the asymmetric hero composition, screenshot panels, featured app grid, and update rows. Add hover transforms with transitions and a `prefers-reduced-motion: reduce` override.

- [ ] **Step 3: Rework app cards without changing interaction semantics**

Keep the existing card surface link and App Store CTA stacking rules. Improve card hierarchy, app icon sizing, version badge, status display, and phone layout.

- [ ] **Step 4: Rework shared header and footer for small screens**

At widths below 720px, allow the header tools to wrap into a second row, preserve touch-sized controls, and keep the logo and language/region controls visible without horizontal scrolling.

- [ ] **Step 5: Run a local static build**

Run `npm run build`. Expected: all existing routes build successfully and no legal route is removed.

### Task 3: Redesign application detail and legal document shells

**Files:**
- Modify: `src/pages/[locale]/apps/[slug]/index.astro`
- Modify: `src/pages/[locale]/apps/[slug]/[document].astro`
- Modify: `src/components/DocumentNav.astro`

**Interfaces:**
- Preserve `getStaticPaths()` and every generated path.
- `DocumentNav` continues to receive `{ locale, slug, current? }` and uses `localePath()` for every link.
- Legal document data remains read-only to this task.

- [ ] **Step 1: Rebuild the application hero**

Use a two-column desktop hero that becomes one column on mobile, with app identity, version, CTA, first screenshot, and a compact metadata strip.

- [ ] **Step 2: Reorder detail sections for scanning**

Keep the existing features, screenshots, release notes, and document sections, but add stronger section labels, an application color tone, and a clear document navigation panel.

- [ ] **Step 3: Rebuild the legal document shell**

Keep the same legal document content and route, but use a narrow readable column, a sticky desktop document navigation area, and a single-column mobile layout. Keep back links and language switching route-preserving.

- [ ] **Step 4: Add route-preservation tests**

Extend tests to assert all existing legal document paths are generated and that language switching from a document preserves the app and document suffix.

- [ ] **Step 5: Run focused tests**

Run `npm test` and `npm run validate`. Expected: legal data remains complete and all eight apps pass content validation.

### Task 4: Mobile browser regression and visual acceptance

**Files:**
- Modify: `tests/e2e/site.spec.ts`
- Modify: `tests/lib/locales.test.ts` only if route coverage needs a direct assertion

**Interfaces:**
- Existing desktop scenarios remain valid.
- New browser assertions target stable semantic selectors and existing route patterns.

- [ ] **Step 1: Add 320px and 390px homepage checks**

Assert `document.documentElement.scrollWidth <= document.documentElement.clientWidth`, the hero heading is visible, the featured cards stack, and the language/storefront controls remain reachable.

- [ ] **Step 2: Add mobile detail and legal checks**

Open an app detail page and its privacy/support/terms pages at 390px, assert no horizontal overflow, the document navigation links are visible, and the URLs end in the existing suffixes.

- [ ] **Step 3: Run all verification commands**

Run `npm test`, `npm run validate`, `npm run check`, `npm run build`, and `npm run test:e2e`.

- [ ] **Step 4: Inspect generated routes and diff**

Use `find dist -path '*privacy/index.html' -o -path '*support/index.html' -o -path '*terms/index.html' -o -path '*marketing/index.html'` and `git diff --check` to confirm legal routes and clean formatting.

### Task 5: Commit and publish

**Files:**
- Modify: tracked implementation files from Tasks 1–4 only.

- [ ] **Step 1: Review staged scope**

Run `git status --short`, `git diff --cached --stat`, and `git diff --cached --check`. Do not stage `dist`, test artifacts, secrets, or unrelated changes.

- [ ] **Step 2: Commit with the required Chinese message**

Use a Chinese subject and body covering change, impact, verification, and deployment/recovery risk.

- [ ] **Step 3: Push GitHub and verify**

Push `publish main`, then run `git ls-remote publish refs/heads/main` and confirm it equals local `HEAD`.

- [ ] **Step 4: Push NAS and verify**

Push `nas-publish main`, then run `git ls-remote nas-publish refs/heads/main` and confirm it equals local `HEAD`.

- [ ] **Step 5: Verify GitHub Pages**

Wait for the deployment workflow to succeed, then inspect the public homepage, one app detail page, and one privacy page at desktop and mobile widths.
