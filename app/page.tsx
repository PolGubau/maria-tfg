import { BookOpen, Clock } from "lucide-react";
import Link from "next/link";
import { modules } from "~/entities/module/data";
import { phases } from "~/entities/phase/data";
import { Badge } from "~/shared/ui/badge";
import { buttonVariants } from "~/shared/ui/button";
import { Reveal } from "~/shared/ui/reveal";

// Three window-pane clusters — gaps simulate the window frame
const sunRays = [
  // Pane 1 (top cluster)
  { angle: 5, thickness: 220, dur: "18s", delay: "0s", opacity: 0.52 },
  { angle: 14, thickness: 90, dur: "22s", delay: "1.2s", opacity: 0.38 },
  { angle: 22, thickness: 180, dur: "16s", delay: "3.5s", opacity: 0.48 },
  // gap ~8° = window bar
  // Pane 2 (mid cluster)
  { angle: 32, thickness: 240, dur: "20s", delay: "0.8s", opacity: 0.55 },
  { angle: 41, thickness: 100, dur: "24s", delay: "2.6s", opacity: 0.4 },
  { angle: 50, thickness: 200, dur: "17s", delay: "4.2s", opacity: 0.5 },
  // gap ~10° = window bar
  // Pane 3 (lower cluster)
  { angle: 62, thickness: 260, dur: "21s", delay: "1.5s", opacity: 0.45 },
  { angle: 72, thickness: 110, dur: "19s", delay: "0.4s", opacity: 0.35 },
  { angle: 81, thickness: 190, dur: "23s", delay: "3.0s", opacity: 0.42 },
];

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
        className="relative min-h-[100svh] flex flex-col overflow-hidden"
        style={{ background: "oklch(93% 0.022 72)" }}
      >
        {/* Warm glow — light source origin */}
        <div
          className="absolute pointer-events-none hidden"
          aria-hidden
          style={{}}
        />

        {/* Sun rays — fan from top-right */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden
          style={{ mixBlendMode: "screen" }}
        >
          {sunRays.map((ray, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: "-10%",
                right: "-6%",
                width: "300vw",
                height: `${ray.thickness}px`,
                transformOrigin: "top right",
                transform: `rotate(${ray.angle}deg)`,
                background: `linear-gradient(to left, oklch(97% 0.06 78 / ${ray.opacity}), transparent 65%)`,
                animation: `ray-shimmer ${ray.dur} ${ray.delay} infinite ease-in-out`,
              }}
            />
          ))}
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
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-muted mb-8">
              Guia psicoeducativa per a familiars · 47 participants
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-ink leading-[1.05] mb-8 tracking-tight">
              Cuidar sense
              <br />
              <em className="not-italic text-accent font-medium">perdre&apos;s</em>
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed mb-10 max-w-md">
              Quan un familiar rep un diagnòstic de càncer, els que l&apos;envolten
              solen centrar-se en el pacient —i obliden les seves pròpies
              necessitats. Aquesta guia és per a tu.
            </p>
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
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-muted mb-12">
            Per què és necessària
          </p>
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
