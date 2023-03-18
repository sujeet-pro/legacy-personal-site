import type { LinkConfig } from "../types/link.type";

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

export const socialLinks: LinkConfig[] = [
  socialLinkedIn,
  socialTwitter,
  socialInstagram,
  socialMastodon,
];
