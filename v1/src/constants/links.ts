export type LinkConfig = {
  text: string;
  href: string;
  isExternal?: boolean;
};

// Site Nav
export const home: LinkConfig = {
  text: "Home",
  href: "/",
  isExternal: false,
};
export const blog: LinkConfig = {
  text: "Blog",
  href: "https://blog.sujeet.pro",
  isExternal: true, // "/blog" // # TODO: When blog is ready
};
export const projects: LinkConfig = {
  text: "Projects",
  href: "/project",
  isExternal: false,
};

/**
 * Below links are redirect links and hence need complete url
 */

// Profiles
export const github: LinkConfig = {
  text: "Github",
  href: "https://sujeet.pro/gh",
  isExternal: true,
};

export const cv: LinkConfig = {
  text: "CV",
  href: "https://sujeet.pro/cv",
  isExternal: true,
};

// Social Profiles
export const linkedIn: LinkConfig = {
  text: "LinkedIn",
  href: "https://sujeet.pro/in",
  isExternal: true,
};

export const twitter: LinkConfig = {
  text: "Twitter",
  href: "https://sujeet.pro/twitter",
  isExternal: true,
};
export const instagram: LinkConfig = {
  text: "Instagram",
  href: "https://sujeet.pro/ig",
  isExternal: true,
};

// Blog profiles
export const devTo: LinkConfig = {
  text: "Dev.to",
  href: "https://sujeet.pro/dev-to",
  isExternal: true,
};
export const hashedNode: LinkConfig = {
  text: "HashedNode",
  href: "https://sujeet.pro/hashnode",
  isExternal: true,
};
export const medium: LinkConfig = {
  text: "Medium",
  href: "https://sujeet.pro/medium",
  isExternal: true,
};
