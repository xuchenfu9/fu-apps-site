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
