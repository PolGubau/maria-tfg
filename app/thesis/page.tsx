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
    detail:
      "La investigació combina l'anàlisi de necessitats amb el disseny d'un producte pràctic (la guia psicoeducativa), seguint el model de recerca aplicada en psicologia clínica.",
  },
  {
    label: "Instrument",
    value: "Qüestionari ad hoc de 15 ítems (Likert, resposta múltiple i oberta)",
    detail:
      "El qüestionari es va dissenyar específicament per a aquesta recerca, amb validació per part d'una psicòloga oncòloga col·laboradora. Inclou escales Likert, preguntes de resposta múltiple i preguntes obertes per capturar l'experiència qualitativa.",
  },
  {
    label: "Mostra",
    value: "47 participants – familiars i persones properes a pacients amb càncer",
    detail:
      "Mostreig per conveniència amb difusió a través de xarxes socials i associacions oncològiques. Participants en diverses fases: tractament actiu, finalització del tractament i fase avançada.",
  },
  {
    label: "Recollida",
    value: "Desembre 2025 – Febrer 2026 (plataforma Google Forms)",
    detail: "Recollida anònima i voluntària. Temps mitjà de resposta: 12 minuts.",
  },
  {
    label: "Anàlisi quantitativa",
    value: "Estadística descriptiva: freqüències i percentatges per variable",
    detail:
      "Les dades tancades es van analitzar amb estadística descriptiva bàsica (freqüències, percentatges, mesures de tendència central) per identificar patrons generals i diferències per fase.",
  },
  {
    label: "Anàlisi qualitativa",
    value: "Codificació inductiva de respostes obertes",
    detail:
      "Les respostes obertes es van analitzar mitjançant codificació inductiva: lectura flotant, identificació de categories emergents i agrupació temàtica. Procés supervisat per la tutora del TFG.",
  },
  {
    label: "Col·laboració professional",
    value: "Psicòloga oncòloga col·laboradora en el disseny de la guia",
    detail:
      "El contingut de la guia psicoeducativa va ser revisat i validat per una psicòloga especialitzada en oncologia, garantint el rigor clínic de les recomanacions.",
  },
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
              <div key={m.label} className="px-6 py-5">
                <div className="flex gap-4">
                  <span className="text-sm font-semibold text-ink w-40 shrink-0">
                    {m.label}
                  </span>
                  <span className="text-sm text-ink leading-relaxed">
                    {m.value}
                  </span>
                </div>
                {m.detail && (
                  <p className="text-xs text-ink-muted leading-relaxed mt-2 ml-44">
                    {m.detail}
                  </p>
                )}
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
        <section className="bg-accent-light rounded-xl p-8">
           
          <h3 className="text-xl font-semibold text-ink mb-3">
            Tens preguntes sobre la recerca?
          </h3>
          <p className="text-ink-muted leading-relaxed mb-5 max-w-lg">
            Si ets professional de la salut, investigador/a o simplement vols
            saber més sobre el projecte, pots contactar-me directament.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className={buttonVariants({ variant: "primary" })}>
              Contactar →
            </Link>
            <Link href="/data" className={buttonVariants({ variant: "secondary" })}>
              Explorar les dades
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
