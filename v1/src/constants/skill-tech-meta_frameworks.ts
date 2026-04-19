import { Tech, TechCategory, ProficiencyLevel } from "../types/skills.types";

// Rendering Framework

export const nextJs: Tech = {
  name: "Next Js",
  icon: "tech-next_js",
  category: TechCategory.MetaFramework,
  level: ProficiencyLevel.Intermediate,
};
export const gatsby: Tech = {
  name: "Gatsby",
  icon: "tech-gatsby",
  category: TechCategory.MetaFramework,
  level: ProficiencyLevel.Expert,
};
export const nuxt: Tech = {
  name: "Nuxt Js",
  icon: "tech-nuxt",
  category: TechCategory.MetaFramework,
  level: ProficiencyLevel.Beginner,
};
export const eleventy: Tech = {
  name: "Eleventy",
  icon: "tech-11ty",
  category: TechCategory.MetaFramework,
  level: ProficiencyLevel.Advanced,
};
export const astro: Tech = {
  name: "Astro",
  icon: "tech-astro",
  category: TechCategory.MetaFramework,
  level: ProficiencyLevel.Advanced,
};

export const skillTechMetaFrameworks: Tech[] = [
  gatsby,
  nextJs,
  astro,
  eleventy,
  nuxt,
];
