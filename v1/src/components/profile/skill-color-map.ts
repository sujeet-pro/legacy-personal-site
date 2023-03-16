import { TechCategory, TechProficiencyLevel } from "./tech-skills.types";

export const techProficiencyLevelColorMap: Record<
  TechProficiencyLevel,
  string
> = {
  [TechProficiencyLevel.Expert]: `bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-300`,
  [TechProficiencyLevel.Advanced]: `bg-teal-100 text-teal-900 dark:bg-teal-900 dark:text-teal-300`,
  [TechProficiencyLevel.Intermediate]: `bg-cyan-100 text-cyan-900 dark:bg-cyan-900 dark:text-cyan-300`,
  [TechProficiencyLevel.Beginner]: `bg-yellow-100 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-300`,
};

export const categoryBorderClasses: Record<TechCategory, string> = {
  [TechCategory.Language]: "border-sky-300 dark:border-sky-900",

  [TechCategory.FrontEndFramework]: "border-teal-300 dark:border-teal-900",
  [TechCategory.RenderingFramework]:
    "border-emerald-300 dark:border-emerald-900",

  [TechCategory.Testing]: "border-orange-300 dark:border-orange-900",

  [TechCategory.BuildTools]: "border-amber-300 dark:border-amber-900",
  [TechCategory.MonoRepoTools]: "border-yellow-300 dark:border-yellow-900",

  [TechCategory.MobileAndDesktop]: "border-indigo-300 dark:border-indigo-900",

  [TechCategory.BackEndFramework]: "border-violet-300 dark:border-violet-900",
  [TechCategory.DataStore]: "border-purple-300 dark:border-purple-900",

  [TechCategory.Misc]: "border-fuchsia-300 dark:border-fuchsia-900",
};

export const categoryBgAndTextClasses: Record<TechCategory, string> = {
  [TechCategory.Language]:
    "bg-sky-300 text-sky-900 dark:bg-sky-900 dark:text-sky-300",

  [TechCategory.FrontEndFramework]:
    "bg-teal-300 text-teal-900 dark:bg-teal-900 dark:text-teal-300",
  [TechCategory.RenderingFramework]:
    "bg-emerald-300 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-300",

  [TechCategory.Testing]:
    "bg-orange-300 text-orange-900 dark:bg-orange-900 dark:text-orange-300",

  [TechCategory.BuildTools]:
    "bg-amber-300 text-amber-900 dark:bg-amber-900 dark:text-amber-300",
  [TechCategory.MonoRepoTools]:
    "bg-yellow-300 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-300",

  [TechCategory.MobileAndDesktop]:
    "bg-indigo-300 text-indigo-900 dark:bg-indigo-900 dark:text-indigo-300",

  [TechCategory.BackEndFramework]:
    "bg-violet-300 text-violet-900 dark:bg-violet-900 dark:text-violet-300",
  [TechCategory.DataStore]:
    "bg-purple-300 text-purple-900 dark:bg-purple-900 dark:text-purple-300",

  [TechCategory.Misc]:
    "bg-fuchsia-300 text-fuchsia-900 dark:bg-fuchsia-900 dark:text-fuchsia-300",
};
