import type { Module } from "./types";

export const modules: Module[] = [
  {
    slug: "emocions-estres",
    title: "Gestionar les pròpies emocions i l'estrès",
    subtitle: "Entendre el que sents per poder cuidar millor",
    description:
      "Cuidar implica un impacte emocional real. Aquest mòdul t'ajuda a reconèixer les teves emocions, entendre per què aparèixen i aprendre estratègies pràctiques per regular-les de manera saludable.",
    relatedPhases: ["tractament", "post-tractament", "fase-avancada"],
    readingTime: 12,
    sections: [
      {
        id: "impacte-emocional",
        title: "Cuidar implica impacte emocional",
        content: [
          "La càrrega que comporta la malaltia fa que els cuidadors sovint hagin de canviar els seus hàbits i maneres de socialitzar, cosa que pot portar a situacions d'aïllament i patiment. Com a resultat, poden aparèixer problemes físics i emocionals: estrès, irritabilitat, apatia o tristesa.",
          "Si aquest estrès es manté durant un període prolongat, pot conduir a trastorns psicològics i afectar el sistema immunològic. Sovint aquests efectes son poc reconeguts o no s'aborden adequadament.",
          "Un 61,7% dels familiars enquestats va expressar la necessitat d'ajuda professional. Reconèixer-ho és el primer pas.",
        ],
      },
      {
        id: "quines-emocions",
        title: "Quines emocions aparèixen?",
        content: [
          "Els cuidadors viuen una gran varietat d'emocions, amb un clar predomini de les negatives sobre les positives. Entre les més comunes: tristesa, por, impotència, angoixa, soledat, ràbia i, a vegades, culpa per sentir aquestes emocions.",
          "Malgrat que les emocions negatives son les més presents, també hi ha espai per a les positives: confiança, esperança, gratitud. Poden coexistir amb el malestar.",
          "La intensitat i el tipus d'emocions canvien segons el moment de la malaltia. Durant els primers 6-9 mesos del tractament s'observa un augment notable del malestar emocional.",
        ],
      },
      {
        id: "emocions-adaptatives",
        title: "Les emocions son adaptatives",
        content: [
          "Des d'una perspectiva evolutiva, les emocions juguen un paper adaptatiu: preparen el nostre cos per afrontar situacions difícils. Sentir por, tristesa o ràbia no és un error: és el teu sistema emocional funcionant.",
          "La ràbia activa el sistema nerviós simpàtic i ens prepara per defensar-nos. La tristesa redueix l'energia i fomenta la introspecció, ajudant-nos a gestionar pèrdues. La por ens fa avaluar la situació amb precaució.",
          "Malgrat l'aspecte adaptatiu, les emocions poden convertir-se en perjudicials si es mantenen fora d'un rang funcional o si intentem suprimir-les constantment.",
        ],
      },
      {
        id: "regulacio-emocional",
        title: "La importància de regular les emocions",
        content: [
          "La regulació emocional és el procés que permet gestionar les emocions i ajustar el comportament per adaptar-se a les circumstàncies. No es tracta d'eliminar les emocions, sinó d'aprendre a manejar-les de manera flexible i adaptativa.",
          "Quan la regulació emocional es fa de manera adequada, té un impacte positiu en la salut física i psicològica. Les estratègies de supressió o inhibició emocional s'han relacionat amb conseqüències negatives: alteracions respiratòries, gastrointestinals o cardiovasculars.",
        ],
        techniques: [
          {
            id: "respiracio",
            title: "Respiració profunda",
            description:
              "La respiració conscient és una de les eines més accessibles i eficaces per regular l'activació emocional. Actua directament sobre el sistema nerviós autònom, reduint la resposta d'estrès.",
            benefits: [
              "Actua com un antídot contra l'estrès",
              "Millora l'ansietat, la depressió i la irritabilitat",
              "Redueix la tensió muscular",
              "Es pot practicar en qualsevol moment i lloc",
            ],
            steps: [
              "Asseu-te o estigues dret en una posició còmoda",
              "Tanca els ulls o mira cap a baix",
              "Inspira lentament pel nas comptant fins a 4",
              "Reté l'aire durant 4 segons",
              "Expira lentament per la boca comptant fins a 6",
              "Repeteix 5-10 vegades fins sentir que et calmes",
            ],
          },
          {
            id: "mindfulness",
            title: "Mindfulness",
            description:
              "El mindfulness és la pràctica d'estar plenament present en el moment actual, sense jutjar el que es viu. Ens ajuda a sortir del 'mode pilot automàtic' i de les rumiacions sobre el passat i el futur.",
            benefits: [
              "Redueix l'ansietat i la depressió",
              "Millora la qualitat del son",
              "Augmenta la resiliència emocional",
              "Enforteix les relacions i l'empatia",
            ],
            steps: [
              "Tria un moment del dia (matí, migdia o vespre)",
              "Busca un lloc tranquil on no et molestin",
              "Seure còmodament i tanca els ulls",
              "Porta l'atenció a la respiració sense intentar canviar-la",
              "Quan la ment divagui (i ho farà), torna l'atenció a la respiració sense jutjar-te",
              "Comença amb 5 minuts diaris i augmenta progressivament",
            ],
          },
          {
            id: "escriptura",
            title: "Escriptura emocional",
            description:
              "Escriure sobre el que vivim ens obliga a estructurar idees i permet trobar sentit al que ocorre. Estudis demostren que les persones que escriuen sobre les seves experiències difícils presenten menys depressió i millor salut.",
            benefits: [
              "Ajuda a processar experiències difícils",
              "Redueix la càrrega emocional",
              "Fomenta l'autoconeixement",
              "Millora el benestar psicològic a llarg termini",
            ],
            steps: [
              "Reserva 15-20 minuts en un espai tranquil",
              "Escriu lliurement sobre el que sents sense censurar-te",
              "No et preocupis per l'ortografia ni l'estructura",
              "Pots escriure sobre allò que t'angoixa, el que agraeixis, o el que desitgis",
              "Fes-ho de manera regular, preferiblement setmanal",
            ],
          },
          {
            id: "relaxacio",
            title: "Estratègies de relaxació diàries",
            description:
              "La relaxació pot tenir moltes formes. No necessita ser un mètode formal: pot ser qualsevol activitat que et desconnecti i t'aporti calma. El que importa és que sigui significativa per a tu.",
            benefits: [
              "Redueix la tensió física acumulada",
              "Proporciona espais de restauració emocional",
              "Millora la qualitat del son",
              "Reforça la identitat pròpia més enllà del rol de cuidador",
            ],
            steps: [
              "Identifica 2-3 activitats que et generïn benestar (passejar, llegir, escoltar música, cuinar...)",
              "Programa-les en la teva agenda com si fossin cites importants",
              "No les canceles ni les postergues per 'no tenir temps'",
              "Recorda: no és un luxe, és una necessitat",
            ],
          },
        ],
      },
    ],
  },
];

export function getModule(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}
