import { Tech, TechCategory, ProficiencyLevel } from "../types/skills.types";

export const elasticSearch: Tech = {
  name: "Elastic Search",
  icon: "tech-elasticsearch",
  category: TechCategory.DataStore,
  level: ProficiencyLevel.Intermediate,
};

export const postgres: Tech = {
  name: "Postgres",
  icon: "tech-postgres",
  category: TechCategory.DataStore,
  level: ProficiencyLevel.Intermediate,
};

export const neo4j: Tech = {
  name: "Neo4j",
  icon: "tech-neo4j",
  category: TechCategory.DataStore,
  level: ProficiencyLevel.Intermediate,
};

export const firebase: Tech = {
  name: "Firebase",
  icon: "tech-firebase",
  category: TechCategory.DataStore,
  level: ProficiencyLevel.Intermediate,
};

export const skillTechDataStores: Tech[] = [
  elasticSearch,
  neo4j,
  postgres,
  firebase,
];
