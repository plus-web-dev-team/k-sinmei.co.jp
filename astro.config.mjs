import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "http://www.k-sinmei.co.jp/",
  integrations: [relativeLinks(), sitemap()],
  compressHTML: false,
});
