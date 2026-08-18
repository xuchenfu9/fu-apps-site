import { describe, expect, it } from "vitest";
import { apps, appsBySlug } from "../../src/data/apps";
import { legalDocumentsBySlug, type LegalDocument } from "../../src/data/legal";
import { locales } from "../../src/lib/locales";

describe("legal document completeness", () => {
  it("provides privacy, support, and terms in every supported locale", () => {
    for (const app of apps) {
      for (const locale of app.supportedLocales ?? locales) {
        const documents = legalDocumentsBySlug[app.slug][locale];
        expect(documents).toBeDefined();
        if (!documents) continue;
        expect(documents.privacy.sections.length).toBeGreaterThan(0);
        expect(documents.support.sections.length).toBeGreaterThan(0);
        expect(documents.terms.sections.length).toBeGreaterThan(0);
      }
    }
  });

  it("uses the approved support address in every published legal document", () => {
    for (const app of apps) {
      for (const locale of app.supportedLocales ?? locales) {
        const documents = legalDocumentsBySlug[app.slug][locale];
        expect(documents).toBeDefined();
        if (!documents) continue;
        for (const document of Object.values(documents).filter((value): value is LegalDocument => Boolean(value))) {
          const text = document.sections.flatMap((section) => section.paragraphs).join(" ");
          expect(text).toContain("fxcpxs@163.com");
          expect(text).not.toMatch(/panxiaosen@/i);
        }
      }
    }
  });

  it("provides Chinese-only legal documents for Banzhuren", () => {
    const documents = legalDocumentsBySlug.banzhuren;

    expect(appsBySlug.banzhuren.supportedLocales).toEqual(["zh-Hans"]);
    expect(documents["zh-Hans"]?.privacy.sections.length).toBeGreaterThan(0);
    expect(documents["zh-Hans"]?.support.sections.length).toBeGreaterThan(0);
    expect(documents["zh-Hans"]?.terms.sections.length).toBeGreaterThan(0);
    expect(documents.en).toBeUndefined();
  });

  it("keeps Banzhuren legal copy aligned with its network and permission behavior", () => {
    const documents = legalDocumentsBySlug.banzhuren["zh-Hans"];
    const privacyText = documents?.privacy.sections
      .flatMap((section) => [...section.paragraphs, ...(section.bullets ?? [])])
      .join(" ") ?? "";
    const supportText = documents?.support.sections
      .flatMap((section) => [...section.paragraphs, ...(section.bullets ?? [])])
      .join(" ") ?? "";
    const termsText = documents?.terms.sections.flatMap((section) => section.paragraphs).join(" ") ?? "";
    const allText = [privacyText, supportText, termsText].join(" ");

    expect(allText).toContain("系统邮件");
    expect(allText).toContain("CloudKit 私有数据库");
    expect(allText).toContain("SecretaryTips.json");
    expect(allText).not.toContain("反馈服务器");
    expect(allText).not.toContain("随机安装标识符");
    expect(allText).not.toContain("在线反馈数据库");
    expect(privacyText).toContain("HTTP，传输不加密");
    expect(privacyText).toContain("不自行上传");
    expect(privacyText).toContain("不保存反馈历史");
    expect(privacyText).toContain("不轮询回复");
    expect(privacyText).toContain("主动选择照片");
    expect(privacyText).toContain("90 天免费试用");
    expect(privacyText).toContain("首次启动时开始计算");
    expect(privacyText).toContain("Keychain");
    expect(privacyText).toContain("删除并重新安装后");
    expect(privacyText).toContain("Apple StoreKit");
    expect(termsText).toContain("未加密 HTTP");
    expect(termsText).toContain("试用结束后");
    expect(termsText).toContain("首次启动应用时开始计算");
    expect(termsText).toContain("本机 Keychain");
    expect(termsText).toContain("删除并重新安装后仍沿用原试用日期");
    expect(termsText).toContain("一次性非消耗型");
    expect(termsText).toContain("不会自动续费");
  });
});
