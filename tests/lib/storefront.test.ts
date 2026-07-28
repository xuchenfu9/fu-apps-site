import { describe, expect, it } from "vitest";
import { getListingDisplayName, resolveListing, resolveRequestedStorefront } from "../../src/lib/storefront";
import type { AppRecord } from "../../src/lib/types";

const fixtureCopy = {
  "zh-Hans": { eyebrow: "测试", summary: "测试", features: [{ title: "测试", description: "测试" }] },
  "zh-Hant": { eyebrow: "測試", summary: "測試", features: [{ title: "測試", description: "測試" }] },
  en: { eyebrow: "Test", summary: "Test", features: [{ title: "Test", description: "Test" }] },
  ja: { eyebrow: "テスト", summary: "テスト", features: [{ title: "テスト", description: "テスト" }] },
  ko: { eyebrow: "테스트", summary: "테스트", features: [{ title: "테스트", description: "테스트" }] }
} satisfies AppRecord["copy"];

const partyGames: AppRecord = {
  slug: "party-games",
  appStoreId: "6759240304",
  contactEmail: "fxcpxs@163.com",
  icon: "/icon.png",
  screenshots: ["/screen.png"],
  copy: fixtureCopy,
  listings: {
    US: {
      storefront: "US",
      state: "live",
      currentName: "Party Games",
      url: "https://apps.apple.com/us/app/id6759240304"
    }
  }
};

const idPhoto: AppRecord = {
  slug: "jiajia-id-photo",
  appStoreId: "6758612379",
  contactEmail: "panxiaosen@163.com",
  icon: "/icon.png",
  screenshots: ["/screen.png"],
  copy: fixtureCopy,
  listings: {
    CN: {
      storefront: "CN",
      state: "planned",
      currentName: "佳佳证件照",
      nextReleaseName: "证照准拍",
      url: "https://apps.apple.com/cn/app/id6758612379"
    },
    HK: {
      storefront: "HK",
      state: "planned",
      nextReleaseName: "證照好拍",
      url: "https://apps.apple.com/hk/app/id6758612379"
    },
    TW: {
      storefront: "TW",
      state: "planned",
      nextReleaseName: "證照好拍",
      url: "https://apps.apple.com/tw/app/id6758612379"
    },
    CA: {
      storefront: "CA",
      state: "planned",
      nextReleaseName: "MapleLens ID",
      url: "https://apps.apple.com/ca/app/id6758612379"
    },
    US: {
      storefront: "US",
      state: "planned",
      nextReleaseName: "US PassSnap",
      url: "https://apps.apple.com/us/app/id6758612379"
    }
  }
};

describe("Storefront resolution", () => {
  it("uses a browser region before a locale default", () => {
    expect(resolveRequestedStorefront("en", ["en-CA", "en-US"])).toBe("CA");
    expect(resolveRequestedStorefront("zh-Hant", ["zh-Hant-TW"])).toBe("TW");
  });

  it("uses the locale default when no browser region is present", () => {
    expect(resolveRequestedStorefront("ja", ["ja"])).toBe("JP");
  });

  it("uses US before another available Storefront as fallback", () => {
    expect(resolveListing(partyGames, "CA").resolvedStorefront).toBe("US");
  });

  it("keeps planned ID-photo names separate from current live names", () => {
    expect(getListingDisplayName(resolveListing(idPhoto, "CA").listing)).toBe("MapleLens ID");
    expect(getListingDisplayName(resolveListing(idPhoto, "US").listing)).toBe("US PassSnap");
    expect(getListingDisplayName(resolveListing(idPhoto, "TW").listing)).toBe("證照好拍");
    expect(resolveListing(idPhoto, "JP").resolvedStorefront).toBe("US");
  });
});
