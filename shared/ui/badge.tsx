import { cn } from "~/shared/lib/utils";
import type { HTMLAttributes } from "react";

type BadgeVariant =
  | "default"
  | "muted"
  | "treatment"
  | "post"
  | "advanced"
  | "accent";

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-surface border-border text-ink",
  muted: "bg-surface border-border text-ink-muted",
  accent: "bg-accent-light border-accent/30 text-accent",
  treatment: "bg-treatment-bg border-treatment-border text-treatment",
  post: "bg-post-bg border-post-border text-post",
  advanced: "bg-advanced-bg border-advanced-border text-advanced",
};

const base =
  "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold border";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({
  variant = "default",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(base, variantClasses[variant], className)}
      {...props}
    />
  );
}
