import type { Heading } from "@/types/content";
import { cn } from "@/lib/utils";

const accents = {
  champagne: "text-champagne",
  olive: "text-olive",
  ivory: "text-ivory",
} as const;

export function EditorialHeading({
  as: Tag = "h2",
  lines,
  accent = "olive",
  className,
  id,
  animated = false,
}: {
  as?: "h1" | "h2" | "h3";
  lines: Heading;
  accent?: keyof typeof accents;
  className?: string;
  id?: string;
  animated?: boolean;
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "font-sans font-semibold leading-[1.04] tracking-[-0.032em]",
        className,
      )}
    >
      {lines.map((line, lineIndex) => (
        <span
          key={lineIndex}
          className={animated ? "slide-line block overflow-visible" : "block overflow-visible"}
          style={animated ? { animationDelay: `${lineIndex * 80}ms` } : undefined}
        >
          {line.map((run, runIndex) =>
            run.highlight ? (
              <em
                key={runIndex}
                className={cn(
                  "inline-block pr-[0.06em] font-serif text-[1.05em] font-normal italic leading-[0.92] tracking-[-0.02em]",
                  accents[accent],
                )}
              >
                {run.text}
              </em>
            ) : (
              <span key={runIndex}>{run.text}</span>
            ),
          )}
        </span>
      ))}
    </Tag>
  );
}
