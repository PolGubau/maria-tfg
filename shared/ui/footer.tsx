import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="text-sm font-medium text-ink mb-2">
              Cuidar sense perdre&apos;s
            </p>
            <p className="text-sm text-ink-muted leading-relaxed">
              Guia psicoeducativa per a familiars de persones amb càncer.
              Basada en recerca real amb 47 familiars.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">
              Fases
            </p>
            <ul className="space-y-2">
              {[
                { href: "/phases/tractament", label: "Fase de tractament" },
                {
                  href: "/phases/post-tractament",
                  label: "Finalització del tractament",
                },
                { href: "/phases/fase-avancada", label: "Fase avançada" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-ink-muted hover:text-ink transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">
              Recerca
            </p>
            <ul className="space-y-2">
              {[
                { href: "/data", label: "Dades de l'enquesta" },
                { href: "/thesis", label: "La recerca completa" },
                { href: "/resources", label: "Recursos de suport" },
                { href: "/contact", label: "Contacte" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-ink-muted hover:text-ink transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-ink-muted">
            Treball de Fi de Grau en Psicologia · UAB · 2026
          </p>

        </div>
      </div>
    </footer>
  );
}
