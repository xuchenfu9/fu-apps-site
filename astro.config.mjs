import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://xuchenfu9.github.io",
  base: "/fu-apps-site",
  output: "static",
  integrations: [sitemap({ filter: (page) => !page.endsWith("/404/") })]
});
