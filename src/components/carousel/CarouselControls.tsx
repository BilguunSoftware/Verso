import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function CarouselControls({
  onPrev,
  onNext,
  paused,
  onTogglePause,
}: {
  onPrev: () => void;
  onNext: () => void;
  paused: boolean;
  onTogglePause: () => void;
}) {
  const buttonClass =
    "lift inline-flex h-11 min-w-11 items-center justify-center gap-2 border border-white/45 px-2.5 text-white hover:border-champagne hover:bg-champagne hover:text-graphite lg:px-3";

  return (
    <div className="flex items-center gap-2">
      {siteConfig.carousel.autoplay ? (
        <button
          type="button"
          className={buttonClass}
          onClick={onTogglePause}
          aria-pressed={paused}
          aria-label={paused ? "Play slides" : "Pause slides"}
        >
          {paused ? <Play className="h-4 w-4" aria-hidden /> : <Pause className="h-4 w-4" aria-hidden />}
        </button>
      ) : null}
      <button type="button" className={buttonClass} onClick={onPrev} aria-label="Previous slide">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] lg:inline">
          Previous
        </span>
      </button>
      <button type="button" className={cn(buttonClass)} onClick={onNext} aria-label="Next slide">
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] lg:inline">
          Next
        </span>
        <ArrowRight className="h-4 w-4" aria-hidden />
      </button>
    </div>
  );
}
