import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { apps, publicContactEmail } from "../src/data/apps";
import { legalDocumentsBySlug } from "../src/data/legal";
import { appLocales } from "../src/lib/apps";
import { storefronts, type AppRecord } from "../src/lib/types";

function publicAssetExists(root: string, asset: string): boolean {
  return existsSync(resolve(root, "public", asset.replace(/^\//, "")));
}

function validateApp(root: string, app: AppRecord): string[] {
  const errors: string[] = [];
  const prefix = `[${app.slug}]`;

  if (app.contactEmail !== publicContactEmail) errors.push(`${prefix} must use the approved public support email.`);
  if (!publicAssetExists(root, app.icon)) errors.push(`${prefix} icon is missing: ${app.icon}`);
  if (app.screenshots.length === 0) errors.push(`${prefix} needs at least one screenshot.`);
  for (const screenshot of app.screenshots) {
    if (!publicAssetExists(root, screenshot)) errors.push(`${prefix} screenshot is missing: ${screenshot}`);
  }

  for (const locale of appLocales(app)) {
    const copy = app.copy[locale];
    if (!copy?.eyebrow || !copy.summary || copy.features.length < 5 || copy.features.some((feature) => !feature.title.trim() || !feature.description.trim())) {
      errors.push(`${prefix} is missing catalog copy for ${locale}.`);
    }

    const documents = legalDocumentsBySlug[app.slug]?.[locale];
    const requiredKinds = app.slug === "appstoryline"
      ? (["privacy", "support", "terms", "marketing"] as const)
      : (["privacy", "support", "terms"] as const);
    for (const kind of requiredKinds) {
      if (!documents?.[kind] || documents[kind].sections.length === 0) {
        errors.push(`${prefix} is missing ${kind} content for ${locale}.`);
      }
    }
  }

  if (app.slug === "appstoryline") {
    for (const locale of appLocales(app)) {
      if (!app.pricing?.[locale]?.value || !app.pricing[locale]?.note) errors.push(`${prefix} is missing pricing for ${locale}.`);
    }
  }

  const listings = Object.values(app.listings);
  if (listings.length === 0) errors.push(`${prefix} has no App Store listing.`);
  for (const storefront of storefronts) {
    const listing = app.listings[storefront];
    if (!listing) continue;
    if (listing.url && !listing.url.startsWith("https://apps.apple.com/")) errors.push(`${prefix} has an invalid ${storefront} App Store URL.`);
    if (listing.state === "live" && !listing.currentName) errors.push(`${prefix} live ${storefront} listing needs a current name.`);
    if (listing.state === "live" && !listing.url) errors.push(`${prefix} live ${storefront} listing needs a URL.`);
    if (listing.state === "planned" && !listing.nextReleaseName && !listing.currentName) errors.push(`${prefix} planned ${storefront} listing needs a display name.`);
  }

  return errors;
}

export function validateContent(root: string): string[] {
  const errors: string[] = [];
  const slugs = apps.map((app) => app.slug);

  if (apps.length !== 7) errors.push(`Expected seven published apps, received ${apps.length}.`);
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
    const legalDocumentCount = apps.reduce((count, app) => count + appLocales(app).length * (app.slug === "appstoryline" ? 4 : 3), 0);
    console.log(`Validated ${apps.length} apps, ${legalDocumentCount} legal documents, and all public media assets.`);
  }
}
