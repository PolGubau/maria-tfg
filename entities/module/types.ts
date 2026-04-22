export type ModuleSlug = "emocions-estres";

export interface Technique {
  id: string;
  title: string;
  description: string;
  steps?: string[];
  benefits?: string[];
}

export interface ModuleSection {
  id: string;
  title: string;
  content: string[];
  techniques?: Technique[];
}

export interface Module {
  slug: ModuleSlug;
  title: string;
  subtitle: string;
  description: string;
  relatedPhases: string[];
  readingTime: number; // minutes
  sections: ModuleSection[];
}
