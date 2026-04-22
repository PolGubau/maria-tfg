import { phases } from "@/entities/phase/data";
import Link from "next/link";

const keyStats = [
  {
    value: "~6 de cada 10",
    label: "familiars no van rebre orientació emocional en el moment del diagnòstic",
  },
  {
    value: "75%",
    label: "van sentir la necessitat de suport psicològic durant el tractament",
  },
  {
    value: "100%",
    label: "dels participants consideren que una guia per a familiars seria molt útil",
  },
  {
    value: "47",
    label: "familiars van participar en la recerca que fonamenta aquesta guia",
  },
];

const phaseColorClasses: Record<string, string> = {
  treatment: "bg-treatment-bg border-treatment-border text-treatment",
  post: "bg-post-bg border-post-border text-post",
  advanced: "bg-advanced-bg border-advanced-border text-advanced",
};

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-6">
            Guia psicoeducativa per a familiars
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-ink leading-[1.1] mb-6">
            Cuidar sense
            <br />
            <span className="text-accent">perdre&apos;s</span>
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed mb-10 max-w-xl">
            Quan un familiar rep un diagnòstic de càncer, els que l&apos;envolten
            solen centrar-se en el pacient —i obliden les seves pròpies
            necessitats. Aquesta guia és per a tu.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/phases/tractament"
              className="inline-flex items-center px-5 py-2.5 bg-ink text-canvas text-sm font-medium rounded-lg hover:bg-accent transition-colors"
            >
              Explora la guia
            </Link>
            <Link
              href="/thesis"
              className="inline-flex items-center px-5 py-2.5 bg-surface text-ink text-sm font-medium rounded-lg hover:bg-surface-hover transition-colors"
            >
              Descarrega la recerca
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-10">
            Per què és necessària
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyStats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <p className="text-3xl font-semibold text-ink leading-none">
                  {stat.value}
                </p>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">
            Com funciona
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-ink">
            Adaptada a cada moment del procés
          </h2>
          <p className="mt-4 text-ink-muted leading-relaxed max-w-xl">
            Les necessitats emocionals canvien al llarg del procés oncologico.
            La guia s&apos;estructura en tres fases per reflectir aquesta realitat.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase) => {
            const cls =
              phaseColorClasses[phase.colorVar] ??
              "bg-surface border-border text-ink-muted";
            return (
              <Link
                key={phase.slug}
                href={`/phases/${phase.slug}`}
                className="group block border border-border rounded-xl p-6 bg-canvas hover:border-ink/20 hover:shadow-sm transition-all"
              >
                <div className={`inline-flex px-2.5 py-1 rounded-md text-xs font-semibold mb-4 border ${cls}`}>
                  {phase.shortTitle}
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">
                  {phase.subtitle}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed mb-5">
                  {phase.description}
                </p>
                <span className="text-sm font-medium text-ink group-hover:text-accent transition-colors">
                  Explorar fase →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Module highlight */}
      <section className="bg-accent-light border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div className="max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Mòdul pràctic
            </p>
            <h2 className="text-2xl font-semibold text-ink mb-3">
              Gestionar les pròpies emocions i l&apos;estrès
            </h2>
            <p className="text-ink-muted leading-relaxed">
              Respiració profunda, mindfulness, escriptura emocional i
              estratègies de relaxació. Eines pràctiques, basades en evidència.
            </p>
          </div>
          <Link
            href="/modules/emocions-estres"
            className="flex-shrink-0 inline-flex items-center px-5 py-2.5 bg-accent text-canvas text-sm font-medium rounded-lg hover:bg-ink transition-colors"
          >
            Veure mòdul
          </Link>
        </div>
      </section>
    </div>
  );
}
