import { apps } from "../src/data/apps";
import { storefronts } from "../src/lib/types";

const countryCodes = { CN: "cn", HK: "hk", TW: "tw", CA: "ca", US: "us", JP: "jp", KR: "kr" } as const;

for (const app of apps) {
  for (const storefront of storefronts) {
    const listing = app.listings[storefront];
    if (!listing || listing.state !== "live") continue;

    const response = await fetch(`https://itunes.apple.com/lookup?id=${app.appStoreId}&country=${countryCodes[storefront]}`);
    if (!response.ok) {
      console.error(`${app.slug} ${storefront}: Apple Lookup returned ${response.status}`);
      continue;
    }

    const payload = await response.json() as { resultCount: number; results: Array<{ trackName?: string; trackViewUrl?: string }> };
    const result = payload.results[0];
    if (!result?.trackName) {
      console.error(`${app.slug} ${storefront}: no result returned`);
      continue;
    }

    const changedName = result.trackName !== listing.currentName;
    const changedUrl = result.trackViewUrl !== listing.url;
    console.log(`${app.slug} ${storefront}: ${changedName || changedUrl ? "UPDATE NEEDED" : "current"}`);
    console.log(`  name: ${result.trackName}`);
    console.log(`  url:  ${result.trackViewUrl ?? listing.url}`);
  }
}
