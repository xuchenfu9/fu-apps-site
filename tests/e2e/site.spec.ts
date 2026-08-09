import { expect, test } from "@playwright/test";

test("shows the FU apps gallery and Storefront-aware App Store links", async ({ page }) => {
  await page.goto("en/");

  await expect(page.getByRole("heading", { name: "FU apps" })).toBeVisible();
  await expect(page.getByRole("link", { name: /PerfectList/i }).first()).toBeVisible();
  await expect(page.locator('[data-storefront-cta]').first()).toHaveAttribute("href", /apps\.apple\.com/);
});

test("opens an app detail page from a card surface while preserving the App Store CTA", async ({ page }) => {
  await page.goto("zh-Hans/");
  await page.locator("astro-dev-toolbar").evaluateAll((toolbars) => toolbars.forEach((toolbar) => toolbar.remove()));

  const card = page.locator('.app-card:has(a[href="/fu-apps-site/zh-Hans/apps/perfectlist/"])');
  await expect(card.locator("[data-storefront-cta]")).toHaveAttribute("href", /apps\.apple\.com\/.*\/app\/id6759079848/);

  const summary = card.locator(".app-card__summary");
  await summary.scrollIntoViewIfNeeded();
  const box = await summary.boundingBox();
  if (!box) throw new Error("PerfectList card summary is not visible.");
  await page.mouse.click(box.x + 8, box.y + 8);

  await expect(page).toHaveURL(/\/fu-apps-site\/zh-Hans\/apps\/perfectlist\/$/);
});

test("shows Banzhuren as a Chinese-only app that is still coming to the App Store", async ({ page }) => {
  await page.goto("zh-Hans/");

  const card = page.locator('.app-card:has(a[href="/fu-apps-site/zh-Hans/apps/banzhuren/"])');
  await expect(card).toBeVisible();
  await expect(card.getByText("班主任小秘书")).toBeVisible();
  await expect(card.locator("[data-storefront-status]")).toHaveText("上架中");
  await expect(card.locator("[data-storefront-cta]")).toHaveCount(0);

  const missingLocaleResponse = await page.request.get("en/apps/banzhuren/");
  expect(missingLocaleResponse.status()).toBe(404);
});

test("keeps a legal document path when changing language", async ({ page }) => {
  await page.goto("en/apps/perfectlist/privacy/");

  await expect(page.getByRole("heading", { name: "Privacy Policy" })).toBeVisible();
  await page.getByRole("button", { name: /Language/i }).click();
  await page.getByRole("link", { name: "简体中文" }).click();
  await expect(page).toHaveURL(/\/fu-apps-site\/zh-Hans\/apps\/perfectlist\/privacy\/$/);
  await expect(page.getByRole("heading", { name: "隐私政策" })).toBeVisible();
});

test("keeps primary actions reachable on a phone viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("en/apps/party-games/");

  await expect(page.getByRole("heading", { name: /派对游戏/ })).toBeVisible();
  await expect(page.locator('[data-storefront-cta]')).toBeVisible();
  await expect(page.getByRole("link", { name: /Privacy Policy/i })).toBeVisible();
});

test("shows AppStoryline pricing and marketing terms in the supported locales", async ({ page }) => {
  await page.goto("en/apps/appstoryline/");

  await expect(page.getByRole("heading", { name: "AppStoryline" })).toBeVisible();
  await expect(page.getByText("$3.99", { exact: true })).toBeVisible();
  await expect(page.getByText("One-time purchase", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Marketing Terms" })).toBeVisible();

  await page.goto("zh-Hans/apps/appstoryline/");
  await page.locator("[data-storefront-selector]").selectOption("CN");
  await expect(page.getByRole("heading", { name: "上架图生成器" })).toBeVisible();
  await expect(page.getByText("¥12", { exact: true })).toBeVisible();
  await expect(page.getByText("一次性购买", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "营销条款" })).toBeVisible();
});
