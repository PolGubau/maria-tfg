import { type VariantProps, cva } from "class-variance-authority";
import { Slot } from "radix-ui";
import type * as React from "react";
import { cn } from "~/lib/utils";


const buttonVariants = cva(
	"inline-flex shrink-0 items-center justify-center gap-2 border border-transparent font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				// Neutral dark CTA - ink bg, canvas text
				default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg",
				// Brand CTA - terracotta bg, canvas text
				primary: "bg-accent text-accent-foreground hover:bg-accent/90 rounded-full",
				// Bordered - transparent bg, ink text, warm border
				outline: "border-border bg-transparent text-foreground hover:bg-muted rounded-lg",
				// Surface filled - warm gray bg, ink text
				secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg",
				// Transparent - ink text, surface on hover
				ghost: "text-foreground hover:bg-muted rounded-md",
				// Destructive - soft red tint
				destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-lg focus-visible:ring-destructive/30",
				// Inline link - no bg, underline on hover
				link: "text-foreground underline-offset-4 hover:underline hover:text-accent",
			},
			size: {
				// Utility compact - nav tags, inline secondary actions
				sm: "h-8 px-3 text-sm",
				// Standard action - most buttons
				default: "h-10 px-5 text-sm",
				// Hero CTA - landing page primary actions
				lg: "h-12 px-7 text-base",
				// Square icon buttons
				icon: "size-10",
				"icon-sm": "size-8",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Button({
	className,
	variant = "default",
	size = "default",
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot.Root : "button";

	return (
		<Comp
			data-slot="button"
			data-variant={variant}
			data-size={size}
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
