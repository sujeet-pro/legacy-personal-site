import { getCollection } from "astro:content"

export async function getCompanyEntries() {
  const entries = await getCollection("company")
  entries.sort((a, b) => (a.data.startDate >= b.data.startDate ? -1 : 1))
  return entries
}
