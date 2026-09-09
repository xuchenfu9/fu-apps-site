import { describe, expect, it } from "vitest";
import { apps, appsBySlug } from "../../src/data/apps";
import { legalDocumentsBySlug, type LegalDocument } from "../../src/data/legal";
import { locales } from "../../src/lib/locales";

const documentText = (document: LegalDocument | undefined) =>
  document?.sections
    .flatMap((section) => [...section.paragraphs, ...(section.bullets ?? [])])
    .join(" ") ?? "";

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

  it("uses the mainland China brand only in Simplified Chinese legal copy", () => {
    const app = appsBySlug["jiajia-id-photo"];
    const forbidden = /MapleLens|PassSnap|证照准拍|證照好拍|身份证|护照|passport|diploma|certificate|print layout|打印排版/i;
    for (const locale of locales) {
      const documents = legalDocumentsBySlug[app.slug][locale];
      expect(documents).toBeDefined();
      if (!documents) continue;
      const text = Object.values(documents)
        .filter((document): document is LegalDocument => Boolean(document))
        .flatMap((document) => document.sections.flatMap((section) => [...section.paragraphs, ...(section.bullets ?? [])]))
        .join(" ");
      if (locale === "zh-Hans") {
        expect(text).toContain("佳佳证件照");
      } else {
        expect(text).toMatch(/佳佳照片|JiaJia Photo/);
        expect(text).not.toContain("佳佳证件照");
      }
      expect(text).toMatch(/device|设备|裝置|本機|기기|デバイス/i);
      expect(text).toMatch(/recommend|推荐|推薦|おすすめ|추천/i);
      expect(text).toContain("fxcpxs@163.com");
      expect(text).not.toMatch(forbidden);
    }
  });

  it("provides complete localized legal documents for Banzhuren", () => {
    const documents = legalDocumentsBySlug.banzhuren;

    expect(appsBySlug.banzhuren.supportedLocales).toEqual(locales);
    for (const locale of locales) {
      expect(documents[locale]?.privacy.sections.length).toBeGreaterThan(0);
      expect(documents[locale]?.support.sections.length).toBeGreaterThan(0);
      expect(documents[locale]?.terms.sections.length).toBeGreaterThan(0);
      expect(documents[locale]?.privacy.updatedAt).toBe("2026-08-30");
      expect(documentText(documents[locale]?.privacy)).toContain("fxcpxs@163.com");
    }
  });

  it("keeps Banzhuren privacy copy aligned with its storage, permissions, mail, and network behavior", () => {
    const document = legalDocumentsBySlug.banzhuren["zh-Hans"]?.privacy;
    const privacyText = documentText(document);

    expect(document?.updatedAt).toBe("2026-08-30");
    expect(privacyText).toContain("CloudKit 私有数据库");
    expect(privacyText).toContain("照片、录音和文件附件的二进制内容不会随 Core Data 自动同步");
    expect(privacyText).toContain("SecretaryTips.json");
    expect(privacyText).toContain("不请求远程 Tips");
    expect(privacyText).toContain("timor.tech");
    expect(privacyText).toContain("raw.githubusercontent.com");
    expect(privacyText).toContain("查询年份");
    expect(privacyText).toContain("标准网络请求信息");
    expect(privacyText).toContain("HTTP，传输不加密");
    expect(privacyText).toContain("进入后台不会自动停止");
    expect(privacyText).toContain("用户主动停止");
    expect(privacyText).toContain("App 终止");
    expect(privacyText).toContain("系统终止监听");
    expect(privacyText).toContain("语音识别");
    expect(privacyText).toContain("相机");
    expect(privacyText).toContain("定位");
    expect(privacyText).toContain("经纬度");
    expect(privacyText).toContain("反向地理编码");
    expect(privacyText).toContain("保存草稿");
    expect(privacyText).toContain("系统邮件草稿箱");
    expect(privacyText).toContain("成功发送后");
    expect(privacyText).toContain("已发送副本");
    expect(privacyText).toContain("邮件 App 或邮件服务商");
    expect(privacyText).toContain("开发者收件邮箱");
    expect(privacyText).toContain("不自行上传");
    expect(privacyText).toContain("不保存反馈历史");
    expect(privacyText).toContain("不轮询回复");
    expect(privacyText).toContain("主动选择照片");
    expect(privacyText).toContain("移动端基础班务管理功能可以免费使用");
    expect(privacyText).toContain("月度自动续期订阅");
    expect(privacyText).toContain("年度自动续期订阅");
    expect(privacyText).toContain("一次性终身会员");
    expect(privacyText).toContain("不提供免费试用");
    expect(privacyText).toContain("不会自动取消或退还当前的月度或年度订阅");
    expect(privacyText).toContain("Apple StoreKit");
    expect(privacyText).not.toContain("90 天");
    expect(privacyText).not.toContain("Keychain");
    expect(privacyText).not.toContain("反馈服务器");
    expect(privacyText).not.toContain("随机安装标识符");
    expect(privacyText).not.toContain("在线反馈数据库");
  });

  it("keeps Banzhuren support copy explicit about backup and system-mail ownership", () => {
    const document = legalDocumentsBySlug.banzhuren["zh-Hans"]?.support;
    const supportText = documentText(document);

    expect(document?.updatedAt).toBe("2026-08-30");
    expect(supportText).toContain("照片、录音和文件附件的二进制内容不会随 Core Data 自动同步");
    expect(supportText).toContain("保存草稿");
    expect(supportText).toContain("系统邮件草稿箱");
    expect(supportText).toContain("成功发送后");
    expect(supportText).toContain("已发送副本");
    expect(supportText).toContain("邮件 App 或邮件服务商");
    expect(supportText).toContain("开发者收件邮箱");
    expect(supportText).toContain("月度自动续期订阅");
    expect(supportText).toContain("年度自动续期订阅");
    expect(supportText).toContain("终身会员");
    expect(supportText).toContain("不会自动取消或退款");
    expect(supportText).not.toContain("90 天");
    expect(supportText).not.toContain("反馈服务器");
    expect(supportText).not.toContain("随机安装标识符");
    expect(supportText).not.toContain("在线反馈数据库");
  });

  it("keeps Banzhuren terms aligned with service lifecycles and third-party boundaries", () => {
    const document = legalDocumentsBySlug.banzhuren["zh-Hans"]?.terms;
    const termsText = documentText(document);

    expect(document?.updatedAt).toBe("2026-09-09");
    expect(termsText).toContain("未加密 HTTP");
    expect(termsText).toContain("进入后台不会自动停止");
    expect(termsText).toContain("用户主动停止");
    expect(termsText).toContain("App 终止");
    expect(termsText).toContain("系统终止监听");
    expect(termsText).toContain("timor.tech");
    expect(termsText).toContain("raw.githubusercontent.com");
    expect(termsText).toContain("SecretaryTips.json");
    expect(termsText).toContain("不请求远程 Tips");
    expect(termsText).toContain("语音识别");
    expect(termsText).toContain("相机");
    expect(termsText).toContain("定位");
    expect(termsText).toContain("保存草稿");
    expect(termsText).toContain("成功发送后");
    expect(termsText).toContain("开发者收件邮箱");
    expect(termsText).toContain("照片、录音和文件附件的二进制内容不会随 Core Data 自动同步");
    expect(termsText).toContain("移动端基础班务管理功能可以免费使用");
    expect(termsText).toContain("月度会员和年度会员");
    expect(termsText).toContain("自动续期订阅");
    expect(termsText).toContain("至少 24 小时");
    expect(termsText).toContain("一次性非消耗型");
    expect(termsText).toContain("不会自动取消或退款");
    expect(termsText).not.toContain("90 天");
    expect(termsText).not.toContain("Keychain");
    expect(termsText).not.toContain("反馈服务器");
    expect(termsText).not.toContain("随机安装标识符");
    expect(termsText).not.toContain("在线反馈数据库");
  });
});
