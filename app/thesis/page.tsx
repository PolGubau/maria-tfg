import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "~/shared/ui/button";

export const metadata: Metadata = {
  title: "La recerca · Cuidar sense perdre's",
  description:
    "Treball de Fi de Grau sobre el benestar psicològic dels familiars de persones amb càncer.",
};

const findings = [
  {
    stat: "~60%",
    finding:
      "dels familiars no van rebre cap orientació emocional en el moment del diagnòstic.",
  },
  {
    stat: "75%",
    finding:
      "van manifestar la necessitat de rebre suport psicològic professional en algun moment del procés.",
  },
  {
    stat: "100%",
    finding:
      "dels 47 participants considera que una guia psicoeducativa per a familiars seria útil o molt útil.",
  },
  {
    stat: "47",
    finding:
      "familiars i persones pròximes a pacients van participar a l'enquesta, en diverses fases del procés oncològic.",
  },
];

const methodology = [
  {
    label: "Disseny",
    value: "Estudi descriptiu transversal de tipus C amb producte",
  },
  {
    label: "Instrument",
    value:
      "Qüestionari ad hoc de 15 ítems (Likert, resposta múltiple i oberta)",
  },
  {
    label: "Mostra",
    value:
      "47 participants - familiars i persones properes a pacients amb càncer",
  },
  {
    label: "Recollida",
    value: "Desembre 2025 – Febrer 2026 (plataforma Google Forms)",
  },
  { label: "Anàlisi", value: "Descriptiva: frequencies, percentajes i temàtica" },
];

const themes = [
  "Gestió de les emocions i l'estrès",
  "Comunicació amb el pacient i l'equip mèdic",
  "Suport al pacient sense perdre el benestar propi",
  "Afrontament de la por, la tristesa i la incertesa",
  "Autocura del cuidador/a familiar",
  "Signes d'alerta de sobrecàrrega emocional",
  "Recursos de suport psicològic i social",
];

export default function ThesisPage() {
  return (
    <div>
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-5">
            Treball de Fi de Grau en Psicologia · 2026
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-ink mb-4 leading-tight">
            Cuidar sense perdre&apos;s: guia psicoeducativa per a familiars de
            persones amb càncer
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">
            Investigació sobre les necessitats psicoemocionals dels cuidadors
            familiars al llarg del procés oncològic, amb producte pràctic
            associat: aquesta guia.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/thesis.pdf" className={buttonVariants({ variant: "primary" })}>
              ↓ Descarrega el TFG (PDF)
            </a>
            <Link href="/data" className={buttonVariants({ variant: "secondary" })}>
              Veure dades de l&apos;enquesta
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14 space-y-16">
        {/* Abstract */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-4">
            Resum
          </p>
          <div className="prose max-w-none">
            <p className="text-ink-muted leading-relaxed mb-4">
              Els familiars de persones amb càncer afronten un procés complex i
              emocionalment intens que afecta totes les esferes de la seva vida.
              Malgrat el seu rol imprescindible com a suport del pacient, sovint
              reben poca atenció psicoeducativa per part del sistema sanitari.
            </p>
            <p className="text-ink-muted leading-relaxed">
              Aquesta recerca analitza les necessitats i experiències de 47
              familiars a través d&apos;un qüestionari ad hoc, identifica les
              fases crítiques del procés oncològic i proposa una guia
              psicoeducativa estructurada per fases: tractament, finalització
              del tractament i fase avançada / final de vida.
            </p>
          </div>
        </section>

        {/* Key findings */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-6">
            Resultats principals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {findings.map((f) => (
              <div
                key={f.stat}
                className="border border-border rounded-xl p-6 bg-canvas"
              >
                <p className="text-3xl font-semibold text-accent mb-2">
                  {f.stat}
                </p>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {f.finding}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-6">
            Metodologia
          </p>
          <div className="bg-surface border border-border rounded-xl divide-y divide-border">
            {methodology.map((m) => (
              <div key={m.label} className="flex gap-4 px-6 py-4">
                <span className="text-sm font-semibold text-ink w-28 shrink-0">
                  {m.label}
                </span>
                <span className="text-sm text-ink-muted leading-relaxed">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Themes covered */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-6">
            Temàtica de la guia
          </p>
          <p className="text-sm text-ink-muted leading-relaxed mb-5">
            Els temes de la guia van sorgir directament de les necessitats
            expressades pels participants a l&apos;enquesta.
          </p>
          <ul className="space-y-2">
            {themes.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-sm text-ink-muted">{t}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA / Contact */}
        <section className="bg-accent-light border border-treatment-border rounded-xl p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Contacte
          </p>
          <h3 className="text-xl font-semibold text-ink mb-3">
            Tens preguntes sobre la recerca?
          </h3>
          <p className="text-ink-muted leading-relaxed mb-5 max-w-lg">
            Si ets professional de la salut, investigador/a o simplement vols
            saber més sobre el projecte, pots contactar-me directament.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/data" className={buttonVariants({ variant: "primary" })}>
              Explorar les dades
            </Link>
            <Link href="/phases/tractament" className={buttonVariants({ variant: "secondary" })}>
              Llegir la guia
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
