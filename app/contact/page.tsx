import type { Metadata } from "next";
import { buttonVariants } from "~/shared/ui/button";

export const metadata: Metadata = {
  title: "Contacte",
  description:
    "Posa't en contacte per a preguntes sobre la recerca, col·laboracions o feedback sobre la guia.",
};

const faqs = [
  {
    q: "Puc compartir la guia amb un familiar o professional?",
    a: "Sí, la guia és de lliure accés. Et demanem que en facis ús respectuós i que citis la font si la uses en un context professional o acadèmic.",
  },
  {
    q: "Soc professional de la salut. Puc col·laborar?",
    a: "Molt bé! La guia va néixer d'una col·laboració amb una psicòloga oncòloga. Contacta'm i explica'm la teva proposta.",
  },
  {
    q: "Tinc feedback sobre el contingut de la guia.",
    a: "El feedback és molt valuós per millorar la guia en futures versions. Explica'm el que has trobat a faltar o el que milloraries.",
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-5">
            Contacte
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-ink mb-4 leading-tight">
            Tens preguntes o vols col·laborar?
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">
            Siguis familiar, professional de la salut o investigador/a, pots
            posar-te en contacte per a qualsevol consulta sobre la recerca o la
            guia.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14 space-y-16">
        {/* Contact card */}
        <section className="bg-surface border border-border rounded-xl p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-4">
            Escriu-me directament
          </p>
          <p className="text-ink-muted leading-relaxed mb-6">
            Pots enviar-me un correu electrònic per a qualsevol consulta:
            preguntes sobre la recerca, propostes de col·laboració, feedback
            sobre la guia o simplement per compartir la teva experiència.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="mailto:mariaroges15@gmail.com?subject=Contacte%20Guia%20Psicoeducativa&body=Hola%20Maria%2C%0A%0A"
              className={buttonVariants({ variant: "primary" })}
            >
              ✉ Enviar correu
            </a>
            <span className="text-sm text-ink-muted font-mono select-all">
              mariaroges15@gmail.com
            </span>
          </div>
        </section>

        {/* Citation */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-6">
            Com citar aquesta web
          </p>
          <div className="border border-border rounded-xl p-6 bg-canvas space-y-4">
            <p className="text-sm text-ink-muted leading-relaxed">
              Si uses aquesta guia o les seves dades en un treball acadèmic o professional, pots citar-la en format <strong className="text-ink">APA 7</strong>:
            </p>
            <div className="bg-surface rounded-lg px-5 py-4 border border-border">
              <p className="text-sm font-mono text-ink leading-relaxed select-all cursor-text">
                Rogés, M. (2026). <em>Cuidar sense perdre&apos;s: Guia psicoeducativa per a familiars de persones amb càncer</em>. https://tfg-maria.vercel.app/
              </p>
            </div>
            <p className="text-xs text-ink-muted">
              Fes clic al text per seleccionar-lo tot i copiar-lo directament al teu treball.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-6">
            Preguntes freqüents
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="border border-border rounded-xl p-6 bg-canvas"
              >
                <p className="text-sm font-semibold text-ink mb-2">{faq.q}</p>
                <p className="text-sm text-ink-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
