import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { apps } from "../src/data/apps";
import { legalDocumentsBySlug } from "../src/data/legal";
import { locales } from "../src/lib/locales";
import { storefronts, type AppRecord } from "../src/lib/types";

function publicAssetExists(root: string, asset: string): boolean {
  return existsSync(resolve(root, "public", asset.replace(/^\//, "")));
}

function validateApp(root: string, app: AppRecord): string[] {
  const errors: string[] = [];
  const prefix = `[${app.slug}]`;

  if (!app.contactEmail.includes("@")) errors.push(`${prefix} has no valid support email.`);
  if (!publicAssetExists(root, app.icon)) errors.push(`${prefix} icon is missing: ${app.icon}`);
  if (app.screenshots.length === 0) errors.push(`${prefix} needs at least one screenshot.`);
  for (const screenshot of app.screenshots) {
    if (!publicAssetExists(root, screenshot)) errors.push(`${prefix} screenshot is missing: ${screenshot}`);
  }

  for (const locale of locales) {
    const copy = app.copy[locale];
    if (!copy?.eyebrow || !copy.summary || copy.features.length === 0) {
      errors.push(`${prefix} is missing catalog copy for ${locale}.`);
    }

    const documents = legalDocumentsBySlug[app.slug]?.[locale];
    for (const kind of ["privacy", "support", "terms"] as const) {
      if (!documents?.[kind] || documents[kind].sections.length === 0) {
        errors.push(`${prefix} is missing ${kind} content for ${locale}.`);
      }
    }
  }

  const listings = Object.values(app.listings);
  if (listings.length === 0) errors.push(`${prefix} has no App Store listing.`);
  for (const storefront of storefronts) {
    const listing = app.listings[storefront];
    if (!listing) continue;
    if (!listing.url.startsWith("https://apps.apple.com/")) errors.push(`${prefix} has an invalid ${storefront} App Store URL.`);
    if (listing.state === "live" && !listing.currentName) errors.push(`${prefix} live ${storefront} listing needs a current name.`);
    if (listing.state === "planned" && !listing.nextReleaseName && !listing.currentName) errors.push(`${prefix} planned ${storefront} listing needs a display name.`);
  }

  return errors;
}

export function validateContent(root: string): string[] {
  const errors: string[] = [];
  const slugs = apps.map((app) => app.slug);

  if (apps.length !== 5) errors.push(`Expected five published apps, received ${apps.length}.`);
  if (new Set(slugs).size !== slugs.length) errors.push("App slugs must be unique.");
  if (slugs.includes("shift-wake-clock")) errors.push("Shift Wake Clock must not be published in this catalog.");

  for (const app of apps) errors.push(...validateApp(root, app));
  return errors;
}

if (process.argv[1]?.endsWith("check-content.mts")) {
  const errors = validateContent(process.cwd());
  if (errors.length > 0) {
    console.error(errors.join("\n"));
    process.exitCode = 1;
  } else {
    console.log(`Validated ${apps.length} apps, ${apps.length * locales.length * 3} legal documents, and all public media assets.`);
  }
}
