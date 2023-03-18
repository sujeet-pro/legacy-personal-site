import { Tech, TechCategory, ProficiencyLevel } from "../types/skills.types";

// Languages
export const js: Tech = {
  name: "JavaScript",
  icon: "tech-js",
  category: TechCategory.Language,
  level: ProficiencyLevel.Expert,
};
export const ts: Tech = {
  name: "TypeScript",
  icon: "tech-ts",
  category: TechCategory.Language,
  level: ProficiencyLevel.Expert,
};
export const html: Tech = {
  name: "HTML",
  icon: "tech-html",
  category: TechCategory.Language,
  level: ProficiencyLevel.Expert,
};
export const css: Tech = {
  name: "CSS",
  icon: "tech-css",
  category: TechCategory.Language,
  level: ProficiencyLevel.Expert,
};
export const java: Tech = {
  name: "Java",
  icon: "tech-java",
  category: TechCategory.Language,
  level: ProficiencyLevel.Advanced,
};
export const python: Tech = {
  name: "Python",
  icon: "tech-python",
  category: TechCategory.Language,
  level: ProficiencyLevel.Advanced,
};
export const go: Tech = {
  name: "Go",
  icon: "tech-go",
  category: TechCategory.Language,
  level: ProficiencyLevel.Beginner,
};
export const node: Tech = {
  name: "Node Js",
  icon: "tech-node",
  category: TechCategory.Language,
  level: ProficiencyLevel.Advanced,
};
export const scss: Tech = {
  name: "SCSS",
  icon: "tech-sass",
  category: TechCategory.Language,
  level: ProficiencyLevel.Expert,
};

export const skillTechLanguages: Tech[] = [
  js,
  ts,
  node,
  go,
  java,
  python,
  html,
  css,
  scss,
];
