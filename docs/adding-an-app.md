# Adding an App to FU apps

Every published app must provide a complete, independently reachable App Store support surface before it appears on the FU apps homepage. This site is static, so all public content must be known at build time.

## Required content

1. Add a complete `AppRecord` in `src/data/apps.ts` with a unique slug, App Store ID, icon, at least one screenshot, the support email used by that app, and localized product copy for `zh-Hans`, `zh-Hant`, `en`, `ja`, and `ko`.
2. Record the actual App Store name and URL for each released Storefront. Do not translate or invent the Store name. Use `state: "planned"` with `nextReleaseName` for an announced but not-yet-live Storefront.
3. Add a legal profile at `src/data/legal/<slug>.ts`, register it in `src/data/legal/index.ts`, and preserve the app's real privacy behavior, permission set, Apple services, purchase model, and support email.
4. Verify that privacy policy, user support, and terms of service render in all five site languages. Each of those pages automatically receives its own route-preserving language button from `SiteLayout`.
5. Add the original app document locations and contact address to `docs/legal-source-map.md`. Do not overwrite source documentation; update the reviewed site copy separately.
6. Copy only approved icon and screenshot assets into `public/assets/apps/<slug>/`. Keep source projects unchanged and use stable, descriptive filenames.

## App Store readiness checklist

- A visible App Store link exists on the homepage and product page.
- The link resolves to the visitor's selected Storefront when available; unavailable Storefronts use the US-first fallback rather than hiding the call to action.
- Privacy policy, user support, and terms each have stable public URLs under `/[locale]/apps/[slug]/`.
- The contact email displayed on the product page and its legal documents matches the email exposed in that app.
- Legal copy reflects the shipped app and its current permission declarations. Review it again whenever data handling, SDKs, purchases, or support contact changes.
- Announced regional names remain marked as planned until the matching App Store listing is live.

## Validation and release

Run these commands from the repository root before committing:

```sh
npm test
npm run validate
npm run build
npm run test:e2e
```

`npm run validate` blocks missing media, localized catalog copy, legal documents, contact addresses, or App Store listing data. `npm run refresh:storefronts` checks the live Apple Lookup results for currently released Storefronts and prints any name or URL update that needs a review.

After pushing to `main`, the GitHub Pages workflow publishes the generated `dist/` directory. The production base path is `/fu-apps-site/`; always use `publicPath()` and `localePath()` for internal links so local preview and GitHub Pages stay consistent.
