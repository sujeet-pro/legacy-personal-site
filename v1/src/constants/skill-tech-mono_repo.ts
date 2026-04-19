import { Tech, TechCategory, ProficiencyLevel } from "../types/skills.types";

// MonoRepo

export const pnpm: Tech = {
  name: "pnpm",
  icon: "tech-pnpm",
  category: TechCategory.MonoRepoTools,
  level: ProficiencyLevel.Beginner,
};
export const nx: Tech = {
  name: "Nx",
  icon: "tech-nx",
  category: TechCategory.MonoRepoTools,
  level: ProficiencyLevel.Beginner,
};
export const npmWorkspace: Tech = {
  name: "npm Workspaces",
  icon: "tech-npm_workspaces",
  category: TechCategory.MonoRepoTools,
  level: ProficiencyLevel.Expert,
};
export const yarnWorkspaces: Tech = {
  name: "Yarn Workspaces",
  icon: "tech-yarn_workspaces",
  category: TechCategory.MonoRepoTools,
  level: ProficiencyLevel.Expert,
};
export const lerna: Tech = {
  name: "Lerna",
  icon: "tech-lerna",
  category: TechCategory.MonoRepoTools,
  level: ProficiencyLevel.Intermediate,
};

export const skillTechMonoRepos: Tech[] = [
  yarnWorkspaces,
  lerna,
  npmWorkspace,
  nx,
  pnpm,
];
