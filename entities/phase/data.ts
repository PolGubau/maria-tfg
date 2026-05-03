import type { Phase } from "./types";

export const phases: Phase[] = [
	{
		slug: "tractament",
		title: "Guia psicoeducativa per a familiars de persones amb càncer",
		shortTitle: "Guia",
		subtitle: "AL LLARG DEL PROCÉS ONCOLÒGIC",
		description:
			"Aquesta guia ofereix continguts psicoeducatius per acompanyar els familiars de persones amb càncer al llarg de tot el procés oncològic: des del diagnòstic fins al final de vida.",
		colorVar: "treatment",
		stats: [
			{ label: "No van rebre orientació emocional al diagnòstic", value: 62.5 },
			{ label: "Van sentir necessitat de suport professional", value: 61.7 },
			{ label: "Consideren la gestió de la por com a prioritat", value: 87.5 },
			{ label: "La comunicació amb el pacient és clau", value: 87.5 },
		],
		mainChallenges: [
			"La incertesa sobre l'evolució i el pronòstic",
			"Gestionar les pròpies emocions i l'estrès",
			"No saber com acompanyar al pacient",
			"Compatibilitzar la vida quotidiana amb la cura",
			"L'aïllament social progressiu",
		],
		sections: [
			{
				id: "introduccio",
				title: "Introducció",
				content: [],
			},
			{
				id: "comprendre-proces",
				title: "Comprendre el procés oncològic",
				content: [],
			},
			{
				id: "impacte-emocional",
				title: "Impacte emocional del cuidador al llarg del procés",
				content: [],
			},
			{
				id: "acompanyament",
				title: "Acompanyament a la persona afectada",
				content: [],
			},
			{
				id: "suport-social",
				title: "Suport social i familiar del cuidador",
				content: [],
			},
			{
				id: "recursos",
				title: "Recursos de suport",
				content: [],
			},
		],
	},
];

export function getPhase(slug: string): Phase | undefined {
	return phases.find((p) => p.slug === slug);
}
