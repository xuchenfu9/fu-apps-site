import { localeDefaultStorefront } from "./locales";
import { storefronts, type AppRecord, type Locale, type Storefront, type StorefrontListing } from "./types";

const fallbackOrder: readonly Storefront[] = ["US", "CN", "HK", "TW", "CA", "JP", "KR"];

const isStorefront = (value: string): value is Storefront => storefronts.includes(value as Storefront);

export function resolveRequestedStorefront(locale: Locale, languageTags: readonly string[] = []): Storefront {
  for (const tag of languageTags) {
    for (const part of tag.replace(/_/g, "-").split("-")) {
      const candidate = part.toUpperCase();
      if (isStorefront(candidate)) return candidate;
    }
  }

  return localeDefaultStorefront[locale];
}

export interface ResolvedListing {
  requestedStorefront: Storefront;
  resolvedStorefront: Storefront;
  usedFallback: boolean;
  listing: StorefrontListing;
}

export function resolveListing(app: AppRecord, requestedStorefront: Storefront): ResolvedListing {
  const resolvedStorefront = app.listings[requestedStorefront]
    ? requestedStorefront
    : fallbackOrder.find((storefront) => app.listings[storefront]);

  if (!resolvedStorefront) {
    throw new Error(`${app.slug} has no App Store listing`);
  }

  return {
    requestedStorefront,
    resolvedStorefront,
    usedFallback: requestedStorefront !== resolvedStorefront,
    listing: app.listings[resolvedStorefront]!
  };
}

export function getListingDisplayName(listing: StorefrontListing): string {
  const name = listing.state === "planned" ? listing.nextReleaseName ?? listing.currentName : listing.currentName;

  if (!name) {
    throw new Error(`${listing.storefront} listing is missing a display name`);
  }

  return name;
}
