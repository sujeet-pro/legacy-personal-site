import { Tech, TechCategory, ProficiencyLevel } from "../types/skills.types";

// Testing

export const vitest: Tech = {
  name: "Vitest",
  icon: "tech-vitest",
  category: TechCategory.Testing,
  level: ProficiencyLevel.Intermediate,
};
export const playwright: Tech = {
  name: "Playwright",
  icon: "tech-playwright",
  category: TechCategory.Testing,
  level: ProficiencyLevel.Intermediate,
};
export const testingLibrary: Tech = {
  name: "Testing Library",
  icon: "tech-testing_library",
  category: TechCategory.Testing,
  level: ProficiencyLevel.Intermediate,
};
export const jest: Tech = {
  name: "Jest",
  icon: "tech-jest",
  category: TechCategory.Testing,
  level: ProficiencyLevel.Expert,
};
export const cypress: Tech = {
  name: "Cypress",
  icon: "tech-cypress",
  category: TechCategory.Testing,
  level: ProficiencyLevel.Advanced,
};
export const storybook: Tech = {
  name: "Storybook",
  icon: "tech-storybook",
  category: TechCategory.Testing,
  level: ProficiencyLevel.Expert,
};
export const jasmine: Tech = {
  name: "Jasmine",
  icon: "tech-jasmine",
  category: TechCategory.Testing,
  level: ProficiencyLevel.Beginner,
};
export const selenium: Tech = {
  name: "Selenium",
  icon: "tech-selenium",
  category: TechCategory.Testing,
  level: ProficiencyLevel.Beginner,
};
export const puppeteer: Tech = {
  name: "Puppeteer",
  icon: "tech-puppeteer",
  category: TechCategory.Testing,
  level: ProficiencyLevel.Beginner,
};
export const mocha: Tech = {
  name: "Mocha",
  icon: "tech-mocha",
  category: TechCategory.Testing,
  level: ProficiencyLevel.Beginner,
};

export const skillTechTesting: Tech[] = [
  jest,
  testingLibrary,
  storybook,
  cypress,
  playwright,
  vitest,
  jasmine,
  mocha,
  puppeteer,
  selenium,
];
