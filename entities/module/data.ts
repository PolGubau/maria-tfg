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
  {
    slug: "comprendre-proces",
    title: "Comprendre el procés oncològic",
    subtitle: "Saber què passa per poder acompanyar millor",
    description:
      "Entendre el tractament, els seus efectes i el paper del familiar en cada fase del procés oncològic és fonamental per reduir la incertesa i poder estar present d'una manera útil.",
    relatedPhases: ["tractament", "post-tractament", "fase-avancada"],
    readingTime: 10,
    sections: [
      {
        id: "fase-tractament",
        title: "La fase de tractament",
        content: [
          "El tractament oncològic pot incloure quimioteràpia, radioteràpia, cirurgia, immunoteràpia o teràpies dirigides, sovint en combinació. Cada modalitat actua de manera diferent i genera efectes secundaris específics: fatiga intensa, nàusees, caiguda del cabell, alteracions digestives o major susceptibilitat a infeccions.",
          "Com a familiar, no cal que et converteixis en un expert mèdic. Sí que és important tenir una comprensió general del pla de tractament, les seves fases i el que es pot esperar en termes de canvis físics i emocionals en el pacient.",
          "Els efectes secundaris no son permanents en la majoria dels casos. Saber-ho pot ajudar tant al pacient com al familiar a travessar els moments més difícils amb una perspectiva de futur.",
        ],
        techniques: [
          {
            id: "preguntes-equip",
            title: "Com comunicar-se amb l'equip mèdic",
            description:
              "Aprofitar les visites mèdiques per resoldre dubtes és essencial. Molts familiars surten de les consultes amb més preguntes que respostes perquè no saben com preguntar.",
            steps: [
              "Porta un quadern i anota les preguntes entre visites",
              "Demana explicacions en paraules senzilles quan no entenguis alguna cosa",
              "Pregunta sobre els efectes secundaris esperats i com gestionar-los",
              "Consulta quins senyals d'alarma requereixen atenció immediata",
              "Sol·licita informació sobre recursos de suport per a familiars",
            ],
          },
        ],
      },
      {
        id: "fase-post-tractament",
        title: "La finalització del tractament",
        content: [
          "Acabar el tractament no significa tornar immediatament a la vida anterior. Per al pacient, pot ser un moment de gran incertesa: desapareix l'estructura de les visites regulars i pot sorgir la por a la recaiguda.",
          "Per al familiar, pot ser un moment de confusió: l'entorn espera que tot torni a la normalitat, però la realitat emocional és molt diferent. Molts familiars descriuen la finalització del tractament com un dels moments emocionalment més complexos.",
          "Els efectes residuals del tractament (fatiga, alteracions cognitives, canvis hormonals) poden persistir durant mesos. Ajudar el pacient a gestionar les expectatives d'aquesta nova normalitat és una tasca important per al familiar.",
        ],
      },
      {
        id: "fase-avancada",
        title: "La fase avançada i el final de vida",
        content: [
          "La fase avançada implica que la malaltia no respon al tractament curatiu. L'objectiu canvia: en comptes de curar, l'atenció es centra en maximitzar la qualitat de vida i minimitzar el patiment (cures pal·liatives).",
          "Les cures pal·liatives no son un abandonament: son una forma d'atenció integral que aborda el dolor físic, l'acompanyament emocional, les necessitats espirituals i el suport a la família. Es poden iniciar molt abans del final de vida.",
          "El deteriorament físic progressiu és una de les realitats més difícils d'acompanyar. Saber que hi ha equips especialitzats en pal·liatius que poden guiar-te és un recurs fonamental en aquesta etapa.",
        ],
      },
    ],
  },
  {
    slug: "por-incertesa",
    title: "Afrontar la por i la incertesa",
    subtitle: "Aprendre a viure amb allò que no podem controlar",
    description:
      "La por és una de les emocions més presents al llarg del procés oncològic. Entendre-la, posar-li nom i aprendre estratègies per conviure-hi és fonamental per al benestar del familiar.",
    relatedPhases: ["tractament", "post-tractament", "fase-avancada"],
    readingTime: 9,
    sections: [
      {
        id: "que-es-la-por",
        title: "Entendre la por i la incertesa",
        content: [
          "La por és una resposta natural i adaptativa davant d'una situació percebuda com a amenaçant. En el context oncològic, és completament esperada i present en gairebé tots els familiars. Un 87,5% dels participants en fase de tractament la van identificar com la seva principal dificultat.",
          "La incertesa -no saber com evolucionarà la malaltia, quin serà el pronòstic, com es sentirà el pacient demà- és un dels aspectes més difícils de gestionar. Vivim en una cultura que valora el control, però hi ha aspectes que simplement no podem controlar.",
          "L'ansietat anticipatòria és la forma que pren la por quan ens projectem cap a escenaris futurs negatius. La ment intenta 'preparar-se' per a les pitjors situacions, cosa que sovint genera més patiment que els fets en si.",
        ],
      },
      {
        id: "por-per-fase",
        title: "La por en cada fase",
        content: [
          "En la fase de tractament, la por se centra principalment en el pronòstic: sobreviurà? Respon bé al tractament? Quant de temps tenim?",
          "En la fase de finalització del tractament, la por es desplaça cap a la recaiguda. El 73,9% dels familiars en aquesta etapa identifiquen la incertesa com a tema central. Paradoxalment, molts familiars se senten pitjor quan acaba el tractament que durant ell.",
          "En la fase avançada, la por té a veure amb la mort: com serà? Patirà? Podré estar present? Podré suportar-ho? Totes son pors legítimes que mereixen atenció i acompanyament.",
        ],
      },
      {
        id: "estrategies-por",
        title: "Estratègies per conviure amb la por",
        content: [
          "No es tracta d'eliminar la por, sinó d'aprendre a conviure-hi sense que paralitzi el dia a dia. Algunes estratègies que l'evidència científica ha mostrat eficaces:",
        ],
        techniques: [
          {
            id: "ancoratge-present",
            title: "Ancoratge al moment present",
            description:
              "Quan la ment s'escapa cap a escenaris futurs negatius, tornar al present interromp el cicle d'ansietat anticipatòria. No es tracta de negar el futur, sinó de recordar que ara, en aquest moment, estem bé.",
            steps: [
              "Quan sents que l'ansietat augmenta, para't un moment",
              "Nomena en veu alta o mentalment 5 coses que pots veure",
              "Identifica 4 coses que pots tocar",
              "Escolta 3 sons al teu voltant",
              "Torna a la respiració: fes 3 respiracions profundes i lentes",
              "Pregunta't: 'Ara mateix, en aquest moment, estic bé?'",
            ],
          },
          {
            id: "escriure-pors",
            title: "Posar nom a les pors",
            description:
              "Escriure les pors les fa menys difuses i manejables. Quan la por és un núvol vague, és molt més intensa que quan la podem descriure concretament.",
            steps: [
              "Agafa un paper i escriu: 'Ara mateix tinc por de...'",
              "Escriu totes les pors sense censurar-te",
              "Subratlla les que depenen de tu i les que no",
              "Per les que no depenen de tu, pregunta't: 'Puc fer alguna cosa ara?'",
              "Si no pots fer res, practica acceptar que és fora del teu control",
              "Per les que sí depenen de tu, identifica un petit pas que puguis fer avui",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "acceptacio-adaptacio",
    title: "Acceptació i adaptació",
    subtitle: "Trobar l'equilibri en una nova realitat",
    description:
      "Cada fase del procés oncològic exigeix una adaptació diferent. Comprendre el procés d'acceptació i disposar d'estratègies pràctiques per adaptar-se ajuda a mantenir el benestar al llarg del temps.",
    relatedPhases: ["tractament", "post-tractament", "fase-avancada"],
    readingTime: 8,
    sections: [
      {
        id: "que-es-acceptacio",
        title: "Acceptació no és resignació",
        content: [
          "Acceptar no significa estar d'acord amb el que passa, ni deixar de lluitar, ni sentir-se bé amb la situació. Acceptar significa reconèixer la realitat tal com és, sense negar-la ni lluitar constantment contra allò que no es pot canviar.",
          "La resistència a la realitat -voler que les coses siguin com eren, negar el que s'està vivint- consumeix una enorme quantitat d'energia emocional. L'acceptació permet dirigir aquesta energia cap a allò que sí es pot fer.",
          "L'acceptació és un procés, no un estat fix. No es dona una vegada per sempre: pot fluctuar cada dia, cada setmana. Alguns dies s'accepta millor, d'altres menys. Això és completament normal.",
        ],
      },
      {
        id: "adaptacio-per-fase",
        title: "Adaptació en cada etapa",
        content: [
          "En la fase de tractament, l'adaptació consisteix a integrar la malaltia a la vida quotidiana sense que ho ocupi tot. Mantenir algunes rutines, activitats i espais propis és fonamental per a la salut emocional del familiar.",
          "En la fase de finalització del tractament, l'adaptació implica construir una nova normalitat. Ni la vida d'abans ni la del tractament: una nova manera de viure que integri el que s'ha viscut i miri cap endavant amb realisme i esperança.",
          "En la fase avançada, l'adaptació inclou el que s'anomena dol anticipat: un procés de dol que comença abans de la pèrdua i que és completament legítim. Permetre's viure aquest dol és una forma de cura i d'amor.",
        ],
        techniques: [
          {
            id: "rutines-ancoratge",
            title: "Rutines d'ancoratge personal",
            description:
              "Mantenir algunes rutines pròpies -independents de la malaltia- ajuda a preservar la identitat del familiar més enllà del seu rol de cuidador. No és egoisme: és salut.",
            steps: [
              "Identifica 2 o 3 activitats que et siguin significatives i que puguis mantenir",
              "Programa-les a la teva agenda amb la mateixa seriositat que les cites mèdiques",
              "Si t'apareix la culpa, recorda't: cuidar-te és cuidar millor",
              "Comparteix si cal amb l'entorn que necesites aquest temps",
              "Avalua setmanalment si les estàs mantenint i ajusta si cal",
            ],
          },
        ],
      },
      {
        id: "dol-anticipat",
        title: "El dol anticipat",
        content: [
          "El dol anticipat és el procés de dol que s'inicia quan s'anticipa una pèrdua. Pot manifestar-se com tristesa profunda, anhel, ràbia, sensació de buit o necessitat de distanciar-se emocionalment.",
          "Viure el dol anticipat no accelera la mort ni implica voler que arribi. És una resposta natural de l'ésser humà davant la perspectiva de perdre algú estimat.",
          "Permetre's viure aquest dol -buscant suport professional si cal- és una forma de preparació emocional que, paradoxalment, pot ajudar a estar més present en els últims moments.",
        ],
      },
    ],
  },
  {
    slug: "acompanyament",
    title: "Acompanyament a la persona afectada",
    subtitle: "Estar present sense perdre't a tu mateix",
    description:
      "Saber com acompanyar el pacient de manera efectiva és una habilitat que s'aprèn. L'escolta activa, la comunicació empàtica i saber quan i com parlar de temes difícils son competències que fan la diferència.",
    relatedPhases: ["tractament", "post-tractament", "fase-avancada"],
    readingTime: 10,
    sections: [
      {
        id: "suport-emocional",
        title: "Com donar suport emocional",
        content: [
          "El 87,5% dels participants considera que saber com donar suport a la persona afectada és un dels temes prioritaris. Però molt sovint no sabem com fer-ho bé: tenim por de dir alguna cosa incorrecta, d'empitjorar la situació o de no estar a l'alçada.",
          "El suport emocional no consisteix a tenir les respostes correctes, ni a animar sempre, ni a evitar les emocions difícils. Consisteix a estar present, escoltar de veritat i permetre que l'altra persona senti el que senti sense jutjar-la.",
          "Cada fase del procés requereix un tipus d'acompanyament diferent. Durant el tractament, el pacient pot necessitar acompanyament actiu. En la finalització, pot necessitar espai per processar. En la fase avançada, la presència tranquil·la i el contacte físic poden ser més importants que qualsevol paraula.",
        ],
        techniques: [
          {
            id: "escolta-activa",
            title: "Escolta activa",
            description:
              "L'escolta activa és la forma de comunicació més poderosa que existeix. No consisteix simplement a callar mentre l'altre parla: implica estar present de manera plena, sense pensar en el que respondràs, sense minimitzar, sense intentar 'arreglar'.",
            steps: [
              "Posa el mòbil a part i minimitza les distraccions",
              "Mira als ulls de la persona que parla",
              "No interrompis: deixa que acabi el seu pensament",
              "Reflecteix el que has escoltat: 'Sembla que t'estàs sentint...'",
              "Fes preguntes obertes: 'Com et trobes avui?' en comptes de 'Estàs bé?'",
              "Tolera el silenci: no cal omplir sempre l'espai amb paraules",
            ],
          },
        ],
      },
      {
        id: "comunicacio-dificil",
        title: "Com parlar de temes difícils",
        content: [
          "Parlar sobre la mort, el pronòstic, les últimes voluntats o el final de vida pot semblar un tabú. Però evitar-ho sovint genera més angoixa que abordar-ho amb cura i respecte.",
          "Algunes frases que ajuden: 'Vull entendre com et sents', 'Pots dir-me el que necessites de mi?', 'Estic aquí sigui el que sigui', 'No has de protegir-me dels teus sentiments'.",
          "Algunes frases que convé evitar: 'Sé fort', 'Segur que t'en sortiràs', 'Almenys...', 'Podria ser pitjor', 'No pensis en coses dolentes'. Aquestes frases, tot i ser bienintencionades, invaliden l'experiència de l'altra persona.",
        ],
      },
      {
        id: "limits-personals",
        title: "Els teus límits com a acompanyant",
        content: [
          "Acompanyar algú que sofreix és emocionalment esgotador. Reconèixer els teus propis límits no és abandonar el pacient: és garantir que pots seguir estant-hi de manera sostenible.",
          "Està bé dir 'avui no tinc recursos emocionals per parlar d'això'. Està bé demanar ajuda a un altre familiar o amic per compartir l'acompanyament. Està bé buscar suport professional per a tu.",
          "La cura emocional del cuidador és tant important com la del pacient. Un cuidador esgotat no pot donar el millor de si mateix.",
        ],
      },
    ],
  },
  {
    slug: "suport-social",
    title: "Suport social i familiar",
    subtitle: "No has de fer-ho sol",
    description:
      "El suport social és un dels factors protectors més importants davant el malestar emocional. Aprendre a demanar ajuda, comunicar les necessitats i mantenir els vincles socials és essencial per al benestar del familiar.",
    relatedPhases: ["tractament", "post-tractament", "fase-avancada"],
    readingTime: 7,
    sections: [
      {
        id: "importancia-suport",
        title: "Per què és important el suport social",
        content: [
          "El suport social és un dels factors protectors més poderosos davant el malestar psicològic. Les persones que compten amb una xarxa de suport sòlida presenten menys ansietat, depressió i sobrecàrrega emocional.",
          "Malgrat això, molts familiars tendeixen a aïllar-se: senten que els altres no entenen el que viuen, no volen ser una càrrega, o simplement no tenen energia per mantenir relacions socials.",
          "El risc de l'aïllament és que augmenta el malestar i redueix els recursos emocionals disponibles. Mantenir -encara que sigui mínimament- els vincles socials és una forma de protecció emocional.",
        ],
      },
      {
        id: "com-demanar-ajuda",
        title: "Com demanar ajuda de manera efectiva",
        content: [
          "Moltes persones volen ajudar però no saben com. Donar-los indicacions concretes és un regal per a tothom: redueix la teva càrrega i permet que ells se sentin útils.",
          "En comptes de dir 'digue'm si necessites alguna cosa' (oferta massa vaga que sovint no es materialitza), prova d'oferir o demanar coses concretes: 'Pots venir a casa meva dijous per dinar?', 'Pots acompanyar-me a la visita del metge?', 'Pots ocupar-te de... mentre jo descanso?'",
          "Acceptar ajuda no és debilitat ni dependència: és reconèixer que som éssers socials que necessitem dels altres, especialment en moments difícils.",
        ],
        techniques: [
          {
            id: "mapa-suport",
            title: "Crear el teu mapa de suport",
            description:
              "Visualitzar amb qui comptes i per a què pot ajudar-te a organitzar millor els recursos disponibles i a identificar buits.",
            steps: [
              "Agafa un paper i escriu el teu nom al centre",
              "Al voltant, escriu les persones en qui confies (família, amics, companys...)",
              "Per a cada persona, anota en què et podria ajudar concretament",
              "Identifica àrees on tens poca cobertura (companyia, ajuda pràctica, suport emocional)",
              "Pensa en qui podries incorporar o a qui podries demanar ajuda nova",
            ],
          },
        ],
      },
      {
        id: "grups-suport",
        title: "Grups de suport entre iguals",
        content: [
          "Els grups de suport per a familiars de persones amb càncer ofereixen un espai on compartir l'experiència amb persones que viuen situacions similars. Sovint, la comprensió que s'obté en un grup d'iguals és diferent -i complementària- a la que ofereix la teràpia individual.",
          "Compartir l'experiència amb altres familiars pot ajudar a sentir-se menys sol, obtenir recursos pràctics de persones que han passat per situacions similars i trobar models de resiliència que inspirin.",
          "Moltes associacions oncològiques ofereixen grups de suport gratuïts, tant presencials com online. A la secció de recursos trobaràs informació sobre com accedir-hi.",
        ],
      },
    ],
  },
  {
    slug: "recursos-suport",
    title: "Recursos de suport",
    subtitle: "Ajuda professional i associativa al teu abast",
    description:
      "Existeixen recursos especialitzats per acompanyar els familiars de persones amb càncer. Conèixer-los i saber com accedir-hi és un pas important per no afrontar la situació en solitari.",
    relatedPhases: ["tractament", "post-tractament", "fase-avancada"],
    readingTime: 6,
    sections: [
      {
        id: "suport-professional",
        title: "Suport psicològic professional",
        content: [
          "El 61,7% dels familiars enquestats va expressar la necessitat de rebre suport professional en algun moment del procés oncològic. Buscar ajuda psicològica és un acte de valentia i de cura pròpia.",
          "La psicologia oncològica és una especialitat que s'ocupa específicament del benestar emocional de pacients i familiars en el context del càncer. Un psicòleg oncòleg pot ajudar-te a gestionar l'ansietat, la por, el dol anticipat i la sobrecàrrega emocional.",
          "No cal esperar a estar en crisi per demanar ajuda. La intervenció preventiva és molt més eficaç que l'atenció en moments de desbordament.",
        ],
        resources: [
          {
            name: "Línia d'ajuda AECC",
            description: "Atenció emocional gratuïta les 24h, tots els dies de l'any.",
            type: "helpline",
            phone: "900 100 036",
            website: "https://www.aecc.es",
          },
          {
            name: "Associació Maresme Oncològic",
            description: "Suport psicoeducatiu i acompanyament emocional per a familiars de persones amb càncer a la comarca del Maresme.",
            type: "association",
            website: "https://maresmeoncologic.org",
          },
        ],
      },
      {
        id: "associacions",
        title: "Associacions i entitats de suport",
        content: [
          "Diverses associacions ofereixen serveis gratuïts o de baix cost per a familiars de persones amb càncer: grups de suport, tallers, assessorament social i acompanyament emocional.",
          "Molts hospitals disposen d'unitats d'atenció psicosocial o treballadors socials que poden orientar-te sobre els recursos disponibles en el teu territori.",
        ],
        resources: [
          {
            name: "Associació Espanyola Contra el Càncer (AECC)",
            description: "Programes de suport per a pacients i familiars a nivell estatal, amb delegacions a tot el país.",
            type: "association",
            website: "https://www.aecc.es",
          },
          {
            name: "Lliga contra el Càncer (Catalunya)",
            description: "Suport psicosocial, grups d'ajuda mútua i recursos per a familiars a Catalunya.",
            type: "association",
            website: "https://www.lligacontraelcancer.cat",
          },
          {
            name: "American Cancer Society (recurs internacional)",
            description: "Guies completes i recursos per a cuidadors familiars, disponibles en línia.",
            type: "service",
            website: "https://www.cancer.org",
          },
        ],
      },
      {
        id: "grups-iguals",
        title: "Grups d'ajuda mútua",
        content: [
          "Els grups d'ajuda mútua son espais on familiars que viuen situacions similars es troben per compartir experiències, estratègies i suport emocional entre iguals.",
          "La particularitat d'aquests grups és que el suport ve de persones que realment entenen el que estàs vivint perquè ho han viscut o ho estan vivint. Això els fa especialment valuosos.",
          "Per trobar un grup prop teu, pots contactar amb les associacions de la secció anterior o preguntar al treballador social del teu hospital de referència.",
        ],
      },
    ],
  },
];

export function getModule(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}
