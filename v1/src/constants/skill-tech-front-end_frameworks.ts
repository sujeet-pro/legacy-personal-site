import { Tech, TechCategory, ProficiencyLevel } from "../types/skills.types";

// Front End Framework
export const solidJs: Tech = {
  name: "Solid JS",
  icon: "tech-solid_js",
  category: TechCategory.FrontEndFramework,
  level: ProficiencyLevel.Intermediate,
};
export const svelte: Tech = {
  name: "Svelte",
  icon: "tech-svelte",
  category: TechCategory.FrontEndFramework,
  level: ProficiencyLevel.Beginner,
};
export const react: Tech = {
  name: "React",
  icon: "tech-react",
  category: TechCategory.FrontEndFramework,
  level: ProficiencyLevel.Expert,
};
export const vueJs: Tech = {
  name: "Vue.js",
  icon: "tech-vue_js",
  category: TechCategory.FrontEndFramework,
  level: ProficiencyLevel.Beginner,
};
export const preact: Tech = {
  name: "Preact",
  icon: "tech-preact",
  category: TechCategory.FrontEndFramework,
  level: ProficiencyLevel.Advanced,
};
export const angular: Tech = {
  name: "Angular",
  icon: "tech-angular",
  category: TechCategory.FrontEndFramework,
  level: ProficiencyLevel.Expert,
};
export const qwik: Tech = {
  name: "Qwik",
  icon: "tech-qwik",
  category: TechCategory.FrontEndFramework,
  level: ProficiencyLevel.Beginner,
};

export const skillTechFrontEndFrameworks: Tech[] = [
  react,
  vueJs,
  qwik,
  solidJs,
  svelte,
  preact,
  angular,
];
