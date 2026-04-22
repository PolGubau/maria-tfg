"use client";

import { useEffect, useState } from "react";
import { cn } from "@/shared/lib/utils";
import type { PhaseSection } from "@/entities/phase/types";

interface Props {
  sections: PhaseSection[];
}

export function PhaseSectionNav({ sections }: Props) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="hidden lg:block sticky top-20 self-start w-48 shrink-0">
      <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-4">
        Continguts
      </p>
      <ul className="space-y-1">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={cn(
                "block text-sm py-1.5 pl-3 border-l-2 transition-colors",
                active === section.id
                  ? "border-accent text-ink font-medium"
                  : "border-transparent text-ink-muted hover:text-ink hover:border-border"
              )}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
