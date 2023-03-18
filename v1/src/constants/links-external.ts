import type { LinkConfig } from "../types/link.type";

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

export const externalLinks: LinkConfig[] = [
  notesWeb,
  notesLeadership,
  notesJS,
  cv,
];
