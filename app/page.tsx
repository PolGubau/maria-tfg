import { BookOpen, Clock } from "lucide-react";
import Link from "next/link";
import { modules } from "~/entities/module/data";
import { phases } from "~/entities/phase/data";
import { Badge } from "~/shared/ui/badge";
import { buttonVariants } from "~/shared/ui/button";
import { Reveal } from "~/shared/ui/reveal";



const keyStats = [
  {
    value: "~6 de cada 10",
    label:
      "familiars no van rebre orientació emocional en el moment del diagnòstic",
  },
  {
    value: "75%",
    label: "van sentir la necessitat de suport psicològic durant el tractament",
  },
  {
    value: "100%",
    label:
      "dels participants consideren que una guia per a familiars seria molt útil",
  },
  {
    value: "47",
    label: "familiars van participar en la recerca que fonamenta aquesta guia",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[60svh] pb-40 flex flex-col overflow-hidden"
        style={{ background: "oklch(93% 0.022 72)" }}
      >
        {/* Drifting blob — warm light source, top-right */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden
        >
          <div
            style={{
              position: "absolute",
              top: "-20%",
              right: "-15%",
              width: "70vmax",
              height: "70vmax",
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse at center, oklch(88% 0.09 72 / 0.55) 0%, oklch(90% 0.06 75 / 0.3) 40%, transparent 70%)",
              filter: "blur(60px)",
              animation: "blob-drift 20s ease-in-out infinite",
              willChange: "transform",
            }}
          />
        </div>

        {/* Canvas fade at bottom — ensures text legibility */}
        <div
          className="absolute bottom-0 left-0 right-0 h-3/4 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, oklch(98.2% 0.005 80) 55%, transparent)",
          }}
        />

        {/* Content – anchored bottom-left */}
        <div className="relative z-10 mt-auto max-w-6xl mx-auto w-full px-6 pb-28 pt-40">
          <div className="max-w-xl">
            {/* 1 — context (smallest, first in) */}
            <Reveal delay={0} direction="fade">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-muted mb-8">
                Guia psicoeducativa per a familiars · 47 participants
              </p>
            </Reveal>

            {/* 2 — main message */}
            <Reveal delay={120}>
              <h1 className="font-display text-5xl md:text-6xl lg:text-8xl font-light text-ink leading-none mb-8 tracking-tighter">
                <span>
                  Cuidar sense
                </span>
                <br />
                <em className="text-accent font-bold not-italic">perdre&apos;s</em>
              </h1>
            </Reveal>

            {/* 3 — supporting copy */}
            <Reveal delay={280}>
              <p className="text-lg text-ink-muted leading-relaxed mb-10 max-w-md">
                Quan un familiar rep un diagnòstic de càncer, els que l&apos;envolten
                solen centrar-se en el pacient i obliden les seves pròpies
                necessitats.
                <br />
                Aquesta guia és per a tu.
              </p>
            </Reveal>

            {/* 4 — action (last, highest delay) */}
            <Reveal delay={440}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/guides"
                  className={buttonVariants({ variant: "primary", size: "lg" })}
                >
                  Explora les guies <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/thesis"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  La recerca
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <Reveal delay={0} direction="fade">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-muted mb-12">
              Per què és necessària
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {keyStats.map((stat, i) => (
              <Reveal key={stat.value} delay={i * 100} className="flex flex-col gap-3">
                <p className="font-display text-4xl font-light italic text-ink leading-none">
                  {stat.value}
                </p>
                <p className="text-sm text-ink-muted leading-relaxed max-w-[18ch]">
                  {stat.label}
                </p>
              </Reveal>
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
          {phases.map((phase, idx) => {
            const badgeVariant = (phase.colorVar as "treatment" | "post" | "advanced") ?? "muted";
            return (
              <Reveal key={phase.slug} delay={idx * 100}>
                <Link
                  href={`/phases/${phase.slug}`}
                  className="group relative border border-border rounded-xl p-6 bg-canvas hover:border-ink/20 hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <main>
                    <span className="absolute -top-2 -left-2 w-8 h-8 rounded-full border border-border bg-canvas flex items-center justify-center text-xs text-ink">
                      {idx + 1}
                    </span>
                    <Badge variant={badgeVariant} className="mb-4">
                      {phase.shortTitle}
                    </Badge>
                    <h3 className="text-lg font-semibold text-ink mb-2">
                      {phase.subtitle}
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed mb-5">
                      {phase.description}
                    </p>
                  </main>
                  <footer>

                    <span className="text-sm font-medium text-ink group-hover:text-accent transition-colors">
                      Explorar fase →
                    </span>
                  </footer>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
      <section className="border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                Eines pràctiques
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink">
                Mòduls pràctics
              </h2>
              <p className="mt-3 text-ink-muted leading-relaxed max-w-xl">
                Exercicis guiats, tècniques de regulació emocional i estratègies basades en evidència per aplicar al dia a dia.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((mod, i) => (
              <Reveal key={mod.slug} delay={i * 80}>
                <Link
                  href={`/modules/${mod.slug}`}
                  className="group flex flex-col justify-between p-6 bg-canvas border border-border rounded-xl hover:border-accent/40 hover:shadow-md transition-all h-full"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <BookOpen className="w-5 h-5 text-accent" strokeWidth={1.8} />
                    </div>
                    <p className="font-semibold text-ink leading-snug mb-2 group-hover:text-accent transition-colors">
                      {mod.title}
                    </p>
                    <p className="text-sm text-ink-muted leading-relaxed">
                      {mod.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
                    <div className="flex items-center gap-1.5 text-xs text-ink-muted">
                      <Clock className="w-3.5 h-3.5" />
                      {mod.readingTime} min de lectura
                    </div>
                    <span className="text-xs font-medium text-accent group-hover:underline">
                      Veure mòdul →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
