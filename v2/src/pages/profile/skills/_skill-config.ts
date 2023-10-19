export enum ProficiencyLevel {
  Expert = "Expert",
  Advanced = "Advanced",
  Intermediate = "Intermediate",
  Beginner = "Beginner",
}

export type ProfiencencyConfig = {
  title: string
  icon: string
  level: ProficiencyLevel
  textColor: string
  bgColor: string
  borderColor: string
}

export const profiencencyConfigs: Record<ProficiencyLevel, ProfiencencyConfig> = {
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
}
