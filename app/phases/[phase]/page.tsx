import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { modules } from "~/entities/module/data";
import { getPhase, phases } from "~/entities/phase/data";
import { ModuleCard } from "~/features/modules/module-card";
import { Badge } from "~/shared/ui/badge";

interface Props {
  params: Promise<{ phase: string }>;
}

export async function generateStaticParams() {
  return phases.map((p) => ({ phase: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { phase: slug } = await params;
  const phase = getPhase(slug);
  if (!phase) return {};
  return {
    title: phase.title,
    description: phase.description,
  };
}

// Maps guide section IDs to module slugs
const sectionModules: Record<string, string[]> = {
  "introduccio": ["introduccio"],
  "comprendre-proces": ["comprendre-proces"],
  "impacte-emocional": ["impacte-emocional"],
  "acompanyament": ["acompanyament"],
  "suport-social": ["suport-social"],
  "recursos": ["recursos-suport"],
};

export default async function PhasePage({ params }: Props) {
  const { phase: slug } = await params;
  const phase = getPhase(slug);
  if (!phase) notFound();

  return (
    <div>
      {/* Guide header */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Badge variant="accent" className="mb-4">
            {phase.shortTitle}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-semibold text-ink mb-2 leading-tight">
            {phase.title}
          </h1>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-4">
            {phase.subtitle}
          </p>
          <p className="text-ink-muted leading-relaxed max-w-2xl mt-4">
            {phase.description}
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {phase.stats.map((stat) => (
              <div key={stat.label}>
                <span className="text-2xl font-semibold text-ink">
                  {stat.value}%
                </span>
                <div className="w-full h-1.5 bg-border rounded-full my-2">
                  <div
                    className="h-full rounded-full bg-treatment"
                    style={{ width: `${stat.value}%` }}
                  />
                </div>
                <p className="text-xs text-ink-muted leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Guide index */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-2">
            Índex de la guia
          </p>
          <h2 className="text-2xl font-semibold text-ink">
            Continguts psicoeducatius
          </h2>
        </div>

        {phase.sections.map((section, i) => {
          const slugsForSection = sectionModules[section.id] ?? [];
          const sectionModuleItems = modules.filter((m) =>
            slugsForSection.includes(m.slug)
          );

          return (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <div className="flex items-baseline gap-4 mb-6 pb-4 border-b border-border">
                <span className="text-3xl font-semibold text-ink-muted/30 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold text-ink">{section.title}</h3>
              </div>

              {sectionModuleItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sectionModuleItems.map((mod) => (
                    <ModuleCard key={mod.slug} mod={mod} />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-ink-muted italic">
                  Contingut en desenvolupament.
                </p>
              )}
            </section>
          );
        })}

        {/* Footer note */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-ink-muted max-w-md">
            La guia s&apos;anirà completant progressivament. Els mòduls disponibles ja es poden consultar.
          </p>
          <Link
            href="/thesis"
            className="text-sm text-ink-muted hover:text-ink transition-colors"
          >
            La recerca darrere la guia →
          </Link>
        </div>
      </div>
    </div>
  );
}
