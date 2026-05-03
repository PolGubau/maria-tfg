import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "~/shared/ui/button";

export const metadata: Metadata = {
  title: "Recursos de suport",
  description:
    "Associacions, línies d'ajuda i serveis especialitzats per a familiars de persones amb càncer.",
};

interface ResourceItem {
  name: string;
  description: string;
  type: "helpline" | "association" | "service" | "online";
  phone?: string;
  website?: string;
  location?: string;
}

interface ResourceGroup {
  category: string;
  description: string;
  items: ResourceItem[];
}

const resourceGroups: ResourceGroup[] = [
  {
    category: "Línies d'ajuda",
    description: "Atenció immediata, gratuïta i confidencial.",
    items: [
      {
        name: "Línia d'ajuda AECC",
        description:
          "Atenció emocional gratuïta les 24 hores, tots els dies de l'any. Psicòlegs especialitzats en oncologia per a pacients i familiars.",
        type: "helpline",
        phone: "900 100 036",
        website: "https://www.aecc.es",
      }
    ],
  },
  {
    category: "Associacions especialitzades",
    description: "Entitats que ofereixen suport psicosocial, grups d'ajuda i recursos per a familiars.",
    items: [
      {
        name: "Associació Maresme Oncològic",
        description:
          "Suport psicoeducatiu i acompanyament emocional per a familiars de persones amb càncer a la comarca del Maresme. Grups d'ajuda mútua, tallers i atenció individual.",
        type: "association",
        website: "https://maresmeoncologic.org",
        location: "Mataró (Maresme)",
      },
      {
        name: "Associació Espanyola Contra el Càncer (AECC)",
        description:
          "Programes de suport per a pacients i familiars a nivell estatal. Grups de suport, servei de psicologia, assistència social i voluntariat.",
        type: "association",
        website: "https://www.aecc.es",
        location: "Tot l'estat",
      },
      {
        name: "Lliga Catalana Contra el Càncer",
        description:
          "Suport psicosocial, grups d'ajuda mútua i recursos específics per a familiars a Catalunya. Tallers de cura del cuidador.",
        type: "association",
        website: "https://www.lligacontraelcancer.cat",
        location: "Catalunya",
      },
    ],
  },
  {
    category: "Recursos en línia",
    description: "Guies, articles i comunitats accessibles des de casa.",
    items: [
      {
        name: "American Cancer Society - Caregivers",
        description:
          "Guies completes i recursos per a cuidadors familiars en anglès. Informació sobre autocura, comunicació i suport emocional.",
        type: "online",
        website: "https://www.cancer.org/cancer/caregivers.html",
      },
      {
        name: "Cancer Care - Support for Caregivers",
        description:
          "Grups de suport online gratuïts, articles i webinars per a familiars de persones amb càncer.",
        type: "online",
        website: "https://www.cancercare.org",
      },
    ],
  },
];

const typeLabels: Record<ResourceItem["type"], string> = {
  helpline: "Línia d'ajuda",
  association: "Associació",
  service: "Servei",
  online: "Recurs en línia",
};

const typeColors: Record<ResourceItem["type"], string> = {
  helpline: "bg-treatment-border text-treatment",
  association: "bg-accent-light text-accent",
  service: "bg-surface text-ink-muted",
  online: "bg-surface text-ink-muted",
};

export default function ResourcesPage() {
  return (
    <div>
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-5">
            Recursos de suport
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-ink mb-4 leading-tight">
            No has d&apos;afrontar-ho sol
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">
            Existeixen professionals, associacions i comunitats especialitzades
            per acompanyar els familiars de persones amb càncer. Aquí trobaràs
            els recursos més rellevants, organitzats per tipus.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14 space-y-14">
        {resourceGroups.map((group) => (
          <section key={group.category}>
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-2">
              {group.category}
            </p>
            <p className="text-sm text-ink-muted mb-6">{group.description}</p>
            <div className="space-y-4">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-canvas border border-border rounded-xl p-6"
                >
                  <div className="flex flex-wrap items-start gap-3 mb-3">
                    <h3 className="text-base font-semibold text-ink flex-1">
                      {item.name}
                    </h3>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${typeColors[item.type]}`}
                    >
                      {typeLabels[item.type]}
                    </span>
                  </div>
                  <p className="text-sm text-ink-muted leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-3 items-center">
                    {item.phone && (
                      <a
                        href={`tel:${item.phone}`}
                        className={buttonVariants({ variant: "primary", size: "sm" })}
                      >
                        ☎ {item.phone}
                      </a>
                    )}
                    {item.website && (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ variant: "secondary", size: "sm" })}
                      >
                        Visitar web →
                      </a>
                    )}
                    {item.location && (
                      <span className="text-xs text-ink-muted">
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="bg-accent-light border border-treatment-border rounded-xl p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Necessites més informació?
          </p>
          <h3 className="text-xl font-semibold text-ink mb-3">
            Posa&apos;t en contacte
          </h3>
          <p className="text-ink-muted leading-relaxed mb-5 max-w-lg">
            Si coneixes un recurs que podria ser útil per a altres familiars, o
            tens qualsevol consulta sobre la guia, escriu-me.
          </p>
          <Link href="/contact" className={buttonVariants({ variant: "primary" })}>
            Contactar →
          </Link>
        </section>
      </div>
    </div>
  );
}
