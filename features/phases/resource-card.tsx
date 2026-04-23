import type { ResourceItem } from "~/entities/phase/types";
import { Phone, Building2, Stethoscope, Users, Smartphone, ExternalLink } from "lucide-react";

const typeConfig: Record<
  ResourceItem["type"],
  { icon: React.ElementType; label: string; color: string; bg: string }
> = {
  helpline: {
    icon: Phone,
    label: "Línia d'ajuda",
    color: "text-treatment",
    bg: "bg-treatment/10",
  },
  association: {
    icon: Building2,
    label: "Associació",
    color: "text-post",
    bg: "bg-post/10",
  },
  service: {
    icon: Stethoscope,
    label: "Servei",
    color: "text-advanced",
    bg: "bg-advanced/10",
  },
  group: {
    icon: Users,
    label: "Grup de suport",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  app: {
    icon: Smartphone,
    label: "App / Recurs digital",
    color: "text-ink-muted",
    bg: "bg-surface",
  },
};

interface ResourceCardProps {
  resource: ResourceItem;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const config = typeConfig[resource.type];
  const Icon = config.icon;

  return (
    <div className="flex items-start gap-4 p-4 bg-canvas border border-border rounded-xl hover:border-ink/15 hover:shadow-sm transition-all">
      {/* Icon */}
      <div className={`shrink-0 w-10 h-10 rounded-lg ${config.bg} flex items-center justify-center`}>
        <Icon className={`w-5 h-5 ${config.color}`} strokeWidth={1.8} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className={`text-xs font-medium uppercase tracking-wider ${config.color}`}>
            {config.label}
          </span>
        </div>
        <p className="text-sm font-semibold text-ink leading-snug">{resource.name}</p>
        <p className="text-xs text-ink-muted leading-relaxed mt-1">{resource.description}</p>
      </div>

      {/* Actions */}
      <div className="shrink-0 flex flex-col gap-2 items-end">
        {resource.phone && (
          <a
            href={`tel:${resource.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-treatment text-canvas text-xs font-semibold rounded-full hover:opacity-90 active:scale-95 transition-all"
          >
            <Phone className="w-3.5 h-3.5" strokeWidth={2.5} />
            {resource.phone}
          </a>
        )}
        {resource.website && (
          <a
            href={resource.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 border border-border text-ink-muted text-xs font-medium rounded-full hover:border-ink/20 hover:text-ink transition-all"
          >
            <ExternalLink className="w-3 h-3" />
            Web
          </a>
        )}
      </div>
    </div>
  );
}
