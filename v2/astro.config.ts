import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import prefetch from "@astrojs/prefetch"
import { remarkReadingTime } from "./plugins/remark-reading-time"

// eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
const SITE = process.env.SITE || process.env.CF_PAGES_URL || "http://v2.sujeet.pro"

// https://astro.build/config
export default defineConfig({
  site: SITE,
  prefetch: true,
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [sitemap(), prefetch()],
})
