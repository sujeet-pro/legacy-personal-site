import { getCollection, type CollectionEntry } from "astro:content"

export async function getCompanyEntries(): Promise<CollectionEntry<"company">[]> {
  const entries = await getCollection("company")
  entries.sort((a, b) => (a.data.startDate >= b.data.startDate ? -1 : 1))
  return entries
}

export async function getFeaturedCompany(): Promise<CollectionEntry<"company">[]> {
  const entries = await getCompanyEntries()
  return entries.slice(0, 3)
}
