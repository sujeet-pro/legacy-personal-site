import { Tech, TechCategory, ProficiencyLevel } from "../types/skills.types";

// Build tools

export const vite: Tech = {
  name: "Vite",
  icon: "tech-vite",
  category: TechCategory.BuildTools,
  level: ProficiencyLevel.Advanced,
};

export const esbuild: Tech = {
  name: "esbuild",
  icon: "tech-esbuild",
  category: TechCategory.BuildTools,
  level: ProficiencyLevel.Advanced,
};

export const tsc: Tech = {
  name: "tsc CLI",
  icon: "tech-tsc",
  category: TechCategory.BuildTools,
  level: ProficiencyLevel.Advanced,
};

export const rollup: Tech = {
  name: "Rollup",
  icon: "tech-rollup",
  category: TechCategory.BuildTools,
  level: ProficiencyLevel.Expert,
};

export const parcel: Tech = {
  name: "Parcel",
  icon: "tech-parcel",
  category: TechCategory.BuildTools,
  level: ProficiencyLevel.Beginner,
};

export const webpack: Tech = {
  name: "Webpack",
  icon: "tech-webpack",
  category: TechCategory.BuildTools,
  level: ProficiencyLevel.Advanced,
};

export const gulp: Tech = {
  name: "Gulp",
  icon: "tech-gulp",
  category: TechCategory.BuildTools,
  level: ProficiencyLevel.Advanced,
};

export const browserify: Tech = {
  name: "Browserify",
  icon: "tech-browserify",
  category: TechCategory.BuildTools,
  level: ProficiencyLevel.Beginner,
};

export const skillTechBuildTools: Tech[] = [
  webpack,
  rollup,
  vite,
  gulp,
  tsc,
  esbuild,
  parcel,
  browserify,
];
