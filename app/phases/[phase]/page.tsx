import { Clock, Lightbulb } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { modules } from "~/entities/module/data";
import { getPhase, phases } from "~/entities/phase/data";
import { ModuleCard } from "~/features/modules/module-card";
import { PhaseSectionNav } from "~/features/phases/phase-section-nav";
import { ResourceCard } from "~/features/phases/resource-card";
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

const phaseBarClass: Record<string, string> = {
  treatment: "bg-treatment",
  post: "bg-post",
  advanced: "bg-advanced",
};

const otherPhasesLabel: Record<string, string[]> = {
  tractament: ["post-tractament", "fase-avancada"],
  "post-tractament": ["tractament", "fase-avancada"],
  "fase-avancada": ["tractament", "post-tractament"],
};

export default async function PhasePage({ params }: Props) {
  const { phase: slug } = await params;
  const phase = getPhase(slug);
  if (!phase) notFound();

  const barClass = phaseBarClass[phase.colorVar] ?? "bg-ink-muted";
  const badgeVariant = (phase.colorVar as "treatment" | "post" | "advanced") ?? "muted";

  const otherPhases = phases.filter((p) =>
    (otherPhasesLabel[slug] ?? []).includes(p.slug)
  );

  const relatedModules = modules.filter((m) => m.relatedPhases.includes(slug));

  return (
    <div>
      {/* Phase header */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Badge variant={badgeVariant} className="mb-4">
            {phase.shortTitle}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-semibold text-ink mb-3">
            {phase.title}
            <span className="block text-ink-muted font-normal text-2xl mt-1">
              {phase.subtitle}
            </span>
          </h1>
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
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-2xl font-semibold text-ink">
                    {stat.value}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-border rounded-full mb-2">
                  <div
                    className={`h-full rounded-full ${barClass}`}
                    style={{ width: `${stat.value}%` }}
                  />
                </div>
                <p className="text-xs text-ink-muted leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content layout */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex gap-16 items-start">
          <PhaseSectionNav sections={phase.sections} />

          <div className="flex-1 min-w-0 space-y-16">
            {phase.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-xl font-semibold text-ink mb-6 pb-4 border-b border-border">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((para) => (
                    <p key={para} className="text-ink-muted leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
                {section.resources && section.resources.length > 0 && (
                  <div className="mt-6 space-y-3">
                    {section.resources.map((resource) => (
                      <ResourceCard key={resource.name} resource={resource} />
                    ))}
                  </div>
                )}
                {section.tip && (
                  <div className="mt-6 p-4 bg-surface rounded-xl flex gap-3 items-start">
                    <div className="shrink-0 size-8 rounded-md bg-accent/15 flex items-center justify-center mt-0.5">
                      <Lightbulb className="w-4 h-4 text-accent" strokeWidth={1.8} />
                    </div>
                    <p className="text-sm text-ink leading-relaxed">
                      <span className="font-semibold">Consell pràctic: </span>
                      {section.tip}
                    </p>
                  </div>
                )}
              </section>
            ))}

            {/* Challenges */}
            <section className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-ink mb-6 pb-4 border-b border-border">
                Principals reptes d&apos;aquesta fase
              </h2>
              <ul className="space-y-3">
                {phase.mainChallenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-3">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${barClass}`} />
                    <span className="text-ink-muted text-sm leading-relaxed">
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* Related modules */}
      {relatedModules.length > 0 && (
        <div className="border-t border-border bg-accent/5">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">
                  Eines pràctiques
                </p>
                <h2 className="text-lg font-semibold text-ink">
                  Mòduls pràctics relacionats
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedModules.map((mod) => (
                <Link
                  key={mod.slug}
                  href={`/modules/${mod.slug}`}
                  className="group flex gap-4 items-start p-5 bg-canvas border border-border rounded-xl hover:border-accent/40 hover:shadow-sm transition-all"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-accent" strokeWidth={1.8} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-ink leading-snug group-hover:text-accent transition-colors">
                      {mod.title}
                    </p>
                    <p className="text-xs text-ink-muted mt-1 leading-relaxed line-clamp-2">
                      {mod.subtitle}
                    </p>
                    <div className="flex items-center gap-1 mt-2 text-xs text-ink-muted">
                      <Clock className="w-3 h-3" />
                      {mod.readingTime} min
                    </div>
                  </div>
                  <span className="text-ink-muted group-hover:text-accent transition-colors shrink-0 mt-1">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Other phases */}
      {otherPhases.length > 0 && (
        <div className="border-t border-border bg-surface">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-6">
              Altres fases
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherPhases.map((p) => (
                <Link
                  key={p.slug}
                  href={`/phases/${p.slug}`}
                  className="flex items-center justify-between p-4 bg-canvas border border-border rounded-lg hover:border-ink/20 hover:shadow-sm transition-all group"
                >
                  <div>
                    <p className="text-sm font-medium text-ink">{p.title}</p>
                    <p className="text-xs text-ink-muted">{p.subtitle}</p>
                  </div>
                  <span className="text-ink-muted group-hover:text-accent transition-colors">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
