export enum TechCategory {
  Language = "Language",
  BackEndFramework = "BackEndFramework",
  FrontEndFramework = "FrontEndFramework",
  RenderingFramework = "RenderingFramework",
  Testing = "Testing",
  BuildTools = "BuildTools",
  MonoRepoTools = "MonoRepoTools",
  MobileAndDesktop = "MobileAndDesktop",
  DataStore = "DataStore",
  Misc = "Misc",
}
export enum TechProficiencyLevel {
  Expert = "Expert",
  Advanced = "Advanced",
  Intermediate = "Intermediate",
  Beginner = "Beginner",
}
export type Tech = {
  name: string;
  icon: string;
  category: TechCategory;
  level: TechProficiencyLevel;
  href?: string;
};
