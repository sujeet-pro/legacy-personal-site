import type { APIContext } from "astro"
import rss from "@astrojs/rss"
import { getCollection } from "astro:content"

export async function GET(context: APIContext) {
  const blog = await getCollection("blog")
  if (!context.site) {
    throw new Error("Site must be configured")
  }
  return rss({
    // `<title>` field in output xml
    title: "Sujeet’s Blog",
    // `<description>` field in output xml
    description: "A humble Astronaut’s guide to the stars",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedOn,
      description: post.data.description,
      // customData: post.data.customData,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${post.slug}/`,
    })),
    // (optional) inject custom xml
    customData: `<language>en</language>`,
    stylesheet: "/rss/styles.xsl",
  })
}
