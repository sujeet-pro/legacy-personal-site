import { getCollection } from "astro:content"

export async function getProjectEntries() {
  const entries = await getCollection("project", ({ data }) => {
    return import.meta.env.PROD ? !data.isDraft : true
  })
  entries.sort((a, b) => (a.data.startDate >= b.data.startDate ? -1 : 1))
  return entries
}
