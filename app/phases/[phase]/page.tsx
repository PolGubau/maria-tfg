import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getPhase, phases } from "@/entities/phase/data";
import { PhaseSectionNav } from "@/features/phases/phase-section-nav";

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

const phaseColors: Record<string, { badge: string; bar: string }> = {
  treatment: {
    badge: "bg-treatment-bg border-treatment-border text-treatment",
    bar: "bg-treatment",
  },
  post: {
    badge: "bg-post-bg border-post-border text-post",
    bar: "bg-post",
  },
  advanced: {
    badge: "bg-advanced-bg border-advanced-border text-advanced",
    bar: "bg-advanced",
  },
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

  const colors = phaseColors[phase.colorVar] ?? {
    badge: "bg-surface border-border text-ink-muted",
    bar: "bg-ink-muted",
  };

  const otherPhases = phases.filter((p) =>
    (otherPhasesLabel[slug] ?? []).includes(p.slug)
  );

  return (
    <div>
      {/* Phase header */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className={`inline-flex px-2.5 py-1 rounded-md text-xs font-semibold mb-4 border ${colors.badge}`}>
            {phase.shortTitle}
          </div>
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
                    className={`h-full rounded-full ${colors.bar}`}
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
                  {section.content.map((para, i) => (
                    <p key={i} className="text-ink-muted leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
                {section.tip && (
                  <div className="mt-6 p-4 bg-accent-light border-l-4 border-accent rounded-r-lg">
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
                {phase.mainChallenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${colors.bar}`} />
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
