import {
  TechSkillSection,
  SkillProficiencyConfig,
  ProficiencyLevel,
} from "../types/skills.types";
import { skillTechBackEndFrameworks } from "./skill-tech-back_end_frameworks";
import { skillTechBuildTools } from "./skill-tech-build_tools";
import { skillTechDataStores } from "./skill-tech-data_stores";
import { skillTechFrontEndFrameworks } from "./skill-tech-front-end_frameworks";
import { skillTechLanguages } from "./skill-tech-languages";
import { skillTechMetaFrameworks } from "./skill-tech-meta_frameworks";
import { skillTechMisc } from "./skill-tech-misc";
import { skillTechMonoRepos } from "./skill-tech-mono_repo";
import { skillTechMultiPlatform } from "./skill-tech-multi-platform";
import { skillTechTesting } from "./skill-tech-testing";
import { skillTechUtilities } from "./skill-tech-utilities";

export const techSkillSections: TechSkillSection[] = [
  {
    title: "Programming Languages",
    skills: skillTechLanguages,
  },
  {
    title: "Front-End Frameworks",
    skills: skillTechFrontEndFrameworks,
  },
  {
    title: "Meta Frameworks",
    skills: skillTechMetaFrameworks,
  },
  {
    title: "Multi-Platform Frameworks",
    skills: skillTechMultiPlatform,
  },
  {
    title: "Testing",
    skills: skillTechTesting,
  },
  {
    title: "Build Tools",
    skills: skillTechBuildTools,
  },
  {
    title: "Mono-Repo Tools",
    skills: skillTechMonoRepos,
  },
  {
    title: "Back-End Frameworks",
    skills: skillTechBackEndFrameworks,
  },
  {
    title: "Data Stores",
    skills: skillTechDataStores,
  },
  {
    title: "Utilities",
    skills: skillTechUtilities,
  },
  {
    title: "Miscellaneous",
    skills: skillTechMisc,
  },
];

export const proficiencyLevelConfigMap: Record<
  ProficiencyLevel,
  SkillProficiencyConfig
> = {
  [ProficiencyLevel.Expert]: {
    title: "Expert",
    level: ProficiencyLevel.Expert,
    icon: "profile-skill_level_4",
    textColor: "text-purple-800 dark:text-purple-200",
    bgColor: "bg-purple-200 dark:bg-purple-800",
    borderColor: "border-purple-600 dark:border-purple-300",
  },
  [ProficiencyLevel.Advanced]: {
    title: "Advance",
    level: ProficiencyLevel.Advanced,
    icon: "profile-skill_level_3",
    textColor: "text-green-800 dark:text-green-200",
    bgColor: "bg-green-200 dark:bg-green-800",
    borderColor: "border-green-600 dark:border-green-300",
  },
  [ProficiencyLevel.Intermediate]: {
    title: "Intermediate",
    level: ProficiencyLevel.Intermediate,
    icon: "profile-skill_level_2",
    textColor: "text-blue-800 dark:text-blue-200",
    bgColor: "bg-blue-200 dark:bg-blue-800",
    borderColor: "border-blue-600 dark:border-blue-300",
  },
  [ProficiencyLevel.Beginner]: {
    title: "Beginner",
    level: ProficiencyLevel.Beginner,
    icon: "profile-skill_level_1",
    textColor: "text-lime-800 dark:text-lime-200",
    bgColor: "bg-lime-200 dark:bg-lime-800",
    borderColor: "border-lime-600 dark:border-lime-300",
  },
};
export const proficiencyLevelConfigs: SkillProficiencyConfig[] = [
  proficiencyLevelConfigMap.Expert,
  proficiencyLevelConfigMap.Advanced,
  proficiencyLevelConfigMap.Intermediate,
  proficiencyLevelConfigMap.Beginner,
];
