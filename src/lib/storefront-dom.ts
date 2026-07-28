import { storefronts, type AppRecord, type Locale, type Storefront } from "./types";
import { resolveListing, getListingDisplayName } from "./storefront";
import { storefrontLabels, ui } from "./ui";

export function storefrontDataAttributes(app: AppRecord, locale: Locale): Record<string, string> {
  return Object.fromEntries(
    storefronts.flatMap((storefront) => {
      const resolved = resolveListing(app, storefront);
      const suffix = storefront.toLowerCase();
      const region = storefrontLabels[locale][resolved.resolvedStorefront];
      const message = resolved.listing.state === "planned"
        ? ui[locale].releasePlanned(region)
        : ui[locale].availableIn(region);

      return [
        [`data-storefront-name-${suffix}`, getListingDisplayName(resolved.listing)],
        [`data-storefront-url-${suffix}`, resolved.listing.url],
        [`data-storefront-state-${suffix}`, resolved.listing.state],
        [`data-storefront-message-${suffix}`, message],
        [`data-storefront-cta-label-${suffix}`, `${ui[locale].openAppStore}: ${getListingDisplayName(resolved.listing)}`]
      ];
    })
  );
}

export function storefrontKey(storefront: Storefront): string {
  return storefront.toLowerCase();
}
