import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.PUBLIC_SITE_URL ?? "https://xuchenfu9.github.io";
const base = process.env.PUBLIC_BASE_PATH ?? "/fu-apps-site";

export default defineConfig({
  site,
  base,
  output: "static",
  integrations: [sitemap({ filter: (page) => !page.endsWith("/404/") })]
});
