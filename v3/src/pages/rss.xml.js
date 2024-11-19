import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_DESCRIPTION, SITE_TITLE } from "../constants";

// StyleSheeet for RSS Feed is from: https://github.com/genmon/aboutfeeds/blob/main/tools/pretty-feed-v3.xsl

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
    // (optional) inject custom xml
    customData: `<language>en</language>`,
    // TODO: account for base URL
    stylesheet: `${import.meta.env.BASE_URL}/rss/styles.xsl`.replace("//", "/"),
  });
}
