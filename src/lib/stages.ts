export type Lang = "pl" | "en";
export type Stage = 1 | 2;

export function stageHref(base: string, lang: Lang, stage: Stage): string {
  return `${base}${lang}/${stage === 2 ? (lang === "pl" ? "etap-2/" : "stage-2/") : ""}`;
}

export function stagePeriod(lang: Lang, stage: Stage): string {
  if (lang === "pl") return stage === 1 ? "1.12.2025 — 30.11.2026" : "1.12.2026 — 30.11.2027";
  return stage === 1 ? "Dec 1, 2025 — Nov 30, 2026" : "Dec 1, 2026 — Nov 30, 2027";
}
