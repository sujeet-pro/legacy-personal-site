import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import { remarkReadingTime } from "./plugins/remark-reading-time";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://sujeet.pro",
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  integrations: [sitemap(), prefetch(), tailwind()]
});