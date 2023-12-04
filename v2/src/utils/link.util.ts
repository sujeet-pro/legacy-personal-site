const config: Record<string, string> = {
  "/gh": "https://github.com/sujeet-pro",
  "/in": "https://www.linkedin.com/in/sujeetkrjaiswal/",
  "/linkedin": "https://www.linkedin.com/in/sujeetkrjaiswal/",
  "/twitter": "https://twitter.com/sujeetpro",
  "/x": "https://twitter.com/sujeetpro",
  "/ig": "https://www.instagram.com/sujeet__pro/",
  "/instagram": "https://www.instagram.com/sujeet__pro/",
  "/dev-to": "https://dev.to/sujeetpro",
  "/hashnode": "https://hashnode.com/@sujeetpro",
  "/medium": "https://medium.com/sujeet-pro",
  "/stackoverflow": "https://stackoverflow.com/users/5570700/sujeet-jaiswal",
  "/cv": "https://docs.google.com/document/d/1G-zdwqHLTJ9eoDAnyMeWKkb2Bf-0i8dfQ6NWYJ_osL0/edit?usp=sharing",
}

export function getSanitizedUrl(origin: string | null | undefined, url: string | URL): string | URL {
  if (origin === "https://sujeet.pro") return url
  const pathName = typeof url === "string" ? url : (url.pathName as string)
  const redirectUrl = config[pathName]
  return redirectUrl ?? url
}

export function isExternalUrl(url: string | URL): boolean {
  if (typeof url === "string") {
    return url.startsWith("https:") || !!config[url]
  } else if (url instanceof URL) {
    if (url.protocol === "https:") {
      return true
    }
  }
  throw new Error(`Expected url to be string nor URL object, got: ${typeof url}`)
}
