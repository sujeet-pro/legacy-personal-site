export function isExternalUrl(url: string | URL): boolean {
  if (typeof url === "string") {
    if (url.startsWith("/")) {
      return false
    } else if (url.startsWith("https:")) {
      return true
    }
  } else if (url instanceof URL) {
    if (url.protocol === "https:") {
      return true
    }
  }
  throw new Error(`Expected url to be string nor URL object, got: ${typeof url}`)
}
