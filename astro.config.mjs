import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [relativeLinks()],
  output: "server",
  adapter: netlify()
});