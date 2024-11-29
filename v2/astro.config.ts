import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import prefetch from "@astrojs/prefetch"
import { remarkReadingTime } from "./plugins/remark-reading-time"
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis"
import type { RehypePlugins, RemarkPlugins } from "astro"
import icon from "astro-icon"

// eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing

// https://astro.build/config
export default defineConfig({
  site: "https://projects.sujeet.pro",
  base: "/v3.sujeet.pro",
  prefetch: true,
  scopedStyleStrategy: "where",
  markdown: {
    remarkPlugins: [remarkReadingTime] as unknown as RemarkPlugins,
    rehypePlugins: [rehypeAccessibleEmojis] as unknown as RehypePlugins,
  },
  redirects: {
    "/gh": "https://github.com/sujeet-pro",
    "/in": "https://www.linkedin.com/in/sujeetkrjaiswal/",
    "/linkedin": "https://www.linkedin.com/in/sujeetkrjaiswal/",
    "/twitter": "https://twitter.com/sujeetpro",
    "/x": "https://twitter.com/sujeetpro",
    "/ig": "https://www.instagram.com/sujeet__pro/",
    "/instagram": "https://www.instagram.com/sujeet__pro/",
    "/dev-to": "https://dev.to/sujeetpro",
    "/hashnode": "https://hashnode.com/@sujeetpro",
    "/medium": "https://medium.com/sujeet-pro",
    "/stackoverflow": "https://stackoverflow.com/users/5570700/sujeet-jaiswal",
    "/cv": "https://docs.google.com/document/d/1G-zdwqHLTJ9eoDAnyMeWKkb2Bf-0i8dfQ6NWYJ_osL0/edit?usp=sharing",
    "/blog/length-of-a-string/": "blog/js-interview-treats/length-of-a-string",
    "/blog/ssg-mobile-desktop-cls-and-redirection": "/blog/ssg",
    "/blog/serving-pre-compressed-assets": "/blog/ssg/serving-pre-compressed-assets",
  },
  integrations: [icon(), sitemap(), prefetch()],
})
