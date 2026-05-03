"use client";

import { BookOpen, Home, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Drawer } from "vaul";
import { cn } from "~/shared/lib/utils";
import { links } from "./nav";

const HOME = { href: "/", label: "Inici", matchPrefix: ["/"] };

// Bottom tab bar: 3 primary + 1 menu trigger
const TAB_LINKS = [
  { href: "/", label: "Inici", Icon: Home },
  { href: "/modules", label: "Mòduls", Icon: BookOpen },
  { href: "/phases", label: "Guia", Icon: BookOpen },
];

function isActive(href: string, prefix: string[], pathname: string) {
  return href === "/" ? pathname === "/" : prefix.some((p) => pathname === p || pathname.startsWith(p));
}

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Fixed bottom bar — mobile only */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 pb-[env(safe-area-inset-bottom)]">
        <div className="bg-canvas/95 backdrop-blur-md border-t border-border">
          <nav className="flex items-stretch h-16">
            {TAB_LINKS.map(({ href, label, Icon }) => {
              const active = isActive(href, [href], pathname);
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "flex-1 flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition-colors",
                    active ? "text-accent" : "text-ink-muted"
                  )}
                >
                  <span className={cn(
                    "flex items-center justify-center w-10 h-6 rounded-full transition-colors",
                    active ? "bg-accent/15" : ""
                  )}>
                    <Icon className="w-5 h-5" strokeWidth={active ? 2.2 : 1.8} />
                  </span>
                  <span>{label}</span>
                </Link>
              );
            })}

            {/* Drawer trigger */}
            <Drawer.Root open={open} onOpenChange={setOpen}>
              <Drawer.Trigger asChild>
                <button
                  className={cn(
                    "flex-1 flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition-colors",
                    open ? "text-accent" : "text-ink-muted"
                  )}
                  aria-label="Menú principal"
                >
                  <span className={cn(
                    "flex items-center justify-center w-10 h-6 rounded-full transition-colors",
                    open ? "bg-accent/15" : ""
                  )}>
                    <Menu className="w-5 h-5" strokeWidth={open ? 2.2 : 1.8} />
                  </span>
                  <span>Menú</span>
                </button>
              </Drawer.Trigger>

              <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-ink/40 z-50" />
                <Drawer.Content className="fixed bottom-0 inset-x-0 z-50 rounded-t-2xl bg-canvas flex flex-col focus:outline-none">
                  {/* Handle */}
                  <div className="flex justify-center pt-3 pb-1">
                    <div className="w-10 h-1 rounded-full bg-border" />
                  </div>

                  <Drawer.Title className="sr-only">Menú de navegació</Drawer.Title>

                  <div className="px-6 pt-2 pb-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-ink-muted mb-4">
                      Navegació
                    </p>

                    <ul className="space-y-1">
                      {[HOME, ...links].map(({ href, label, matchPrefix }) => {
                        const active = isActive(href, matchPrefix, pathname);
                        return (
                          <li key={href}>
                            <Link
                              href={href}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                                active
                                  ? "bg-surface text-ink"
                                  : "text-ink-muted hover:bg-surface hover:text-ink"
                              )}
                            >
                              {label}
                              {active && (
                                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Safe area spacer */}
                  <div className="pb-[env(safe-area-inset-bottom)]" />
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>
          </nav>
        </div>
      </div>

      {/* Spacer so content isn't hidden behind the bar */}
      <div className="md:hidden h-16" aria-hidden />
    </>
  );
}
