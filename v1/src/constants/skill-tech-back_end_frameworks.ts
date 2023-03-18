import { Tech, TechCategory, ProficiencyLevel } from "../types/skills.types";

// Back End Framework
export const expressJs: Tech = {
  name: "Express JS",
  icon: "tech-express",
  category: TechCategory.BackEndFramework,
  level: ProficiencyLevel.Expert,
};
export const graphQL: Tech = {
  name: "GraphQL",
  icon: "tech-graphql",
  category: TechCategory.BackEndFramework,
  level: ProficiencyLevel.Advanced,
};
export const springBoot: Tech = {
  name: "Spring Boot",
  icon: "tech-sprint_boot",
  category: TechCategory.BackEndFramework,
  level: ProficiencyLevel.Intermediate,
};

export const skillTechBackEndFrameworks: Tech[] = [
  expressJs,
  graphQL,
  springBoot,
];
