export type ModuleSlug =
	| "introduccio"
	| "comprendre-proces"
	| "por-incertesa"
	| "patiment-cuidador"
	| "acceptacio-adaptacio"
	| "emocions-estres"
	| "acompanyament"
	| "suport-social"
	| "recursos-suport";

export interface Technique {
	id: string;
	title: string;
	description: string;
	steps?: string[];
	benefits?: string[];
}

export interface Resource {
	name: string;
	description: string;
	type: "helpline" | "association" | "service";
	phone?: string;
	website?: string;
}

export interface ModuleSection {
	id: string;
	title: string;
	content: string[];
	techniques?: Technique[];
	resources?: Resource[];
	tip?: string;
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
