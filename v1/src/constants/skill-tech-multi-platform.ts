import { Tech, TechCategory, ProficiencyLevel } from "../types/skills.types";

// Multi Platform
export const expo: Tech = {
  name: "Expo",
  icon: "tech-expo",
  category: TechCategory.MultiPlatform,
  level: ProficiencyLevel.Intermediate,
};
export const electron: Tech = {
  name: "Electron",
  icon: "tech-electron",
  category: TechCategory.MultiPlatform,
  level: ProficiencyLevel.Intermediate,
};
export const reactNative: Tech = {
  name: "React Native",
  icon: "tech-react_native",
  category: TechCategory.MultiPlatform,
  level: ProficiencyLevel.Intermediate,
};
export const ionic: Tech = {
  name: "Ionic",
  icon: "tech-ionic",
  category: TechCategory.MultiPlatform,
  level: ProficiencyLevel.Advanced,
};
export const cordova: Tech = {
  name: "Cordova",
  icon: "tech-cordova",
  category: TechCategory.MultiPlatform,
  level: ProficiencyLevel.Beginner,
};

export const skillTechMultiPlatform = [
  electron,
  reactNative,
  ionic,
  expo,
  cordova,
];
