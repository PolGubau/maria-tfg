import fs from "fs";
import path from "path";

export interface ChartItem {
  name: string;
  value: number;
}

export interface SurveyStats {
  total: number;
  phaseDistribution: ChartItem[];
  receivedOrientation: ChartItem[];
  supportRating: ChartItem[];
  neededHelp: ChartItem[];
  resourcesAccessible: ChartItem[];
  topicsRequested: ChartItem[];
}

const KNOWN_TOPICS: Record<string, string> = {
  "Com gestionar les emocions i l'estrès": "Gestió emocional i estrès",
  "Como gestionar las emociones": "Gestió emocional i estrès",
  "Com comunicar-se amb la persona afectada": "Comunicació amb el pacient",
  "Como comunicarse con la persona afectada": "Comunicació amb el pacient",
  "Com comunicar-se amb els professionals sanitaris":
    "Comunicació amb professionals",
  "Com donar suport a la persona afectada": "Com donar suport",
  "Como dar apoyo a la persona afectada": "Com donar suport",
  "Com afrontar la por, la tristesa o la incertesa": "Por, tristesa i incertesa",
  "Como afrontar el miedo": "Por, tristesa i incertesa",
  "Autocura i benestar del cuidador/a": "Autocura del cuidador/a",
  "Signes d'alerta de sobrecàrrega emocional": "Signes de sobrecàrrega",
  "Signos de alerta de sobrecarga emocional": "Signes de sobrecàrrega",
  "Recursos de suport (psicològic i/o social)": "Recursos de suport",
  "Recursos de apoyo (psicológico y/o social)": "Recursos de suport",
  "Que la guia inclogui exercicis o activitats pràctiques":
    "Exercicis pràctics",
};

const PHASE_LABELS: Record<string, string> = {
  "Controls posteriors a la superació de la malaltia": "Seguiment post-càncer",
  "Recuperació total de la malaltia": "Recuperació total",
  "Malaltia no superada": "Malaltia activa",
  "Fase avançada / Final de vida / Cures pal·liatives": "Fase avançada",
  Tractament: "En tractament",
  "Pre-diagnòstic / Fase de proves per a possible diagnòstic": "Pre-diagnòstic",
};

function parseCSV(content: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < content.length; i++) {
    const ch = content[i];
    const next = content[i + 1];

    if (ch === '"') {
      if (inQuotes && next === '"') {
        field += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      row.push(field.trim());
      field = "";
    } else if ((ch === "\n" || ch === "\r") && !inQuotes) {
      if (ch === "\r" && next === "\n") i++;
      row.push(field.trim());
      if (row.some((f) => f.length > 0)) rows.push(row);
      row = [];
      field = "";
    } else {
      field += ch;
    }
  }

  if (row.length) {
    row.push(field.trim());
    rows.push(row);
  }

  return rows;
}

function count(items: string[]): ChartItem[] {
  const map: Record<string, number> = {};
  for (const item of items) {
    const key = item.trim() || "No especificat";
    map[key] = (map[key] || 0) + 1;
  }
  return Object.entries(map)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
}

export function getSurveyStats(): SurveyStats {
  const filePath = path.join(process.cwd(), "docs", "data.csv");
  const content = fs.readFileSync(filePath, "utf-8");
  const rows = parseCSV(content);
  const data = rows.slice(1); // skip header

  const phases: string[] = [];
  const orientations: string[] = [];
  const ratings: string[] = [];
  const neededHelp: string[] = [];
  const accessible: string[] = [];
  const topicCounts: Record<string, number> = {};

  for (const row of data) {
    // col 4: phase
    const rawPhase = row[4]?.trim() ?? "";
    phases.push(PHASE_LABELS[rawPhase] ?? rawPhase);

    // col 5: received orientation
    const ori = row[5]?.trim() ?? "";
    if (ori.includes("professionals de la salut"))
      orientations.push("Professionals de salut");
    else if (ori.includes("altres persones") || ori.includes("entitats"))
      orientations.push("Altres persones/entitats");
    else orientations.push("No");

    // col 7: support rating
    const rating = row[7]?.trim() ?? "";
    if (rating) ratings.push(`${rating} estrella${rating === "1" ? "" : "s"}`);

    // col 9: needed professional help
    const help = row[9]?.trim() ?? "";
    neededHelp.push(help === "Sí" ? "Sí" : "No");

    // col 10: resources accessible
    const acc = row[10]?.trim() ?? "";
    accessible.push(acc === "Sí" ? "Sí" : acc === "No" ? "No" : "N/A");

    // col 14: topics
    const topicsField = row[14] ?? "";
    for (const [key, label] of Object.entries(KNOWN_TOPICS)) {
      if (topicsField.includes(key)) {
        topicCounts[label] = (topicCounts[label] || 0) + 1;
      }
    }
  }

  const topicsRequested = Object.entries(topicCounts)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);

  return {
    total: data.length,
    phaseDistribution: count(phases),
    receivedOrientation: count(orientations),
    supportRating: count(ratings),
    neededHelp: count(neededHelp),
    resourcesAccessible: count(accessible),
    topicsRequested,
  };
}
