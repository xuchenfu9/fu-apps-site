import { describe, expect, it } from "vitest";
import { appsBySlug } from "../../src/data/apps";
import { legalDocumentsBySlug } from "../../src/data/legal";

const documentText = (document: { sections: readonly { paragraphs: readonly string[]; bullets?: readonly string[] }[] } | undefined) =>
  document?.sections.flatMap((section) => [...section.paragraphs, ...(section.bullets ?? [])]).join(" ") ?? "";

describe("Party Games paid download pricing", () => {
  it("publishes one-time paid download prices for China and other storefronts", () => {
    expect(appsBySlug["party-games"].pricing).toEqual({
      "zh-Hans": { value: "¥6", note: "一次性购买" },
      "zh-Hant": { value: "¥6", note: "一次性購買" },
      en: { value: "$1.00", note: "One-time purchase" },
      ja: { value: "$1.00", note: "一度きりの購入" },
      ko: { value: "$1.00", note: "일회성 구매" }
    });
  });

  it("keeps every Party Games legal document free of subscription claims", () => {
    const documents = legalDocumentsBySlug["party-games"];
    for (const locale of ["zh-Hans", "zh-Hant", "en", "ja", "ko"] as const) {
      const localeDocuments = documents[locale];
      expect(localeDocuments).toBeDefined();
      if (!localeDocuments) continue;
      const text = Object.values(localeDocuments).map((document) => documentText(document)).join(" ");
      expect(text).toMatch(/one-time|一次性|一次|일회성|一度きり/i);
      expect(text).toMatch(/no subscription|does not offer subscriptions|不提供订阅|不提供訂閱|サブスクリプション.*提供しません|구독.*제공하지 않습니다/i);
      expect(text).not.toMatch(/monthly subscription|月度订阅|月度訂閱|免费试用|free trial/i);
    }
  });
});
