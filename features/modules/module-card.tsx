import Link from "next/link";
import { BookOpen, Clock } from "lucide-react";
import type { Module } from "~/entities/module/types";

interface Props {
  mod: Module;
}

export function ModuleCard({ mod }: Props) {
  return (
    <Link
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
  );
}
