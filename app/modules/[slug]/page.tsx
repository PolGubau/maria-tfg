import { getModule, modules } from "~/entities/module/data";
import { TechniqueCard } from "~/features/modules/technique-card";
import { Badge } from "~/shared/ui/badge";
import { buttonVariants } from "~/shared/ui/button";
import { MarkAsRead } from "~/shared/ui/mark-as-read";
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
      <MarkAsRead slug={slug} />
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-2 mb-5">
            <Link href="/modules" className={buttonVariants({ variant: "ghost", size: "sm", className: "border border-border" })}>
              ← Tots els mòduls
            </Link>
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
      </header>

      {/* Body: TOC sidebar + content */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-14 lg:items-start">

          {/* TOC - sticky sidebar */}
          <aside className="hidden lg:block sticky top-24 self-start">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink-muted mb-4">
              Contingut
            </p>
            <nav className="flex flex-col gap-1">
              {mod.sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="group flex items-start gap-2.5 py-1.5 text-sm text-ink-muted hover:text-ink transition-colors"
                >
                  <span className="mt-0.5 shrink-0 text-[10px] font-semibold text-ink-muted/50 group-hover:text-accent transition-colors tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-snug">{s.title}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="space-y-16">
            {/* Intro */}
            <div className="bg-surface rounded-xl p-6 border border-border">
              <p className="text-ink-muted leading-relaxed">{mod.description}</p>
            </div>

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
                          isSenses={technique.id === "ancoratge-present"}
                          isSupportMap={technique.id === "mapa-suport"}
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
                  <Link href="/autocura" className={buttonVariants({ variant: "primary" })}>
                    Fer el test d&apos;autocura
                  </Link>
                  <Link href="/thesis" className={buttonVariants({ variant: "secondary" })}>
                    Llegir la recerca
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
