import { phases } from "~/entities/phase/data";
import { Badge } from "~/shared/ui/badge";
import { buttonVariants } from "~/shared/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guies per fase",
  description:
    "Selecciona la fase del procés oncològic on et trobes per accedir a la guia d'acompanyament corresponent.",
};

const phaseAccent: Record<string, string> = {
  treatment: "border-treatment/40 hover:border-treatment",
  post: "border-post/40 hover:border-post",
  advanced: "border-advanced/40 hover:border-advanced",
};

const phaseDot: Record<string, string> = {
  treatment: "bg-treatment",
  post: "bg-post",
  advanced: "bg-advanced",
};

const phaseNumber: Record<string, string> = {
  tractament: "01",
  "post-tractament": "02",
  "fase-avancada": "03",
};

export default function GuidesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-4">
          Guies d&apos;acompanyament
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-ink mb-4 leading-tight">
          En quina fase us trobeu?
        </h1>
        <p className="text-ink-muted leading-relaxed text-lg">
          Cada etapa del procés oncològic té les seves pròpies necessitats i
          reptes. Selecciona la fase per accedir a la guia específica.
        </p>
      </div>

      {/* Phase cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {phases.map((phase) => {
          const accentClass = phaseAccent[phase.colorVar] ?? "border-border hover:border-ink/30";
          const dotClass = phaseDot[phase.colorVar] ?? "bg-ink-muted";
          const num = phaseNumber[phase.slug] ?? "";

          return (
            <Link
              key={phase.slug}
              href={`/phases/${phase.slug}`}
              className={`group flex flex-col justify-between p-8 bg-canvas border-2 rounded-xl transition-all duration-200 hover:shadow-md ${accentClass}`}
            >
              <div>
                <div className="flex items-start justify-between mb-6">
                  <span className="font-display text-4xl font-light text-ink/15 italic select-none">
                    {num}
                  </span>
                  <span
                    className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 ${dotClass}`}
                    aria-hidden
                  />
                </div>
                <Badge
                  variant={phase.colorVar as "treatment" | "post" | "advanced"}
                  className="mb-3"
                >
                  {phase.shortTitle}
                </Badge>
                <h2 className="text-xl font-semibold text-ink mb-2 leading-snug">
                  {phase.title}
                </h2>
                <p className="text-sm text-ink-muted mb-4 italic">
                  {phase.subtitle}
                </p>
                <p className="text-sm text-ink-muted leading-relaxed line-clamp-3">
                  {phase.description}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-ink-muted group-hover:text-ink transition-colors">
                <span>Veure la guia</span>
                <span className="translate-x-0 group-hover:translate-x-1 transition-transform" aria-hidden>
                  →
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Footer note */}
      <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-ink-muted max-w-md">
          Podeu canviar de guia en qualsevol moment. Cada una és independent i
          complementària.
        </p>
        <Link
          href="/thesis"
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          La recerca darrere les guies →
        </Link>
      </div>
    </div>
  );
}
