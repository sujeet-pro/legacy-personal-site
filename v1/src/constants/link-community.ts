import type { LinkConfig } from "../types/link.type";

// Community
export const communityGithub: LinkConfig = {
  text: "Github",
  href: "/gh",
  isExternal: true,
  iconName: "mdi:github",
};
export const communityStackoverflow: LinkConfig = {
  text: "Stackoverflow",
  href: "/stackoverflow",
  isExternal: true,
  iconName: "mdi:stackoverflow",
};

export const communityHashNode: LinkConfig = {
  text: "Hashnode",
  href: "/hashnode",
  isExternal: true,
  iconName: "simple-icons:hashnode",
};


export const communityLinks: LinkConfig[] = [
  communityHashNode,
  communityGithub,
  communityStackoverflow,
];
