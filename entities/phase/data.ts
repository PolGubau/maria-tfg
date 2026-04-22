import type { Phase } from "./types";

export const phases: Phase[] = [
  {
    slug: "tractament",
    title: "Fase de Tractament",
    shortTitle: "Tractament",
    subtitle: "Quan tot comença",
    description:
      "El diagnòstic i l'inici del tractament marquen un punt d'inflexió. La incertesa, la por al pronòstic i l'adaptació a una nova realitat son els reptes principals d'aquesta etapa.",
    colorVar: "treatment",
    stats: [
      { label: "No van rebre orientació emocional al diagnòstic", value: 62.5 },
      { label: "Van sentir necessitat de suport professional", value: 75 },
      { label: "Consideren la gestió de la por com a prioritat", value: 87.5 },
      { label: "La comunicació amb el pacient és clau", value: 87.5 },
    ],
    mainChallenges: [
      "La incertesa sobre l'evolució i el pronòstic",
      "Gestionar els efectes secundaris del tractament",
      "No saber com acompanyar al pacient",
      "Compatibilitzar la vida quotidiana amb la cura",
      "L'aïllament social progressiu",
    ],
    sections: [
      {
        id: "comprendre",
        title: "Comprendre el procés",
        content: [
          "El tractament oncològic pot incloure quimioteràpia, radioteràpia, cirurgia o immunoteràpia, sovint en combinació. Cada opció té efectes secundaris específics: fatiga intensa, nàusees, caiguda del cabell, major vulnerabilitat a infeccions.",
          "Com a familiar, entendre el que s'està vivint és el primer pas per poder acompanyar bé. No cal ser expert mèdic: cal estar present, informat i disposat a preguntar.",
          "Els professionals sanitaris son un recurs clau. No dubtis a demanar aclariments sobre el pla de tractament, els efectes esperats i els senyals d'alarma que requereixen atenció immediata.",
        ],
        tip: "Porta un quadern on anotis les preguntes que van sorgint entre visites. Molts familiars obliden allò important quan arriben a la consulta.",
      },
      {
        id: "impacte-emocional",
        title: "Impacte emocional",
        content: [
          "La por al pronòstic, la tristesa, la ràbia i la sensació d'impotència son emocions completament normals i adaptatives. Aparèixen perquè estimes la persona que s'ha vist afectada.",
          "Un 62,5% dels familiars en fase de tractament no van rebre cap orientació emocional en el moment del diagnòstic. Aquesta absència de suport pot intensificar el malestar i la sensació d'anar a la deriva.",
          "És important reconèixer que cuidar implica un cost emocional real. No és debilitat: és una resposta humana davant una situació extraordinàriament difícil.",
        ],
        tip: "Permetre't sentir el que sents és el primer pas per gestionar-ho. Suprimir les emocions sovint les intensifica.",
      },
      {
        id: "com-donar-suport",
        title: "Com donar suport",
        content: [
          "Donar suport al pacient durant el tractament requereix habilitats que s'aprenen. L'escolta activa, l'empatia i saber estar present sense intentar 'resoldre' ho tot son les eines principals.",
          "Estratègies pràctiques: pregunta com es sent en comptes d'assumir, evita minimitzar ('almenys...', 'podria ser pitjor'), respecta els moments de silenci, ofereix ajuda concreta ('vinc a buscar-te dijous') en comptes de genèrica ('digue'm si necessites res').",
          "La presència física i emocional val més que les paraules perfectes. A vegades, simplement acompanyar en silenci és el que el pacient necessita.",
        ],
        tip: "No has de tenir les respostes correctes. La teva presència ja és suport.",
      },
      {
        id: "les-teves-necessitats",
        title: "Les teves pròpies necessitats",
        content: [
          "Un 75% dels familiars en fase de tractament van sentir la necessitat de suport professional. Reconèixer aquesta necessitat és un acte de valentia, no de feblesa.",
          "L'autocura no és egoisme: és una condició necessària per poder seguir cuidant. Dedica temps a activitats que t'aportin benestar, manté rutines en la mesura del possible i busca espais on poder expressar el que sents.",
          "Parla amb algú de confiança. No has de portar sol tot el pes emocional d'aquesta situació.",
        ],
        tip: "Si tu t'esgotes, no podràs cuidar ningú. La teva salut emocional importa tant com la del pacient.",
      },
      {
        id: "recursos",
        title: "Recursos i suport",
        content: [
          "Associació Maresme Oncològic: suport psicosocial i grups de familiars a la comarca del Maresme.",
          "Associació Española Contra el Cáncer (AECC): línia d'ajuda gratuïta 900 100 036, disponible tots els dies.",
          "Serveis de psicooncologia de l'hospital de referència: demana'ls als professionals sanitaris.",
          "Grups de suport presencials i online per a familiars: compartir l'experiència amb qui ho ha viscut és profundament terapèutic.",
        ],
      },
    ],
  },
  {
    slug: "post-tractament",
    title: "Finalització del Tractament",
    shortTitle: "Post-tractament",
    subtitle: "La nova normalitat",
    description:
      "Quan el tractament actiu acaba, la família s'enfronta a una paradoxa: mentre els altres celebren, el familiar sovint experimenta augment de la incertesa, por a la recaiguda i una desestabilització emocional inesperada.",
    colorVar: "post",
    stats: [
      { label: "No van rebre orientació emocional inicial", value: 60.9 },
      { label: "Van sentir necessitat de suport professional", value: 52.2 },
      { label: "Consideren la gestió de la por prioritaria", value: 73.9 },
      { label: "La comunicació amb el pacient és clau", value: 73.9 },
    ],
    mainChallenges: [
      "Por a la recaiguda de la malaltia",
      "Augment de la incertesa i la desesperança",
      "Inestabilitat emocional inesperada",
      "Menys fonts de suport (l'entorn 'celebra' i espera normalitat)",
      "Adaptació a una nova rutina sense les visites freqüents",
    ],
    sections: [
      {
        id: "comprendre",
        title: "Comprendre el procés",
        content: [
          "Acabar el tractament és un moment que l'entorn sovint percep com una alleujament total. Però per al familiar i el pacient, la fi del tractament actiu no sempre significa la fi del malestar.",
          "Els controls periòdics, els efectes residuals del tractament i la por constant a la recaiguda configuren una nova realitat que requereix adaptació.",
          "Els efectes tardans del tractament —fatiga persistent, dificultats cognitives ('boira quimio'), canvis emocionals— poden sorprendre quan ja s'esperava 'tornar a la normalitat'.",
        ],
        tip: "La 'nova normalitat' no és la mateixa d'abans. Permet-te (i permet al pacient) redefinir-la sense pressa.",
      },
      {
        id: "impacte-emocional",
        title: "Impacte emocional",
        content: [
          "La por a la recaiguda és una de les experiències més comunes i menys parlades d'aquesta fase. Cada control, cada dolor nou, cada resultat d'anàlisi pot reactivar l'ansietat.",
          "L'augment de la incertesa i la desesperança pot ser paradoxal: 'hauríem d'estar contents, però no ho estem'. Aquesta sensació és vàlida i molt freqüent.",
          "L'entorn tendeix a reduir el suport ('ja ha passat'), però les necessitats emocionals del familiar continuen. Això pot generar sensació d'aïllament i incomprensió.",
        ],
        tip: "Si sents que hauries de 'ja estar bé' però no ho estàs, sàpigues que és una experiència molt compartida entre familiars de persones que han superat el tractament.",
      },
      {
        id: "com-donar-suport",
        title: "Com donar suport",
        content: [
          "El pacient en fase post-tractament necessita suport en la integració de l'experiència viscuda: pot néixer la necessitat de parlar de la malaltia, o tot el contrari, de no parlar-ne.",
          "Respecta el ritme de recuperació. No pressionis cap a 'tornar a ser el de sempre' ni cap a 'deixar enrere' allò que s'ha viscut.",
          "Estratègia útil: continua preguntant com es sent en comptes d'assumir que ja tot va bé. La recuperació emocional és un procés, no un punt d'arribada.",
        ],
      },
      {
        id: "les-teves-necessitats",
        title: "Les teves pròpies necessitats",
        content: [
          "El familiar pot viure un alliberament d'adrenalina i caure en un cansament profund que no havia pogut sentir mentre estava en 'mode crisi'. És molt freqüent.",
          "Aquest és un bon moment per recuperar espais propis que havien quedat en suspens: relacions, hobbies, projectes. No és abandó: és necessitat.",
          "Si l'ansietat anticipatòria (por als controls, als símptomes) és persistent i interfereix en la teva vida, busca suport professional. És un problema freqüent i tractable.",
        ],
      },
      {
        id: "recursos",
        title: "Recursos i suport",
        content: [
          "Grups de suport per a familiars 'supervivents': compartir l'experiència post-tractament amb altres que l'han viscut és molt valuós.",
          "Serveis de psicologia per a familiars: molts hospitals i associacions oncològiques ofereixen suport post-tractament.",
          "Recursos d'autoajuda guiada: llibres, apps i programes de mindfulness adaptats a la situació post-oncòlogica.",
        ],
      },
    ],
  },
  {
    slug: "fase-avancada",
    title: "Fase Avançada",
    shortTitle: "Fase avançada",
    subtitle: "Acompanyar fins al final",
    description:
      "La fase avançada o de final de vida és la més intensa emocionalment. La família afronta el dol anticipat, decisions molt complexes i la necessitat d'un acompanyament profund que sovint no saben com oferir.",
    colorVar: "advanced",
    stats: [
      { label: "No van rebre orientació emocional inicial", value: 66.7 },
      { label: "Van sentir necessitat de suport professional", value: 66.7 },
      { label: "Consideren la por i la incertesa com a prioritat", value: 100 },
      { label: "La comunicació amb el pacient és clau", value: 80 },
    ],
    mainChallenges: [
      "Alt nivell de malestar emocional sostingut",
      "Dol anticipat i preparació per a la pèrdua",
      "Decisions mèdiques i ètiques complexes",
      "Relacions familiars sota pressió",
      "Autocura deficient per sobrecàrrega de rols",
    ],
    sections: [
      {
        id: "comprendre",
        title: "Comprendre el procés",
        content: [
          "La fase avançada implica que el tractament ja no té objectiu curatiu sinó pal·liatiu: controlar el dolor, preservar la qualitat de vida i acompanyar el pacient amb dignitat.",
          "Les cures pal·liatives son un sistema de suport integral que ajuda tant al pacient com a la família. No son 'rendir-se': son una forma de cura activa i compassiva.",
          "El deteriorament físic pot ser progressiu i dolorós de presenciar. Saber-ho per endavant, entendre la seva trajectòria, pot reduir el descontrol i l'angúnia del familiar.",
        ],
        tip: "Demana un professional de cures pal·liatives. Existeixen equips especialitzats que treballen amb la família, no només amb el pacient.",
      },
      {
        id: "impacte-emocional",
        title: "Impacte emocional",
        content: [
          "El dol anticipat és la vivència de la pèrdua abans que aquesta es produeixi. És una resposta normal, no una senyal de debilitat ni de 'ja haver renunciat'.",
          "El 100% dels familiars en fase avançada consideren que saber afrontar la por i la incertesa és la necessitat més urgent. Aquesta por inclou la por a la mort, al sofriment i a la pròpia incapacitat d'acompanyar bé.",
          "Sentiments ambivalents —voler que s'acabi per alleujar el sofriment, i alhora no voler perdre la persona— son completament normals i molt freqüents. No indiquen manca d'amor.",
        ],
        tip: "El dol anticipat és una forma d'amor. Permetre't sentir-lo no accelera res: t'ajuda a acompanyar millor.",
      },
      {
        id: "com-donar-suport",
        title: "Com donar suport",
        content: [
          "En fase avançada, la presència val més que les paraules. Estar al costat, tenir contacte físic si el pacient ho vol, és profundament significatiu.",
          "Parlar de la mort, si el pacient ho desitja, és un regal. Molts pacients volen parlar-ne però esperen que el familiar prengui la iniciativa. Si no saps com, comença per preguntar: 'Hi ha alguna cosa que vulguis parlar o que necessitis que jo sàpiga?'",
          "Ajuda en les cures diàries: higiene, alimentació, medicació. No has de ser professional: els equips pal·liatius t'ensenyaran. No has de fer-ho sol.",
        ],
      },
      {
        id: "les-teves-necessitats",
        title: "Les teves pròpies necessitats",
        content: [
          "En fase avançada, la sobrecàrrega del cuidador és molt alta. L'autocura deficient és un patró documentat en aquesta fase. No és un defecte teu: és el resultat de donar-ho tot sense rebre prou suport.",
          "Delega. Accepta ajuda. Permet que altres membres de la família o de l'entorn participin en les cures. No has de ser l'únic punt de suport.",
          "Busca suport psicològic ara, no quan tot hagi passat. El dol anticipat es treballa millor mentre s'està vivint que després.",
        ],
        tip: "Demanar ajuda és l'acte de cura més valent que pots fer en aquest moment.",
      },
      {
        id: "recursos",
        title: "Recursos i suport",
        content: [
          "Equips de cures pal·liatives domiciliàries: disponibles a través dels hospitals i CAPs de referència.",
          "Serveis de psicologia per a familiars en dol anticipat: contacta amb associacions oncologiques de la teva zona.",
          "Grups de suport per a familiars en fase avançada i de dol: l'Associació Maresme Oncològic i la AECC en disposen.",
          "Línia de suport emocional AECC: 900 100 036 (gratuïta, 24h).",
        ],
      },
    ],
  },
];

export function getPhase(slug: string): Phase | undefined {
  return phases.find((p) => p.slug === slug);
}
