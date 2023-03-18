import type { LinkConfig } from "../types/link.type";
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
  href: "/page/faq/",
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
export const siteTopic: LinkConfig = {
  text: "Topics",
  href: "/topic/",
  isExternal: false,
  iconName: "icon-park-outline:topic",
};

export const siteLinks: LinkConfig[] = [
  siteFaq,
  siteProjects,
  siteProfile,
  siteSkills,
  siteTopic,
  siteMap,
];

export const allSiteLinks: LinkConfig[] = [
  siteHome,
  siteBlog,
  siteFaq,
  siteProjects,
  siteProfile,
  siteSkills,
  siteTopic,
  siteMap,
];
