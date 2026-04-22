export type PhaseSlug = "tractament" | "post-tractament" | "fase-avancada";

export interface PhaseStat {
  label: string;
  value: number; // percentage 0-100
}

export interface PhaseSection {
  id: string;
  title: string;
  content: string[];
  tip?: string;
}

export interface Phase {
  slug: PhaseSlug;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  colorVar: string; // CSS var name e.g. "treatment"
  stats: PhaseStat[];
  mainChallenges: string[];
  sections: PhaseSection[];
}
