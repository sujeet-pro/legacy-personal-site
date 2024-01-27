import { getCollection } from "astro:content"

export async function getTopicEntries() {
  const blogEntries = await getCollection("blog", ({ data }) => {
    return import.meta.env.PROD ? !data.isDraft : true
  })
  const usedTopicSet = blogEntries.reduce((topicSet, entry) => {
    entry.data.topics.forEach((topic) => {
      topicSet.add(topic.slug)
    })
    return topicSet
  }, new Set<string>())

  const topicEntries = await getCollection("topic", (entry) => {
    return import.meta.env.PROD ? usedTopicSet.has(entry.slug) : true
  })

  return topicEntries
}
