import { Tech, TechCategory, TechProficiencyLevel } from "./tech-skills.types";

// Languages
export const js: Tech = {
  name: "JavaScript",
  icon: "js",
  category: TechCategory.Language,
  level: TechProficiencyLevel.Expert,
};
export const ts: Tech = {
  name: "TypeScript",
  icon: "ts",
  category: TechCategory.Language,
  level: TechProficiencyLevel.Expert,
};
export const html: Tech = {
  name: "HTML",
  icon: "html",
  category: TechCategory.Language,
  level: TechProficiencyLevel.Expert,
};
export const css: Tech = {
  name: "CSS",
  icon: "css",
  category: TechCategory.Language,
  level: TechProficiencyLevel.Expert,
};
export const java: Tech = {
  name: "Java",
  icon: "java",
  category: TechCategory.Language,
  level: TechProficiencyLevel.Advanced,
};
export const python: Tech = {
  name: "Python",
  icon: "python",
  category: TechCategory.Language,
  level: TechProficiencyLevel.Advanced,
};
export const go: Tech = {
  name: "Go",
  icon: "go",
  category: TechCategory.Language,
  level: TechProficiencyLevel.Beginner,
};
export const node: Tech = {
  name: "Node Js",
  icon: "node",
  category: TechCategory.Language,
  level: TechProficiencyLevel.Advanced,
};
export const scss: Tech = {
  name: "SCSS",
  icon: "sass",
  category: TechCategory.Language,
  level: TechProficiencyLevel.Expert,
};
// Back End Framework
export const expressjs: Tech = {
  name: "Express JS",
  icon: "express",
  category: TechCategory.BackEndFramework,
  level: TechProficiencyLevel.Expert,
};
export const graphQL: Tech = {
  name: "GraphQL",
  icon: "graphql",
  category: TechCategory.BackEndFramework,
  level: TechProficiencyLevel.Advanced,
};
export const springBoot: Tech = {
  name: "Spring Boot",
  icon: "sprint_boot",
  category: TechCategory.BackEndFramework,
  level: TechProficiencyLevel.Intermediate,
};

// Front End Framework
export const solidJs: Tech = {
  name: "Solid JS",
  icon: "solid_js",
  category: TechCategory.FrontEndFramework,
  level: TechProficiencyLevel.Intermediate,
};
export const svelte: Tech = {
  name: "Svelte",
  icon: "svelte",
  category: TechCategory.FrontEndFramework,
  level: TechProficiencyLevel.Beginner,
};
export const react: Tech = {
  name: "React",
  icon: "react",
  category: TechCategory.FrontEndFramework,
  level: TechProficiencyLevel.Expert,
};
export const vueJs: Tech = {
  name: "Vue.js",
  icon: "vuejs",
  category: TechCategory.FrontEndFramework,
  level: TechProficiencyLevel.Beginner,
};
export const preact: Tech = {
  name: "Preact",
  icon: "preact",
  category: TechCategory.FrontEndFramework,
  level: TechProficiencyLevel.Advanced,
};
export const angular: Tech = {
  name: "Angular",
  icon: "angular",
  category: TechCategory.FrontEndFramework,
  level: TechProficiencyLevel.Expert,
};
export const qwik: Tech = {
  name: "Qwik",
  icon: "qwik",
  category: TechCategory.FrontEndFramework,
  level: TechProficiencyLevel.Beginner,
};

// Rendering Framework

export const nextJs: Tech = {
  name: "Next Js",
  icon: "nextjs",
  category: TechCategory.RenderingFramework,
  level: TechProficiencyLevel.Intermediate,
};
export const gatsby: Tech = {
  name: "Gatsby",
  icon: "gatsby",
  category: TechCategory.RenderingFramework,
  level: TechProficiencyLevel.Expert,
};
export const nuxt: Tech = {
  name: "Nuxt Js",
  icon: "nuxt",
  category: TechCategory.RenderingFramework,
  level: TechProficiencyLevel.Beginner,
};
export const eleventy: Tech = {
  name: "Eleventy",
  icon: "11ty",
  category: TechCategory.RenderingFramework,
  level: TechProficiencyLevel.Advanced,
};
export const astro: Tech = {
  name: "Astro",
  icon: "astro",
  category: TechCategory.RenderingFramework,
  level: TechProficiencyLevel.Advanced,
};

// Testing

export const vitest: Tech = {
  name: "Vitest",
  icon: "vitest",
  category: TechCategory.Testing,
  level: TechProficiencyLevel.Intermediate,
};
export const playwright: Tech = {
  name: "Playwright",
  icon: "playwright",
  category: TechCategory.Testing,
  level: TechProficiencyLevel.Intermediate,
};
export const testingLibrary: Tech = {
  name: "Testing Library",
  icon: "testing_library",
  category: TechCategory.Testing,
  level: TechProficiencyLevel.Intermediate,
};
export const jest: Tech = {
  name: "Jest",
  icon: "jest",
  category: TechCategory.Testing,
  level: TechProficiencyLevel.Expert,
};
export const cypress: Tech = {
  name: "Cypress",
  icon: "cypress",
  category: TechCategory.Testing,
  level: TechProficiencyLevel.Advanced,
};
export const storybook: Tech = {
  name: "Storybook",
  icon: "storybook",
  category: TechCategory.Testing,
  level: TechProficiencyLevel.Expert,
};
export const jasmine: Tech = {
  name: "Jasmine",
  icon: "jasmine",
  category: TechCategory.Testing,
  level: TechProficiencyLevel.Beginner,
};
export const selenium: Tech = {
  name: "Selenium",
  icon: "selenium",
  category: TechCategory.Testing,
  level: TechProficiencyLevel.Beginner,
};
export const puppeteer: Tech = {
  name: "Puppeteer",
  icon: "puppeteer",
  category: TechCategory.Testing,
  level: TechProficiencyLevel.Beginner,
};
export const mocha: Tech = {
  name: "Mocha",
  icon: "mocha",
  category: TechCategory.Testing,
  level: TechProficiencyLevel.Beginner,
};

// Build tools

export const vite: Tech = {
  name: "Vite",
  icon: "vite",
  category: TechCategory.BuildTools,
  level: TechProficiencyLevel.Advanced,
};

export const esbuild: Tech = {
  name: "esbuild",
  icon: "esbuild",
  category: TechCategory.BuildTools,
  level: TechProficiencyLevel.Advanced,
};

export const tsc: Tech = {
  name: "tsc CLI",
  icon: "tsc",
  category: TechCategory.BuildTools,
  level: TechProficiencyLevel.Advanced,
};

export const rollup: Tech = {
  name: "Rollup",
  icon: "rollup",
  category: TechCategory.BuildTools,
  level: TechProficiencyLevel.Expert,
};

export const parcel: Tech = {
  name: "Parcel",
  icon: "parcel",
  category: TechCategory.BuildTools,
  level: TechProficiencyLevel.Beginner,
};

export const webpack: Tech = {
  name: "Webpack",
  icon: "webpack",
  category: TechCategory.BuildTools,
  level: TechProficiencyLevel.Advanced,
};

export const gulp: Tech = {
  name: "Gulp",
  icon: "gulp",
  category: TechCategory.BuildTools,
  level: TechProficiencyLevel.Advanced,
};

export const browserify: Tech = {
  name: "Browserify",
  icon: "browserify",
  category: TechCategory.BuildTools,
  level: TechProficiencyLevel.Beginner,
};

// MonoRepo

export const pnpm: Tech = {
  name: "pnpm",
  icon: "pnpm",
  category: TechCategory.MonoRepoTools,
  level: TechProficiencyLevel.Beginner,
};
export const nx: Tech = {
  name: "Nx",
  icon: "nx",
  category: TechCategory.MonoRepoTools,
  level: TechProficiencyLevel.Beginner,
};
export const npmWorkspace: Tech = {
  name: "npm Workspaces",
  icon: "npm_workspaces",
  category: TechCategory.MonoRepoTools,
  level: TechProficiencyLevel.Expert,
};
export const yarnWorkspaces: Tech = {
  name: "Yarn Workspaces",
  icon: "yarn_workspaces",
  category: TechCategory.MonoRepoTools,
  level: TechProficiencyLevel.Expert,
};
export const lerna: Tech = {
  name: "Lerna",
  icon: "lerna",
  category: TechCategory.MonoRepoTools,
  level: TechProficiencyLevel.Intermediate,
};

// Mobile and Desktop
export const expo: Tech = {
  name: "Expo",
  icon: "expo",
  category: TechCategory.MobileAndDesktop,
  level: TechProficiencyLevel.Intermediate,
};
export const electron: Tech = {
  name: "Electron",
  icon: "electron",
  category: TechCategory.MobileAndDesktop,
  level: TechProficiencyLevel.Intermediate,
};
export const reactNative: Tech = {
  name: "React Native",
  icon: "reactnative",
  category: TechCategory.MobileAndDesktop,
  level: TechProficiencyLevel.Intermediate,
};
export const ionic: Tech = {
  name: "Ionic",
  icon: "ionic",
  category: TechCategory.MobileAndDesktop,
  level: TechProficiencyLevel.Advanced,
};
export const cordova: Tech = {
  name: "Cordova",
  icon: "mdi:cordova",
  category: TechCategory.MobileAndDesktop,
  level: TechProficiencyLevel.Beginner,
};

// Data Store
// Misc
