import { describe, expect, it } from "vitest";
import { appsBySlug } from "../../src/data/apps";
import { legalDocumentsBySlug } from "../../src/data/legal";
import { locales } from "../../src/lib/locales";

describe("App Screenshot Tools launch catalog", () => {
  it("registers the five supported locales and regional one-time prices", () => {
    const app = appsBySlug.appstoryline;

    expect(app).toBeDefined();
    expect(app?.appStoreId).toBe("6799942231");
    expect(app?.release).toMatchObject({ version: "1.0.1", build: "8" });
    expect(app?.release?.notes["zh-Hans"]).toEqual([
      "应用更名为上架图工具。",
      "优化文本框新增、删除、拖动和大屏编辑；同一文本框支持分别设置字号与颜色。",
      "预览改为按需打开，优化手机模型控制按钮，并修复文本框拖动抖动。"
    ]);
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

  it("records a version and update notes for every catalog app", () => {
    expect(Object.keys(appsBySlug)).toHaveLength(8);

    for (const app of Object.values(appsBySlug)) {
      expect(app.release?.version).toMatch(/^\d+\.\d+(\.\d+)?$/);
      expect(app.release?.notes["zh-Hans"]?.length).toBeGreaterThan(0);
    }

    expect(appsBySlug["jiajia-id-photo"].listings.CN?.state).toBe("live");
    expect(appsBySlug["jiajia-id-photo"].release).toMatchObject({ version: "1.1.1", build: "8" });
    expect(appsBySlug["fuzhixing-dashcam"].release).toMatchObject({ version: "1.0", build: "1" });
  });
});
