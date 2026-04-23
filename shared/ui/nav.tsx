"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "~/shared/lib/utils";

const links = [
  { href: "/guides", label: "Guies", matchPrefix: ["/guides", "/phases"] },
  { href: "/data", label: "Dades", matchPrefix: ["/data"] },
  { href: "/thesis", label: "La recerca", matchPrefix: ["/thesis"] },
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
  const [open, setOpen] = useState(false);
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

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-ink-muted hover:text-ink transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tancar menú" : "Obrir menú"}
          aria-expanded={open}
        >
          <span
            className="block w-5 h-px bg-current transition-transform duration-200"
            style={{ transform: open ? "translateY(4px) rotate(45deg)" : "none" }}
          />
          <span
            className="block w-5 h-px bg-current mt-1.5 transition-all duration-200"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-4 h-px bg-current mt-1.5 transition-transform duration-200"
            style={{ transform: open ? "translateY(-10px) rotate(-45deg)" : "none", width: open ? "20px" : "16px" }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-canvas px-6 py-4">
          <ul className="flex flex-col gap-0.5">
            {[{ href: "/", label: "Inici", matchPrefix: ["/"] }, ...links].map(({ href, label, matchPrefix }) => {
              const active = href === "/" ? pathname === "/" : matchPrefix.some((p) => pathname === p || pathname.startsWith(p));
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block px-3 py-2 text-sm rounded transition-colors",
                      active ? "text-ink font-medium bg-surface" : "text-ink-muted hover:text-ink hover:bg-surface"
                    )}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
