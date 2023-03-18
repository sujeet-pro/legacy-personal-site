import { Tech, TechCategory, ProficiencyLevel } from "../types/skills.types";

export const ajv: Tech = {
  name: "AJV",
  icon: "tech-ajv",
  category: TechCategory.Utility,
  level: ProficiencyLevel.Advanced,
};

export const skillTechUtilities: Tech[] = [ajv];
