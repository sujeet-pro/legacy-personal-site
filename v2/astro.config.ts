import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import prefetch from "@astrojs/prefetch"
import { remarkReadingTime } from "./plugins/remark-reading-time"

// https://astro.build/config
const SITE_NAME_KEY = process.env.SITE_NAME_KEY ?? "SITE"
const SITE = process.env[SITE_NAME_KEY] ?? "https://localhost:4321"

export default defineConfig({
  site: SITE,
  prefetch: true,
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [sitemap(), prefetch()],
})
