import { describe, expect, it } from "vitest";
import { isLocale, localeLabels, localePath, locales } from "../../src/lib/locales";

describe("locale helpers", () => {
  it("exposes the five required public locales", () => {
    expect(locales).toEqual(["zh-Hans", "zh-Hant", "en", "ja", "ko"]);
    expect(Object.values(localeLabels)).toEqual(["简体中文", "繁體中文", "English", "日本語", "한국어"]);
  });

  it("creates stable locale paths", () => {
    expect(localePath("ja", "apps/party-games/privacy")).toBe("/ja/apps/party-games/privacy/");
    expect(isLocale("zh-Hant")).toBe(true);
    expect(isLocale("fr-CA")).toBe(false);
  });
});
