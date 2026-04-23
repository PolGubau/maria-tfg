"use client";

import type { PhaseSection } from "~/entities/phase/types";
import { cn } from "~/shared/lib/utils";
import { useEffect, useState } from "react";

interface Props {
  sections: PhaseSection[];
}

export function PhaseSectionNav({ sections }: Props) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );

    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="hidden lg:block sticky top-24 self-start w-52 shrink-0" aria-label="Índex de continguts">
      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink-muted mb-5">
        En aquesta pàgina
      </p>
      <ol className="space-y-0.5">
        {sections.map((section, i) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={cn(
                  "flex items-start gap-3 py-2 px-2 rounded-md text-sm transition-all duration-200 group",
                  isActive
                    ? "bg-surface text-ink"
                    : "text-ink-muted hover:text-ink hover:bg-surface/60"
                )}
              >
                <span
                  className={cn(
                    "shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors",
                    isActive
                      ? "bg-accent text-canvas"
                      : "bg-border text-ink-muted group-hover:bg-surface-hover"
                  )}
                  aria-hidden
                >
                  {i + 1}
                </span>
                <span className={cn("leading-snug", isActive && "font-medium")}>
                  {section.title}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
