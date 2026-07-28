import { describe, expect, it } from "vitest";
import { validateContent } from "../../scripts/check-content.mts";
import { apps, appsBySlug } from "../../src/data/apps";
import { locales } from "../../src/lib/locales";

describe("published site content", () => {
  it("has a complete, renderable record for every published app", () => {
    expect(validateContent(process.cwd())).toEqual([]);
  });

  it("keeps five evidence-based feature stories and one public support address", () => {
    for (const app of apps) {
      expect(app.contactEmail).toBe("fxcpxs@163.com");
      for (const locale of locales) {
        expect(app.copy[locale].features).toHaveLength(5);
        for (const feature of app.copy[locale].features) {
          expect(feature.title.trim()).not.toHaveLength(0);
          expect(feature.description.trim()).not.toHaveLength(0);
        }
      }
    }
  });

  it("leads PerfectList with its system-level alarm and schedule rules", () => {
    const firstFeature = appsBySlug.perfectlist.copy["zh-Hans"].features[0];

    expect(firstFeature.title).toContain("系统级闹钟");
    expect(firstFeature.description).toContain("节假日");
    expect(firstFeature.description).toContain("工作日");
    expect(firstFeature.description).toContain("单休");
    expect(firstFeature.description).toContain("大小周");
    expect(firstFeature.description).toContain("AlarmKit");
  });
});
