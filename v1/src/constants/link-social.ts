import type { LinkConfig } from "../types/link.type";

export const cv: LinkConfig = {
  text: "CV",
  href: "https://docs.google.com/document/d/1G-zdwqHLTJ9eoDAnyMeWKkb2Bf-0i8dfQ6NWYJ_osL0/edit?usp=sharing",
  isExternal: true,
  iconName: "ph:file-doc",
};

// Social Profiles
export const socialLinkedIn: LinkConfig = {
  text: "LinkedIn",
  href: "https://www.linkedin.com/in/sujeetkrjaiswal/",
  isExternal: true,
  iconName: "mdi:linkedin",
};

export const socialTwitter: LinkConfig = {
  text: "Twitter",
  href: "https://twitter.com/sujeetpro",
  isExternal: true,
  iconName: "mdi:twitter",
};


export const socialLinks: LinkConfig[] = [
  socialLinkedIn,
  socialTwitter,
  cv,
];
