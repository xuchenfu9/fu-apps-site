# App Card Navigation and PerfectList Alarm Copy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make each application card open its detail page except for the explicit App Store button, and make PerfectList lead with its system-level alarm and calendar-rule strengths in all five languages.

**Architecture:** `AppCard.astro` receives one absolute detail-page anchor that spans the card. CSS lets all non-interactive content pass clicks through to this anchor while raising only the existing App Store anchor above it. PerfectList remains a five-feature `AppRecord`; only its localized summaries and feature order change.

**Tech Stack:** Astro 7, TypeScript, Vitest, Playwright, CSS cascade layers.

---

## File Structure

- Modify: `src/components/AppCard.astro` — use one semantic full-card detail anchor and retain the App Store CTA.
- Modify: `src/styles/global.css` — define the card link stack and pointer-event boundary.
- Modify: `src/data/apps.ts` — replace PerfectList localized copy with alarm-first content.
- Modify: `tests/e2e/site.spec.ts` — cover card-surface navigation and CTA URL.
- Modify: `tests/scripts/check-content.test.ts` — prevent the lead PerfectList feature from losing its schedule rules.

### Task 1: Add a Full-Card Detail Link Without Changing the CTA

**Files:**
- Modify: `tests/e2e/site.spec.ts`
- Modify: `src/components/AppCard.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Add a failing browser test for a non-CTA card click**

Append this test after the gallery test in `tests/e2e/site.spec.ts`:

```ts
test("opens an app detail page from a card surface while preserving the App Store CTA", async ({ page }) => {
  await page.goto("zh-Hans/");

  const card = page.locator(".app-card").filter({ hasText: "番茄钟Todo" });
  await expect(card.locator("[data-storefront-cta]")).toHaveAttribute("href", /apps\.apple\.com\/cn\/app\/id6759079848/);

  const box = await card.boundingBox();
  if (!box) throw new Error("PerfectList card is not visible.");
  await page.mouse.click(box.x + box.width - 32, box.y + 32);

  await expect(page).toHaveURL(/\/fu-apps-site\/zh-Hans\/apps\/perfectlist\/$/);
});
```

- [ ] **Step 2: Prove the new test fails on the old card**

Run:

```sh
npm test:e2e -- --grep "opens an app detail page from a card surface"
```

Expected: FAIL because an empty card point is not currently an anchor.

- [ ] **Step 3: Replace the separate detail anchors with the full-card anchor**

Replace the markup inside the existing `article` in `src/components/AppCard.astro` with:

```astro
<a class="app-card__surface-link" href={appPath} aria-label={`${ui[locale].viewApp}: ${getListingDisplayName(listing)}`}></a>
<div class="app-card__cover" aria-hidden="true">
  <img src={publicPath(app.icon)} width="1024" height="1024" alt="" loading="lazy" />
</div>
<div class="app-card__body">
  <p>{appCopy.eyebrow}</p>
  <h2><span {...attributes} data-storefront-name>{getListingDisplayName(listing)}</span></h2>
  <p class="app-card__summary">{appCopy.summary}</p>
  <div class="app-card__actions">
    <span class="text-link">{ui[locale].viewApp}<span aria-hidden="true"> →</span></span>
    <div class="app-card__store"><AppStoreCTA app={app} locale={locale} compact /></div>
  </div>
</div>
```

Keep the surrounding `<article class="app-card" style={...}>` intact. The visible “查看应用” becomes a non-interactive span because the surface link provides the one accessible details destination.

- [ ] **Step 4: Add the explicit stack and pointer-event styles**

Add this CSS beside the current `.app-card` rules in `src/styles/global.css`:

```css
.app-card {
  position: relative;
}

.app-card__surface-link {
  position: absolute;
  z-index: 1;
  inset: 0;
}

.app-card__cover,
.app-card__body {
  position: relative;
  z-index: 2;
  pointer-events: none;
}

.app-card__store {
  position: relative;
  z-index: 3;
  pointer-events: none;
}

.app-card__store .app-store-cta > a {
  pointer-events: auto;
}
```

Do not edit `AppStoreCTA.astro` and do not add a script. The CTA note remains pointer-transparent, so only the actual App Store button is the exception to card navigation.

- [ ] **Step 5: Verify card behavior and commit**

Run:

```sh
npm test:e2e -- --grep "opens an app detail page from a card surface"
npm run test:e2e
git add src/components/AppCard.astro src/styles/global.css tests/e2e/site.spec.ts
git commit -m "feat: make app cards open product details"
```

Expected: the new test and the full Playwright suite pass before the commit.

### Task 2: Make PerfectList Alarm-First in Every Site Language

**Files:**
- Modify: `tests/scripts/check-content.test.ts`
- Modify: `src/data/apps.ts`

- [ ] **Step 1: Add a failing guard for the alarm schedule rules**

Change the app import in `tests/scripts/check-content.test.ts` to:

```ts
import { apps, appsBySlug } from "../../src/data/apps";
```

Then add this test:

```ts
it("leads PerfectList with its system-level alarm and schedule rules", () => {
  const firstFeature = appsBySlug.perfectlist.copy["zh-Hans"].features[0];

  expect(firstFeature.title).toContain("系统级闹钟");
  expect(firstFeature.description).toContain("节假日");
  expect(firstFeature.description).toContain("工作日");
  expect(firstFeature.description).toContain("单休");
  expect(firstFeature.description).toContain("大小周");
  expect(firstFeature.description).toContain("AlarmKit");
});
```

- [ ] **Step 2: Prove the new test fails on the existing content**

Run:

```sh
npm test -- --run tests/scripts/check-content.test.ts
```

Expected: FAIL because the current lead feature is task organization.

- [ ] **Step 3: Replace the PerfectList summaries and five features with these exact localized values**

Replace only the `copy: copy({ ... })` object inside `const perfectlist` in `src/data/apps.ts`. Keep its slug, email, screenshots, and App Store listings unchanged.

| Locale | Summary | Five features in order |
| --- | --- | --- |
| `zh-Hans` | `让系统级闹钟理解节假日、工作日与排班节奏，再把农历生日、任务、习惯和日历收进同一份日程。` | `系统级闹钟，懂你的排班` — `在支持的 iOS 18+ 系统版本且获授权时使用 AlarmKit；闹钟支持每天、每周、每月、每年、工作日与节假日，还能适配单休、大小周和自定义周循环。`<br>`农历生日，不再手算` — `为农历或公历生日建立提醒，也能管理重复日期，让重要的人和日子提前出现在日程里。`<br>`任务进入系统日历` — `用优先级、分类和时间整理任务，并可把有日期的任务同步到系统日历，安排与待办保持一致。`<br>`习惯与番茄钟一起推进` — `按每日、每周、每月或每年建立习惯，在任务之间启动番茄钟，用清晰的专注时段完成计划。`<br>`常用设备上随时查看` — `在 iPhone、iPad、Mac、Apple Watch 与小组件中查看日程，并可按设备设置使用 iCloud 同步。` |
| `zh-Hant` | `讓系統級鬧鐘理解節假日、工作日與排班節奏，再把農曆生日、任務、習慣和日曆收進同一份日程。` | `系統級鬧鐘，懂你的排班` — `在支援的 iOS 18+ 系統版本且獲得授權時使用 AlarmKit；鬧鐘支援每天、每週、每月、每年、工作日與節假日，也能配合單休、大小週和自訂週循環。`<br>`農曆生日，不再手算` — `為農曆或國曆生日建立提醒，也能管理重複日期，讓重要的人和日子提早出現在日程裡。`<br>`任務進入系統日曆` — `用優先順序、分類和時間整理任務，並可把有日期的任務同步到系統日曆，安排與待辦保持一致。`<br>`習慣與番茄鐘一起推進` — `依每日、每週、每月或每年建立習慣，在任務之間啟動番茄鐘，以清楚的專注時段完成計畫。`<br>`常用裝置隨時查看` — `在 iPhone、iPad、Mac、Apple Watch 與小工具中查看日程，並可依裝置設定使用 iCloud 同步。` |
| `en` | `Let system-level alarms follow holidays, workdays, and your work rhythm, then keep lunar birthdays, tasks, habits, and calendar plans in one schedule.` | `A system-level alarm for your schedule` — `On supported, authorized iOS 18+ devices, use AlarmKit for daily, weekly, monthly, yearly, workday, and holiday alarms, including single-day weekends, alternating work weeks, and custom weekly cycles.`<br>`Lunar birthdays without mental math` — `Create reminders for lunar or Gregorian birthdays and recurring dates, so important people and days appear before they are due.`<br>`Tasks that reach your calendar` — `Organize tasks with priorities, categories, and times, then synchronize dated tasks with the system calendar to keep plans aligned.`<br>`Habits and Pomodoro in one flow` — `Build daily, weekly, monthly, or yearly habits, then start a Pomodoro session between tasks for a defined period of focus.`<br>`Ready on your Apple devices` — `Check the schedule from iPhone, iPad, Mac, Apple Watch, and widgets, with iCloud synchronization available through your device settings.` |
| `ja` | `祝日、平日、勤務サイクルに合わせたシステムレベルのアラームと、旧暦の誕生日、タスク、習慣、カレンダーを一つの予定にまとめます。` | `勤務に合わせるシステムレベルのアラーム` — `対応し、許可された iOS 18+ では AlarmKit を使用。毎日、毎週、毎月、毎年、平日、祝日のアラームに加え、週休1日、隔週勤務、カスタムの週サイクルにも対応します。`<br>`旧暦の誕生日も迷わない` — `旧暦または新暦の誕生日と繰り返し日を通知に設定し、大切な人と日を前もって予定に表示します。`<br>`タスクをシステムカレンダーへ` — `優先度、カテゴリ、時刻でタスクを整理し、日付のあるタスクをシステムカレンダーに同期して予定をそろえます。`<br>`習慣とポモドーロを一つの流れに` — `毎日、毎週、毎月、毎年の習慣を作り、タスクの合間にポモドーロを始めて集中時間を確保できます。`<br>`いつもの Apple デバイスで` — `iPhone、iPad、Mac、Apple Watch、ウィジェットで予定を確認し、端末設定に応じて iCloud 同期も利用できます。` |
| `ko` | `공휴일, 평일, 근무 리듬에 맞는 시스템 수준 알람과 음력 생일, 할 일, 습관, 캘린더 계획을 하나의 일정으로 관리하세요.` | `근무 일정에 맞는 시스템 수준 알람` — `지원되고 권한이 허용된 iOS 18+ 기기에서 AlarmKit을 사용합니다. 매일, 매주, 매월, 매년, 평일, 공휴일 알람과 주 1회 휴무, 격주 근무, 사용자 지정 주간 반복을 지원합니다.`<br>`음력 생일도 계산 없이` — `음력 또는 양력 생일과 반복 날짜에 알림을 설정해 중요한 사람과 날짜를 미리 일정에서 확인합니다.`<br>`캘린더까지 이어지는 할 일` — `우선순위, 카테고리, 시간으로 할 일을 정리하고 날짜가 있는 할 일을 시스템 캘린더와 동기화해 계획을 맞춥니다.`<br>`습관과 포모도로를 한 흐름으로` — `매일, 매주, 매월, 매년 습관을 만들고 할 일 사이에서 포모도로를 시작해 분명한 집중 시간을 확보합니다.`<br>`익숙한 Apple 기기에서` — `iPhone, iPad, Mac, Apple Watch, 위젯에서 일정을 확인하고 기기 설정에 따라 iCloud 동기화를 이용합니다.` |

Set the `zh-Hans` eyebrow to `系统级闹钟、任务与习惯`, `zh-Hant` to `系統級鬧鐘、任務與習慣`, `en` to `System alarms, tasks, and habits`, `ja` to `システムアラーム、タスク、習慣`, and `ko` to `시스템 알람, 할 일, 습관`.

- [ ] **Step 4: Run content validation and commit**

Run:

```sh
npm test -- --run tests/scripts/check-content.test.ts
npm run validate
git add src/data/apps.ts tests/scripts/check-content.test.ts
git commit -m "feat: highlight PerfectList system alarms"
```

Expected: the new assertion passes and validation still reports five apps and 75 legal documents.

### Task 3: Run the Full Static-Site and Visual Verification

**Files:**
- Verify only: `src/components/AppCard.astro`, `src/styles/global.css`, `src/data/apps.ts`, `tests/e2e/site.spec.ts`

- [ ] **Step 1: Run the full test and production build suite**

Run:

```sh
npm test
npm run validate
npm run check
npm run build
npm run test:e2e
```

Expected: Vitest, content validation, Astro diagnostics, static build, and Playwright all pass without errors.

- [ ] **Step 2: Capture desktop and mobile screenshots with Chromium**

Run:

```sh
node --input-type=module - <<'NODE'
import { chromium } from "@playwright/test";

const browser = await chromium.launch();
for (const [name, viewport, url] of [
  ["desktop", { width: 1440, height: 1000 }, "http://127.0.0.1:4321/fu-apps-site/zh-Hans/"],
  ["mobile", { width: 390, height: 844 }, "http://127.0.0.1:4321/fu-apps-site/zh-Hans/apps/perfectlist/"]
]) {
  const page = await browser.newPage({ viewport });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.screenshot({ path: `/tmp/fu-apps-${name}.png`, fullPage: true });
  await page.close();
}
await browser.close();
NODE
```

Expected: all card content is visually above the link layer, the App Store button remains clickable, and the mobile PerfectList feature list starts with the long alarm-rule description without overflow.

- [ ] **Step 3: Confirm clean release state**

Run:

```sh
git status --short
git log -2 --oneline
```

Expected: a clean worktree after the two feature commits, ready to push `main` and let the Pages workflow deploy the static update.
