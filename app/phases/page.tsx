import type { Metadata } from "next";
import Link from "next/link";
import { phases } from "~/entities/phase/data";
import { modules } from "~/entities/module/data";
import { PhaseCard } from "~/features/phases/phase-card";
import { ModuleCard } from "~/features/modules/module-card";
import { buttonVariants } from "~/shared/ui/button";

export const metadata: Metadata = {
  title: "Guies per fase",
  description:
    "Selecciona la fase del procés oncològic on et trobes per accedir a la guia d'acompanyament corresponent.",
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

      {/* Visual module index */}
      <div className="mt-20">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">
            Índex de mòduls
          </p>
          <h2 className="text-2xl font-semibold text-ink mb-3">
            Tots els mòduls psicoeducatius
          </h2>
          <p className="text-ink-muted leading-relaxed">
            Cada mòdul és accessible des de qualsevol fase. Pots llegir-los en
            l&apos;ordre que més t&apos;interessi o seguir la seqüència proposada.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map((mod) => (
            <ModuleCard key={mod.slug} mod={mod} />
          ))}
        </div>
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
