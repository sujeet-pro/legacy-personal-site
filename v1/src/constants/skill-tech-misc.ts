import { Tech, TechCategory, ProficiencyLevel } from "../types/skills.types";

export const tensorflow: Tech = {
  name: "Tensorflow",
  icon: "tech-tensorflow",
  category: TechCategory.Misc,
  level: ProficiencyLevel.Beginner,
};
export const reactSpring: Tech = {
  name: "React Spring",
  icon: "tech-react_spring",
  category: TechCategory.Misc,
  level: ProficiencyLevel.Intermediate,
};

export const skillTechMisc: Tech[] = [tensorflow, reactSpring];
