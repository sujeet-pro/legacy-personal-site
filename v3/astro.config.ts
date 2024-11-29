// @ts-check
// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
// TODO: path alias doesn't work on astro.config.ts
import { SITE_CANONICAL_ORIGIN } from './src/configs/site.constants'

// https://astro.build/config
export default defineConfig({
  site: SITE_CANONICAL_ORIGIN,
  integrations: [mdx(), sitemap(), tailwind()],

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  experimental: {
    contentIntellisense: true
    // clientPrerender: true
  },
  scopedStyleStrategy: 'where',
  output: 'static',
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark'
      }
    }
  }
})
