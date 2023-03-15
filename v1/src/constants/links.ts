export type LinkConfig = {
  text: string;
  href: string;
  isExternal?: boolean;
  iconName?: string;
  iconPosition?: "left" | "right";
};

// Site Nav
export const home: LinkConfig = {
  text: "Sujeet Jaiswal",
  href: "/",
  isExternal: false,
  iconName: "mdi:home",
};
export const blog: LinkConfig = {
  text: "Blog",
  href: "/blog/",
  isExternal: false, // "/blog" // # TODO: When blog is ready
  iconName: "mdi:fountain-pen",
};
export const projects: LinkConfig = {
  text: "Projects",
  href: "/project/",
  isExternal: false,
  iconName: "mdi:responsive",
};

export const profile: LinkConfig = {
  text: "Profile",
  href: "/profile/",
  isExternal: false,
  iconName: "",
};
/**
 * Below links are redirect links and hence need complete url
 */

// Profiles

// Social Profiles
export const linkedIn: LinkConfig = {
  text: "LinkedIn",
  href: "https://sujeet.pro/in",
  isExternal: true,
  iconName: "mdi:linkedin",
};

export const twitter: LinkConfig = {
  text: "Twitter",
  href: "https://sujeet.pro/twitter",
  isExternal: true,
  iconName: "mdi:twitter",
};

export const instagram: LinkConfig = {
  text: "Instagram",
  href: "https://sujeet.pro/ig",
  isExternal: true,
  iconName: "mdi:instagram",
};

export const github: LinkConfig = {
  text: "Github",
  href: "https://sujeet.pro/gh",
  isExternal: true,
  iconName: "mdi:github",
};

export const cv: LinkConfig = {
  text: "CV",
  href: "https://sujeet.pro/cv",
  isExternal: true,
  iconName: "ph:file-doc",
};

export const stackoverflow: LinkConfig = {
  text: "Stackoverflow",
  href: "https://sujeet.pro/stackoverflow",
  isExternal: true,
  iconName: "mdi:stackoverflow",
};

export const mastodon: LinkConfig = {
  text: "Mastodon",
  href: "https://mastodon.social/@sujeetjaiswal",
  isExternal: true,
  iconName: "mdi:mastodon",
};

// Blog profiles
export const devTo: LinkConfig = {
  text: "Dev.to",
  href: "https://sujeet.pro/dev-to",
  isExternal: true,
  iconName: "mdi:dev-to",
};
export const hashedNode: LinkConfig = {
  text: "HashedNode",
  href: "https://sujeet.pro/hashnode",
  isExternal: true,
  iconName: "simple-icons:hashnode",
};
export const medium: LinkConfig = {
  text: "Medium",
  href: "https://sujeet.pro/medium",
  isExternal: true,
  iconName: "medium",
};

// Notes
export const notesWeb: LinkConfig = {
  text: "Web",
  href: "https://notes.sujeet.pro/web/",
  isExternal: true,
  iconName: "mdi:web",
};
export const notesLeadership: LinkConfig = {
  text: "Leadership",
  href: "https://notes.sujeet.pro/leadership/",
  isExternal: true,
  iconName: "mdi:account-multiple",
};
export const notesJS: LinkConfig = {
  text: "JavaScript",
  href: "https://notes.sujeet.pro/js//",
  isExternal: true,
  iconName: "mdi:language-javascript",
};
