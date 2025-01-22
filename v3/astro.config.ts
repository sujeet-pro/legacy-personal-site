// @ts-check
// @ts-check
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
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
    // shikiConfig: {
    //   themes: {
    //     light: 'github-light',
    //     dark: 'github-dark'
    //   }
    // }
  }
})
