import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
// import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";


// https://astro.build/config
export default defineConfig({
  site: "https://sujeet.pro",
  experimental: {
    assets: true
  },
  markdown: {
    remarkPlugins: [[remarkToc, {
      heading: "Table of Contents",
      maxDepth: 2
    }]],
    // { heading: "contents" } to change where to inject
    rehypePlugins: [rehypeSlug,
    // rehypeHeadingIds,
    [rehypeAutolinkHeadings, {
      behavior: "append"
    }], rehypeAccessibleEmojis]
  },
  integrations: [tailwind(), sitemap(), mdx()]
});