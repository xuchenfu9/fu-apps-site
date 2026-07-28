export const storefronts = ["CN", "HK", "TW", "CA", "US", "JP", "KR"] as const;

export type Storefront = (typeof storefronts)[number];
export type ListingState = "live" | "planned";
export type Locale = "zh-Hans" | "zh-Hant" | "en" | "ja" | "ko";

export interface StorefrontListing {
  storefront: Storefront;
  state: ListingState;
  currentName?: string;
  nextReleaseName?: string;
  url: string;
}

export interface LocalizedFeature {
  title: string;
  description: string;
}

export interface LocalizedAppCopy {
  eyebrow: string;
  summary: string;
  features: readonly LocalizedFeature[];
}

export interface AppRecord {
  slug: string;
  appStoreId: string;
  contactEmail: string;
  icon: string;
  screenshots: readonly string[];
  copy: Record<Locale, LocalizedAppCopy>;
  listings: Partial<Record<Storefront, StorefrontListing>>;
}
