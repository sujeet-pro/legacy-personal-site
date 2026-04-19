import type { LinkConfig } from "../types/link.type";

export const cv: LinkConfig = {
  text: "CV",
  href: "/cv",
  isExternal: true,
  iconName: "ph:file-doc",
};

// Social Profiles
export const socialLinkedIn: LinkConfig = {
  text: "LinkedIn",
  href: "/in",
  isExternal: true,
  iconName: "mdi:linkedin",
};

export const socialTwitter: LinkConfig = {
  text: "Twitter",
  href: "/twitter",
  isExternal: true,
  iconName: "mdi:twitter",
};


export const socialLinks: LinkConfig[] = [
  socialLinkedIn,
  socialTwitter,
  cv,
];
