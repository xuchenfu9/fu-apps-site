# 佳佳照片 Build 8 官网对齐 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans (recommended). Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将官网产品资料和多语言法律页面对齐到已验证的 1.1.1（Build 8）通用人像照片编辑器。

**Architecture:** 保留官网现有 Astro 数据驱动结构与 `jiajia-id-photo` URL slug，只替换该应用的 catalog copy、市场显示名和显式法律文档。应用仓库仍作为独立审计对象记录其主分支落后于 Build 8 的事实；工作流和审计文档写入应用仓库审计副本，不把无法确认的旧源代码冒充成 Build 8。

**Tech Stack:** Astro 7、TypeScript、Vitest、Astro Check、静态 Markdown/HTML 文档。

**Spec:** `docs/superpowers/specs/2026-08-28-jiajia-build8-alignment.md`

## Global Constraints

- 产品名称必须使用中文 `佳佳照片`，英语/法语品牌名使用 `JiaJia Photo`。
- 产品定位必须是通用人像照片编辑器；不得宣传身份证、护照、签证、驾驶证、文凭、证书、官方文件或实体打印排版。
- 隐私表述必须承认公开版本/推荐内容请求及本地缓存，不得笼统宣称“完全离线”或“绝不联网”。
- 不修改旧版本 App Store Connect 媒体，不在用户批准前上传媒体或推送 GitHub。

---

### Task 1: 更新官网应用卡片与市场名称

**Files:**
- Modify: `src/data/apps.ts`
- Test: `tests/lib/storefront.test.ts`

- [x] **Step 1: Write the failing assertions**

在 storefront 测试中断言 Build 8 的中文、繁中和英语展示名为 `佳佳照片` / `JiaJia Photo`，并断言产品 copy 不含旧品牌或官方文件用途词。

- [x] **Step 2: Run the focused test and verify it fails**

Run: `npm test -- tests/lib/storefront.test.ts`

Expected: 现有 `證照好拍`、`MapleLens ID` 或 `US PassSnap` 断言失败。

- [x] **Step 3: Replace the app record copy**

将五个站点语言的 eyebrow、summary 和五条功能改写为拍摄/选图、设备端处理、背景/亮度/自然美化、常见比例/自由裁剪、PNG/JPEG 导出；将五个市场的 `nextReleaseName` 统一为中文名或 `JiaJia Photo`，保留 `planned` 状态和既有 App Store ID。

- [x] **Step 4: Re-run the focused test**

Run: `npm test -- tests/lib/storefront.test.ts`

Expected: PASS。

### Task 2: 重写五种站点语言的法律文档

**Files:**
- Modify: `src/data/legal/jiajia-id-photo.ts`
- Test: `tests/data/legal.test.ts`

- [x] **Step 1: Add product-specific legal assertions**

断言五种语言的隐私、支持和条款都包含 `JiaJia Photo` 或 `佳佳照片`、设备端处理、公开版本/推荐请求边界、无广告/行为分析和 `fxcpxs@163.com`，且不含 MapleLens、PassSnap、官方证件或打印排版宣传。

- [x] **Step 2: Run the focused legal test and verify it fails**

Run: `npm test -- tests/data/legal.test.ts`

Expected: 现有工厂生成的旧名称或证件照内容触发失败。

- [x] **Step 3: Implement explicit localized legal documents**

为 `zh-Hans`、`zh-Hant`、`en`、`ja`、`ko` 分别提供隐私政策、用户支持和服务条款，准确写明权限、照片/临时人脸位置数据、本地缓存、用户主动保存、可选网络请求、删除方式、无购买和不保证第三方用途结果。

- [x] **Step 4: Re-run the focused legal test**

Run: `npm test -- tests/data/legal.test.ts`

Expected: PASS。

### Task 3: 写入截图生成工作流和审计记录

**Files:**
- Create: `/Users/fuxuchen/Documents/OneDollarID-github-review-20260828/docs/workflows/store-screenshot-generation.md`
- Create: `/Users/fuxuchen/Documents/OneDollarID-github-review-20260828/docs/audits/2026-08-28-build8-repository-alignment.md`

- [x] **Step 1: Document the repeatable capture workflow**

记录 Build 8 的模拟器/真机选择、区域与系统语言设置、权限与教程处理、五个画面顺序、文件命名、`1320×2868` 校验、跨语言混入检查、预审目录、App Store Connect 上传闸门。

- [x] **Step 2: Record repository findings**

记录 GitHub app repo 主分支 `f7dc6b8` 与网站 repo `1af6b969` 的审计版本、旧证件语义、Build 8 已验证事实、当前修改分支和未推送状态。

- [x] **Step 3: Verify documentation links and terminology**

Run: `rg -n -i 'MapleLens|PassSnap|证照准拍|證照好拍|passport|身份证|护照|打印排版|print layout' docs/workflows docs/audits`

Expected: 审计记录可以提及“发现的旧词”，工作流正文不把这些词作为产品能力。

### Task 4: Run the website verification gate

**Files:**
- No additional source files.

- [x] **Step 1: Install locked dependencies if needed**

Run: `npm ci`

Expected: lockfile-resolved dependencies install successfully without changing `package-lock.json`。

- [x] **Step 2: Run validation and type checks**

Run: `npm run validate && npm run check`

Expected: all app assets/legal documents validate and Astro check exits 0。

- [x] **Step 3: Run unit tests and production build**

Run: `npm test && npm run build`

Expected: all tests pass and `dist/` builds successfully。

- [x] **Step 4: Inspect generated pages**

Run: `rg -n -i 'MapleLens|PassSnap|证照准拍|證照好拍|身份证|护照|passport|print layout|打印排版' dist/zh-Hans/apps/jiajia-id-photo dist/zh-Hant/apps/jiajia-id-photo dist/en/apps/jiajia-id-photo`

Expected: no old product name or prohibited product-capability claim remains in generated public pages。
