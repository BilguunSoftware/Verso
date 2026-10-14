import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  champagne:
    "bg-champagne text-graphite hover:bg-[#f3d9a8] focus-visible:outline-graphite",
  dark: "bg-graphite text-ivory hover:bg-deep",
  outline: "border border-ink/75 bg-transparent text-ink hover:bg-ink hover:text-ivory",
} as const;

export function ArrowButton({
  children,
  href,
  onClick,
  variant = "champagne",
  className,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: keyof typeof variants;
  className?: string;
}) {
  const classes = cn(
    "lift group inline-flex min-h-11 items-center justify-center gap-3 px-5 py-3 text-left text-[12px] font-semibold uppercase tracking-[0.14em] sm:text-[13px]",
    variants[variant],
    className,
  );
  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight
        className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden
      />
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
