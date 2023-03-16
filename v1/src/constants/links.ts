export type LinkConfig = {
  text: string;
  href: string;
  isExternal?: boolean;
  iconName?: string;
  iconPosition?: "left" | "right";
};

// Site Pages
export const siteMap: LinkConfig = {
  text: "Site Map",
  href: "/sitemap-index.xml",
  isExternal: true,
  iconName: "mdi:sitemap",
};
export const siteHome: LinkConfig = {
  text: "Home",
  href: "/",
  isExternal: false,
  iconName: "mdi:home",
};
export const siteBlog: LinkConfig = {
  text: "Blog",
  href: "/blog/",
  isExternal: false, // "/blog" // # TODO: When blog is ready
  iconName: "mdi:blog",
};
export const siteFaq: LinkConfig = {
  text: "FAQs",
  href: "/faq/",
  iconName: "wpf:faq",
};
export const siteProfile: LinkConfig = {
  text: "Profile",
  href: "/profile/",
  isExternal: false,
  iconName: "mdi:face-man-profile",
};
export const siteSkills: LinkConfig = {
  text: "Skill",
  href: "/profile/skills/",
  iconName: "carbon:skill-level-advanced",
};
export const siteProjects: LinkConfig = {
  text: "Projects",
  href: "/project/",
  isExternal: false,
  iconName: "mdi:responsive",
};

// Social Profiles
export const socialLinkedIn: LinkConfig = {
  text: "LinkedIn",
  href: "https://sujeet.pro/in",
  isExternal: true,
  iconName: "mdi:linkedin",
};

export const socialTwitter: LinkConfig = {
  text: "Twitter",
  href: "https://sujeet.pro/twitter",
  isExternal: true,
  iconName: "mdi:twitter",
};

export const socialInstagram: LinkConfig = {
  text: "Instagram",
  href: "https://sujeet.pro/ig",
  isExternal: true,
  iconName: "mdi:instagram",
};
export const socialMastodon: LinkConfig = {
  text: "Mastodon",
  href: "https://mastodon.social/@sujeetjaiswal",
  isExternal: true,
  iconName: "mdi:mastodon",
};

// Community
export const communityGithub: LinkConfig = {
  text: "Github",
  href: "https://sujeet.pro/gh",
  isExternal: true,
  iconName: "mdi:github",
};
export const communityStackoverflow: LinkConfig = {
  text: "Stackoverflow",
  href: "https://sujeet.pro/stackoverflow",
  isExternal: true,
  iconName: "mdi:stackoverflow",
};
export const communityDevTo: LinkConfig = {
  text: "Dev.to",
  href: "https://sujeet.pro/dev-to",
  isExternal: true,
  iconName: "mdi:dev-to",
};
export const communityHashedNode: LinkConfig = {
  text: "HashedNode",
  href: "https://sujeet.pro/hashnode",
  isExternal: true,
  iconName: "simple-icons:hashnode",
};
export const communityMedium: LinkConfig = {
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
export const cv: LinkConfig = {
  text: "CV",
  href: "https://sujeet.pro/cv",
  isExternal: true,
  iconName: "ph:file-doc",
};
