import { SITE_DESCRIPTION, SITE_TITLE } from '@/configs/site.constants'
import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

// StyleSheeet for RSS Feed is from: https://github.com/genmon/aboutfeeds/blob/main/tools/pretty-feed-v3.xsl

export async function GET(context) {
  const posts = await getCollection('post')
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts
      .filter((u) => u.data.publishedOn)
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.publishedOn,
        description: post.data.description,
        // Compute RSS link from post `slug`
        link: `/post/${post.slug}/`,
      })),
    // (optional) inject custom xml
    customData: `<language>en</language>`,
    // TODO: account for base URL
    stylesheet: `${import.meta.env.BASE_URL}/rss/styles.xsl`.replace('//', '/'),
  })
}
