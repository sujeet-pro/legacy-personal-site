import { getCollection, type CollectionEntry } from "astro:content"

export async function getProjectEntries(): Promise<CollectionEntry<"project">[]> {
  const entries = await getCollection("project", ({ data }) => {
    return import.meta.env.PROD ? !data.isDraft : true
  })
  entries.sort((a, b) => (a.data.startDate >= b.data.startDate ? -1 : 1))
  return entries
}

export async function getFeaturedProjects(): Promise<CollectionEntry<"project">[]> {
  const entries = await getProjectEntries()
  return entries.slice(0, 3)
}
