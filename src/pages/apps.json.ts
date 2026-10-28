import type { APIRoute } from "astro";
import { apps } from "../data/apps";
import { getListingDisplayName } from "../lib/storefront";
import { publicPath } from "../lib/site";

export const prerender = true;

const siteOrigin = new URL(import.meta.env.SITE ?? "https://www.appoffu.com").origin;

function absolutePublicURL(path: string): string {
  return new URL(publicPath(path), `${siteOrigin}/`).toString();
}

export const GET: APIRoute = () => {
  const catalog = {
    schemaVersion: 1,
    updatedAt: new Date().toISOString(),
    // The feed is the complete shared catalog. Each consuming app filters its
    // own slug or App Store ID after decoding so every app can reuse one file.
    apps: apps.map((app) => {
      const listing = app.listings.CN ?? Object.values(app.listings)[0];
      const localizedCopy = app.copy["zh-Hans"] ?? app.copy["zh-Hant"] ?? app.copy.en ?? Object.values(app.copy)[0];
      const title = listing ? getListingDisplayName(listing) : app.slug;

      return {
        id: app.slug,
        title: { "zh-Hans": title },
        url: absolutePublicURL(`zh-Hans/apps/${app.slug}/`),
        emoji: "📱",
        summary: localizedCopy ? { "zh-Hans": localizedCopy.summary } : undefined,
        iconURL: absolutePublicURL(app.icon),
        screenshots: app.screenshots.map(absolutePublicURL),
        websiteURL: absolutePublicURL(`zh-Hans/apps/${app.slug}/`),
        storeURL: app.listings.CN?.state === "live" ? app.listings.CN.url : undefined,
        storeStatus: app.listings.CN?.state ?? "planned"
      };
    })
  };

  return new Response(JSON.stringify(catalog), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300"
    }
  });
};
