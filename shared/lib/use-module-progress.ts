"use client";

import { useState, useEffect, useCallback } from "react";

const KEY = "csp-module-progress";

export function useModuleProgress() {
  const [read, setRead] = useState<Set<string>>(new Set());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (stored) setRead(new Set(JSON.parse(stored) as string[]));
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  const markRead = useCallback((slug: string) => {
    setRead((prev) => {
      if (prev.has(slug)) return prev;
      const next = new Set(prev);
      next.add(slug);
      try {
        localStorage.setItem(KEY, JSON.stringify([...next]));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const isRead = useCallback((slug: string) => read.has(slug), [read]);

  return { isRead, markRead, hydrated };
}
