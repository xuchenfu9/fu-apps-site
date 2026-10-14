import { describe, expect, it } from "vitest";
import { apps } from "../src/data/apps";
import { legalDocumentsBySlug } from "../src/data/legal";
import { appLocales } from "../src/lib/apps";

describe("福之行车记录仪 catalog", () => {
  it("publishes the live Chinese storefront with complete legal links", () => {
    const app = apps.find((candidate) => candidate.slug === "fuzhixing-dashcam");

    expect(app).toBeDefined();
    expect(app?.contactEmail).toBe("fxcpxs@163.com");
    expect(appLocales(app!)).toEqual(["zh-Hans"]);
    expect(app?.copy["zh-Hans"]?.features).toHaveLength(5);
    expect(app?.listings.CN?.state).toBe("live");
    expect(app?.listings.CN?.url).toBe("https://apps.apple.com/cn/app/id6811306608");
    expect(app?.release?.version).toBe("1.0.1");
    expect(app?.release?.build).toBe("4");
    expect(app?.release?.notes["zh-Hans"]?.join(" ")).toContain("正式上架");
    expect(app?.release?.notes["zh-Hans"]?.join(" ")).not.toContain("发布准备");

    const documents = legalDocumentsBySlug["fuzhixing-dashcam"]?.["zh-Hans"];
    expect(documents?.privacy.updatedAt).toBe("2026-09-12");
    expect(documents?.privacy.title).toBe("隐私政策");
    expect(documents?.support.title).toBe("用户支持");
    expect(documents?.terms.title).toBe("服务条款");
    expect(documents?.privacy.sections.flatMap((section) => [
      ...section.paragraphs,
      ...(section.bullets ?? [])
    ])
      .join(" ")).toContain("不会上传到云端");
    expect(documents?.privacy.sections.flatMap((section) => [
      ...section.paragraphs,
      ...(section.bullets ?? [])
    ])
      .join(" ")).not.toContain("iCloud");
    expect(documents?.terms.sections.flatMap((section) => section.paragraphs.join(" "))
      .join(" ")).toContain("720p");
  });

  it("keeps the dashcam storefront copy free of the iPhone brand term", () => {
    const app = apps.find((candidate) => candidate.slug === "fuzhixing-dashcam");
    const copy = app?.copy["zh-Hans"];

    expect([
      copy?.eyebrow,
      copy?.summary,
      ...(copy?.features ?? []).flatMap((feature) => [feature.title, feature.description]),
    ].join(" ").toLowerCase()).not.toContain("iphone");
  });
});
