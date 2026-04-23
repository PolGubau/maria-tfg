import Link from "next/link";
import type { Phase } from "~/entities/phase/types";
import { Badge } from "~/shared/ui/badge";

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

interface Props {
  phase: Phase;
}

export function PhaseCard({ phase }: Props) {
  const accentClass = phaseAccent[phase.colorVar] ?? "border-border hover:border-ink/30";
  const dotClass = phaseDot[phase.colorVar] ?? "bg-ink-muted";
  const num = phaseNumber[phase.slug] ?? "";

  return (
    <Link
      href={`/phases/${phase.slug}`}
      className={`group flex flex-col justify-between p-8 bg-canvas border-2 rounded-xl transition-all duration-200 hover:shadow-md ${accentClass}`}
    >
      <div>
        <div className="flex items-start justify-between mb-6">
          <span className="font-display text-4xl font-light text-ink/15 italic select-none">
            {num}
          </span>
          <span className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 ${dotClass}`} aria-hidden />
        </div>
        <Badge variant={phase.colorVar as "treatment" | "post" | "advanced"} className="mb-3">
          {phase.shortTitle}
        </Badge>
        <h2 className="text-xl font-semibold text-ink mb-2 leading-snug">
          {phase.title}
        </h2>
        <p className="text-sm text-ink-muted mb-4 italic">{phase.subtitle}</p>
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
}
