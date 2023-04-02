import type { LinkConfig } from "../types/link.type";

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
export const communityHashNode: LinkConfig = {
  text: "Hashnode",
  href: "https://sujeet.pro/hashnode",
  isExternal: true,
  iconName: "simple-icons:hashnode",
};
export const communityMedium: LinkConfig = {
  text: "Medium",
  href: "https://sujeet.pro/medium",
  isExternal: true,
  iconName: "community-medium",
};

export const communityLinks: LinkConfig[] = [
  communityHashNode,
  // communityDevTo,
  // communityMedium,
  communityGithub,
  communityStackoverflow,
];
