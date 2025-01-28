import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import rehypePrettyCode from 'rehype-pretty-code'
// TODO: path alias doesn't work on astro.config.ts
import { SITE_CANONICAL_ORIGIN } from './src/configs/site.constants'

// https://astro.build/config
export default defineConfig({
  site: SITE_CANONICAL_ORIGIN,
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
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
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: {
            dark: 'github-dark',
            light: 'github-light'
          },
          transformers: [
            transformerCopyButton({
              visibility: 'hover',
              feedbackDuration: 2_500
            })
          ]
        }
      ]
    ],
    syntaxHighlight: false
    // shikiConfig: {
    //   theme: 'dracula'
    // }
    // shikiConfig: {
    //   themes: {
    //     light: 'github-light',
    //     dark: 'github-dark'
    //   }
    // }
  }
})
