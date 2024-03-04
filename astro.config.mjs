import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [relativeLinks()],
  build: {
    site: "https://k-sinmei.co.jp",
    inlineStylesheets: "never",
    assets: "assets",
    format: "file",
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "[ext]/[name][extname]",
        },
      },
    },
  },
  output: "server",
  adapter: netlify(),
});
