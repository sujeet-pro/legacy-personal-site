export enum TechCategory {
  Language = "Language",
  BackEndFramework = "BackEndFramework",
  FrontEndFramework = "FrontEndFramework",
  MetaFramework = "MetaFramework",
  Testing = "Testing",
  BuildTools = "BuildTools",
  MonoRepoTools = "MonoRepoTools",
  MultiPlatform = "MultiPlatform",
  DataStore = "DataStore",
  Utility = "Utility",
  Misc = "Misc",
}
export enum ProficiencyLevel {
  Expert = "Expert",
  Advanced = "Advanced",
  Intermediate = "Intermediate",
  Beginner = "Beginner",
}
export type Tech = {
  name: string;
  icon: string;
  category: TechCategory;
  level: ProficiencyLevel;
  href?: string;
};

export type TechSkillSection = {
  title: string;
  skills: Tech[];
};

export type SkillProficiencyConfig = {
  title: string;
  level: ProficiencyLevel;
  icon: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
};
