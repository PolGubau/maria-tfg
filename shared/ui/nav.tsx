"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/utils";
import { useState } from "react";

const links = [
  { href: "/", label: "Inici" },
  { href: "/phases/tractament", label: "Tractament" },
  { href: "/phases/post-tractament", label: "Post-tractament" },
  { href: "/phases/fase-avancada", label: "Fase avançada" },
  { href: "/data", label: "Dades" },
  { href: "/thesis", label: "La recerca" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-canvas/95 backdrop-blur border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-ink hover:text-accent transition-colors"
        >
          Cuidar sense perdre&apos;s
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.slice(1).map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm transition-colors",
                  pathname === href
                    ? "bg-surface text-ink font-medium"
                    : "text-ink-muted hover:text-ink hover:bg-surface"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-ink-muted hover:text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className="block w-5 h-px bg-current mb-1" />
          <span className="block w-5 h-px bg-current mb-1" />
          <span className="block w-4 h-px bg-current" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-canvas px-6 py-4">
          <ul className="flex flex-col gap-2">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-sm transition-colors",
                    pathname === href
                      ? "bg-surface text-ink font-medium"
                      : "text-ink-muted hover:text-ink hover:bg-surface"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
