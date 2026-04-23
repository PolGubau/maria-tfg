"use client";

import { useEffect } from "react";
import { useModuleProgress } from "~/shared/lib/use-module-progress";

export function MarkAsRead({ slug }: { slug: string }) {
  const { markRead } = useModuleProgress();
  useEffect(() => {
    markRead(slug);
  }, [slug, markRead]);
  return null;
}
