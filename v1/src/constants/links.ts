export type LinkConfig = {
  text: string;
  href: string;
  isExternal?: boolean;
};

// Profiles
export const github: LinkConfig = {
  text: "Github",
  href: "/gh",
};

export const cv: LinkConfig = {
  text: "CV",
  href: "/cv",
};

// Social Profiles
export const linkedIn: LinkConfig = {
  text: "LinkedIn",
  href: "/in",
};

export const twitter: LinkConfig = {
  text: "Twitter",
  href: "/twitter",
};
export const instagram: LinkConfig = {
  text: "Instagram",
  href: "/ig",
};

// Blog profiles
export const devTo: LinkConfig = {
  text: "Dev.to",
  href: "/dev-to",
};
export const hashedNode: LinkConfig = {
  text: "HashedNode",
  href: "/hashednode",
};
export const medium: LinkConfig = {
  text: "Medium",
  href: "/medium",
};
