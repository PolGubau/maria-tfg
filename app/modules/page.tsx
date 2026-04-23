import type { Metadata } from "next";
import { modules } from "~/entities/module/data";
import { ModuleCard } from "~/features/modules/module-card";

export const metadata: Metadata = {
  title: "Mòduls psicoeducatius · Cuidar sense perdre's",
  description:
    "Tots els mòduls pràctics per acompanyar familiars de persones amb càncer: gestió emocional, por, acceptació, comunicació i suport social.",
};

export default function ModulesPage() {
  return (
    <div>
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-5">
            Mòduls psicoeducatius
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-ink mb-4 leading-tight">
            Eines pràctiques per a cuidadors
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">
            Cada mòdul tracta una àrea clau de l&apos;experiència del familiar.
            Pots llegir-los en qualsevol ordre o seguir la seqüència proposada.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map((mod) => (
            <ModuleCard key={mod.slug} mod={mod} />
          ))}
        </div>
      </div>
    </div>
  );
}
