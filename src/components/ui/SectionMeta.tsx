import { cn } from "@/lib/utils";

export function SectionMeta({
  index,
  secondary,
  overline,
  tone = "dark",
}: {
  index: string;
  secondary: string;
  overline: string;
  tone?: "dark" | "light";
}) {
  const light = tone === "light";

  return (
    <div>
      <div
        className={cn(
          "flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-[0.18em] sm:text-xs",
          light ? "text-white/70" : "text-olive",
        )}
      >
        <span className={light ? "text-champagne" : undefined}>{index}</span>
        <span className={light ? "text-white/55" : "text-ink/70"}>{secondary}</span>
      </div>
      <p
        className={cn(
          "mt-4 font-mono text-[11px] uppercase tracking-[0.2em] sm:text-xs",
          light ? "text-white/75" : "text-olive",
        )}
      >
        {overline}
      </p>
    </div>
  );
}
