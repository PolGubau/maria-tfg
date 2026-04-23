import type { Metadata } from "next";
import Link from "next/link";
import { phases } from "~/entities/phase/data";
import { PhaseCard } from "~/features/phases/phase-card";
import { buttonVariants } from "~/shared/ui/button";

export const metadata: Metadata = {
  title: "Guies per fase",
  description:
    "Selecciona la fase del proce's oncolo`gic on et trobes per accedir a la guia d'acompanyament corresponent.",
};

export default function GuidesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-4">
          {"Guies d'acompanyament"}
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-ink mb-4 leading-tight">
          En quina fase us trobeu?
        </h1>
        <p className="text-ink-muted leading-relaxed text-lg">
          Cada etapa del proce's oncolo`gic te' les seves pro`pies necessitats i
          reptes. Selecciona la fase per accedir a la guia espec&iacute;fica.
        </p>
      </div>

      {/* Phase cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {phases.map((phase) => (
          <PhaseCard key={phase.slug} phase={phase} />
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-ink-muted max-w-md">
          Podeu canviar de guia en qualsevol moment. Cada una e's independent i
          complementa`ria.
        </p>
        <Link
          href="/thesis"
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          {"La recerca darrere les guies ->"}
        </Link>
      </div>
    </div>
  );
}
