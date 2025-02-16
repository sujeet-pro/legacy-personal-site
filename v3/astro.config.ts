import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import rehypeFigure from '@microflash/rehype-figure'
import tailwindcss from '@tailwindcss/vite'
import pagefind from 'astro-pagefind'
import { defineConfig } from 'astro/config'
import rehypeExternalLinks from 'rehype-external-links'

// TODO: path alias doesn't work on astro.config.ts
import { SITE_CANONICAL_ORIGIN } from './src/configs/site.constants'

import expressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
  site: SITE_CANONICAL_ORIGIN,
  base: '/',
  integrations: [
    expressiveCode(),
    mdx(),
    sitemap(),
    pagefind({
      indexConfig: {
        verbose: true,
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  experimental: {
    contentIntellisense: true,
    clientPrerender: true,
    svg: true,
    responsiveImages: true,
  },
  scopedStyleStrategy: 'where',
  output: 'static',
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
        },
      ],
      [rehypeFigure, { className: 'md-figure' }],
    ],
  },
})
