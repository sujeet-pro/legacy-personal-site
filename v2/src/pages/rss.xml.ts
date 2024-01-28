import type { APIContext } from "astro"
import rss from "@astrojs/rss"
import { getBlogs } from "$modules/blog"

export async function GET(context: APIContext) {
  const blogs = await getBlogs()
  if (!context.site) {
    throw new Error("Site must be configured")
  }
  return rss({
    // `<title>` field in output xml
    title: "Sujeet’s Blog",
    // `<description>` field in output xml
    description: "Blog related to Software Development",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blogs.map((blog) => ({
      title: blog.entry.data.title,
      pubDate: blog.entry.data.publishedOn,
      description: blog.entry.data.description,
      // customData: post.data.customData,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: blog.path,
    })),
    // (optional) inject custom xml
    customData: `<language>en</language>`,
    stylesheet: "/rss/styles.xsl",
  })
}
