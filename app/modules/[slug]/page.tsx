import { getModule, modules } from "~/entities/module/data";
import { TechniqueCard } from "~/features/modules/technique-card";
import { Badge } from "~/shared/ui/badge";
import { buttonVariants } from "~/shared/ui/button";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mod = getModule(slug);
  if (!mod) return {};
  return { title: mod.title, description: mod.description };
}

export default async function ModulePage({ params }: Props) {
  const { slug } = await params;
  const mod = getModule(slug);
  if (!mod) notFound();

  return (
    <div>
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-2 mb-5">
            <Badge variant="accent">Mòdul pràctic</Badge>
            <Badge variant="muted">{mod.readingTime} min de lectura</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-ink mb-3">
            {mod.title}
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">
            {mod.subtitle}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {mod.relatedPhases.map((phase) => (
              <Link
                key={phase}
                href={`/phases/${phase}`}
                className={buttonVariants({ variant: "ghost", size: "sm", className: "border border-border" })}
              >
                ↗ {phase.replace("-", " ")}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-surface rounded-xl p-6 border border-border">
          <p className="text-ink-muted leading-relaxed">{mod.description}</p>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-4xl mx-auto px-6 pb-20 space-y-16">
        {mod.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-ink mb-6 pb-4 border-b border-border">
              {section.title}
            </h2>

            <div className="space-y-4 mb-8">
              {section.content.map((para) => (
                <p key={para} className="text-ink-muted leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {section.techniques && section.techniques.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-4">
                  Estratègies pràctiques
                </p>
                <div className="space-y-3">
                  {section.techniques.map((technique) => (
                    <TechniqueCard
                      key={technique.id}
                      technique={technique}
                      isBreathing={technique.id === "respiracio"}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>
        ))}

        {/* CTA */}
        <div className="border-t border-border pt-12">
          <div className="bg-accent-light rounded-xl p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Necessites més suport?
            </p>
            <h3 className="text-xl font-semibold text-ink mb-3">
              Busca ajuda professional
            </h3>
            <p className="text-ink-muted leading-relaxed mb-6 max-w-md mx-auto">
              Aquestes tècniques son un complement, no un substitut del suport
              psicològic professional. Si el malestar és persistent, consulta un
              professional especialitzat.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/thesis" className={buttonVariants({ variant: "primary" })}>
                Llegir la recerca
              </Link>
              <Link href="/data" className={buttonVariants({ variant: "secondary" })}>
                Veure dades de l&apos;enquesta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
