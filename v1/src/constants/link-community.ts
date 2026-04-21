import type { LinkConfig } from "../types/link.type";

// Community
export const communityGithub: LinkConfig = {
  text: "Github",
  href: "https://github.com/sujeet-pro",
  isExternal: true,
  iconName: "mdi:github",
};
export const communityStackoverflow: LinkConfig = {
  text: "Stackoverflow",
  href: "https://stackoverflow.com/users/5570700/sujeet-jaiswal",
  isExternal: true,
  iconName: "mdi:stackoverflow",
};

export const communityHashNode: LinkConfig = {
  text: "Hashnode",
  href: "https://hashnode.com/@sujeetpro",
  isExternal: true,
  iconName: "simple-icons:hashnode",
};


export const communityLinks: LinkConfig[] = [
  communityHashNode,
  communityGithub,
  communityStackoverflow,
];
