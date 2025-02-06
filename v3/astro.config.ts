import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import pagefind from 'astro-pagefind'
import { defineConfig } from 'astro/config'

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
    // clientPrerender: true
  },
  scopedStyleStrategy: 'where',
  output: 'static',
  // markdown: {
  // rehypePlugins: [
  //   [
  //     rehypePrettyCode,
  //     {
  //       theme: {
  //         dark: 'github-dark',
  //         light: 'github-light'
  //       },
  //       transformers: [
  //         transformerCopyButton({
  //           visibility: 'hover',
  //           feedbackDuration: 2_500
  //         })
  //       ]
  //     }
  //   ]
  // ],
  // syntaxHighlight: false
  // shikiConfig: {
  //   theme: 'dracula'
  // }
  // shikiConfig: {
  //   themes: {
  //     light: 'github-light',
  //     dark: 'github-dark'
  //   }
  // }
  // }
})
