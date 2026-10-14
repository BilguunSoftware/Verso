"use client";

import { useMotion } from "@/components/providers/motion";
import { cn } from "@/lib/utils";

export function MotionToggle({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const { enabled, toggle } = useMotion();
  const light = tone === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em]",
        light ? "text-white/80" : "text-ink",
      )}
    >
      <span>Motion</span>
      <span
        className={cn(
          "border px-2 py-1",
          enabled
            ? "border-champagne text-champagne"
            : light
              ? "border-white/30 text-white/55"
              : "border-ink/25 text-olive",
        )}
      >
        {enabled ? "ON" : "OFF"}
      </span>
    </button>
  );
}
