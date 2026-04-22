import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Parse survey CSV text into array of record objects */
export function parseCsv(text: string): Record<string, string>[] {
  const lines = text.split("\n").filter((l) => l.trim());
  // First two lines are header (split across lines in the CSV)
  const headerLine = lines[0] + " " + lines[1];
  const headers = parseRow(headerLine);
  const rows: Record<string, string>[] = [];
  for (let i = 2; i < lines.length; i++) {
    const values = parseRow(lines[i]);
    if (values.length < 3) continue;
    const record: Record<string, string> = {};
    headers.forEach((h, idx) => {
      record[h.trim()] = (values[idx] ?? "").trim();
    });
    rows.push(record);
  }
  return rows;
}

function parseRow(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  result.push(current);
  return result;
}
