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
  class: string
}

export const profiencencyConfigs: Record<ProficiencyLevel, ProfiencencyConfig> = {
  [ProficiencyLevel.Expert]: {
    title: "Expert",
    level: ProficiencyLevel.Expert,
    icon: "profile-skill_level_4",
    class: "proficiency-expert",
  },
  [ProficiencyLevel.Advanced]: {
    title: "Advance",
    level: ProficiencyLevel.Advanced,
    icon: "profile-skill_level_3",
    class: "proficiency-advanced",
  },
  [ProficiencyLevel.Intermediate]: {
    title: "Intermediate",
    level: ProficiencyLevel.Intermediate,
    icon: "profile-skill_level_2",
    class: "proficiency-intermediate",
  },
  [ProficiencyLevel.Beginner]: {
    title: "Beginner",
    level: ProficiencyLevel.Beginner,
    icon: "profile-skill_level_1",
    class: "proficiency-beginner",
  },
}

export const proficiencyLevelConfigs: ProfiencencyConfig[] = [
  profiencencyConfigs.Expert,
  profiencencyConfigs.Advanced,
  profiencencyConfigs.Intermediate,
  profiencencyConfigs.Beginner,
];
