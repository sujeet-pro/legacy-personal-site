import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import prefetch from "@astrojs/prefetch"
import { remarkReadingTime } from "./plugins/remark-reading-time"

// eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
const SITE = process.env.SITE || process.env.CF_PAGES_URL || "https://localhost:4321"

// https://astro.build/config
console.log(`Building with site: "${SITE}"`)

export default defineConfig({
  site: SITE,
  prefetch: true,
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [sitemap(), prefetch()],
})
