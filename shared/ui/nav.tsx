"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// useState kept: used by ReadingProgress
import { cn } from "~/shared/lib/utils";

export const links = [
  { href: "/phases", label: "Guies", matchPrefix: ["/phases"] },
  { href: "/modules", label: "Mòduls", matchPrefix: ["/modules"] },
  { href: "/autocura", label: "Test d'autocura", matchPrefix: ["/autocura"] },
  { href: "/data", label: "Dades", matchPrefix: ["/data"] },
  { href: "/thesis", label: "La recerca", matchPrefix: ["/thesis"] },
  { href: "/resources", label: "Recursos", matchPrefix: ["/resources"] },
  { href: "/contact", label: "Contacte", matchPrefix: ["/contact"] },
];

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (progress <= 0) return null;
  return (
    <div
      className="absolute bottom-0 left-0 h-px bg-accent transition-all duration-150"
      style={{ width: `${progress}%` }}
      aria-hidden
    />
  );
}

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 bg-canvas/95 backdrop-blur-sm border-b border-border relative">
      <ReadingProgress />
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className={cn(
            "font-display text-sm font-medium italic tracking-tight transition-colors",
            isHome ? "text-accent" : "text-ink hover:text-accent"
          )}
        >
          Cuidar sense perdre&apos;s
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5">
          {links.map(({ href, label, matchPrefix }) => {
            const active = matchPrefix.some((p) => pathname === p || pathname.startsWith(p));
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "px-3 py-1.5 text-sm transition-colors rounded",
                    active
                      ? "text-ink font-medium"
                      : "text-ink-muted hover:text-ink"
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

      </nav>
    </header>
  );
}
