import type { CollectionEntry } from "astro:content";

export type OrgKeys = CollectionEntry<"project">["data"]["company"];
export type Organization = {
  name: string;
  icon: string;
  linkedInUrl: string;
  orgUrl: string;
  aboutUrl: string;
};

export const vistaprint: Organization = {
  name: "Vistaprint",
  icon: "company-vistaprint",
  linkedInUrl: "https://www.linkedin.com/company/vistaprint/",
  orgUrl: "",
  aboutUrl: "",
};

export const cure_fit: Organization = {
  name: "Cure.Fit",
  icon: "company-cure.fit",
  linkedInUrl: "https://www.linkedin.com/company/cult.fit/",
  orgUrl: "",
  aboutUrl: "",
};

export const media_net: Organization = {
  name: "Media.net",
  icon: "company-media.net",
  linkedInUrl: "https://www.linkedin.com/company/media.net/",
  orgUrl: "",
  aboutUrl: "",
};

export const infosys: Organization = {
  name: "Infosys",
  icon: "company-infosys",
  linkedInUrl: "https://www.linkedin.com/company/infosys/",
  orgUrl: "",
  aboutUrl: "",
};

export const personal: Organization = {
  name: "Personal",
  icon: "company-x",
  linkedInUrl: "",
  orgUrl: "",
  aboutUrl: "",
};

export const organizationMap: Record<OrgKeys, Organization> = {
  Vistaprint: vistaprint,
  "Cure.fit": cure_fit,
  "Media.net": media_net,
  Infosys: infosys,
  Personal: personal,
};
