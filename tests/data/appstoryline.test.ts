import { describe, expect, it } from "vitest";
import { appsBySlug } from "../../src/data/apps";
import { legalDocumentsBySlug } from "../../src/data/legal";
import { locales } from "../../src/lib/locales";

describe("AppStoryline launch catalog", () => {
  it("registers the five supported locales and regional one-time prices", () => {
    const app = appsBySlug.appstoryline;

    expect(app).toBeDefined();
    expect(app?.supportedLocales).toEqual(locales);
    expect(app?.pricing?.["zh-Hans"]).toEqual({ value: "¥12", note: "一次性购买" });
    expect(app?.pricing?.en).toEqual({ value: "$3.99", note: "One-time purchase" });
    expect(app?.pricing?.en?.note).not.toMatch(/subscription/i);
  });

  it("provides four complete documents and the no-subscription claim in every locale", () => {
    const app = appsBySlug.appstoryline;
    const legal = legalDocumentsBySlug.appstoryline;

    for (const locale of locales) {
      const documents = legal[locale];
      expect(documents).toBeDefined();
      expect(Object.keys(documents ?? {}).sort()).toEqual(["marketing", "privacy", "support", "terms"]);
      expect(documents?.marketing?.sections.length).toBeGreaterThan(0);
      expect(documents?.marketing?.sections.flatMap((section) => section.paragraphs).join(" ")).toMatch(/subscription|订阅|訂閱|サブスクリプション|구독/i);
      expect(documents?.privacy.sections.flatMap((section) => section.paragraphs).join(" ")).toContain("fxcpxs@163.com");
    }

    expect(app?.copy.en?.summary).toMatch(/device/i);
  });
});
