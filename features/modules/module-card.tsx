"use client";

import Link from "next/link";
import { BookOpen, Clock, CheckCircle2 } from "lucide-react";
import type { Module } from "~/entities/module/types";
import { hasContent } from "~/entities/module/data";
import { useModuleProgress } from "~/shared/lib/use-module-progress";

interface Props {
  mod: Module;
}

export function ModuleCard({ mod }: Props) {
  const { isRead, hydrated } = useModuleProgress();
  const read = hydrated && isRead(mod.slug);
  const available = hasContent(mod);

  const inner = (
    <>
      <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${available ? "bg-accent/10" : "bg-border"}`}>
        <BookOpen className={`w-5 h-5 ${available ? "text-accent" : "text-ink-muted/40"}`} strokeWidth={1.8} />
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold leading-snug ${available ? "text-ink group-hover:text-accent transition-colors" : "text-ink-muted/60"}`}>
          {mod.title}
        </p>
        <p className="text-xs text-ink-muted/60 mt-1 leading-relaxed line-clamp-2">
          {mod.subtitle}
        </p>
        <div className="flex items-center gap-2 mt-2 text-xs text-ink-muted/50">
          {available ? (
            <>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {mod.readingTime} min
              </span>
              {read && (
                <span className="flex items-center gap-1 text-post font-medium">
                  <CheckCircle2 className="w-3 h-3" />
                  Llegit
                </span>
              )}
            </>
          ) : (
            <span className="italic">Properament</span>
          )}
        </div>
      </div>
      <span className={`shrink-0 mt-1 ${available ? "text-ink-muted group-hover:text-accent transition-colors" : "text-ink-muted/30"}`}>
        {available ? "→" : "—"}
      </span>
    </>
  );

  if (!available) {
    return (
      <div className="flex gap-4 items-start p-5 bg-canvas border border-border rounded-xl opacity-50 cursor-not-allowed">
        {inner}
      </div>
    );
  }

  return (
    <Link
      href={`/modules/${mod.slug}`}
      className="group flex gap-4 items-start p-5 bg-canvas border border-border rounded-xl hover:border-accent/40 hover:shadow-sm transition-all"
    >
      {inner}
    </Link>
  );
}
