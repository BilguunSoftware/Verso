import Image from "next/image";
import type { HeroSlide } from "@/types/content";
import { cn } from "@/lib/utils";

export function CarouselThumbnails({
  slides,
  active,
  onSelect,
}: {
  slides: HeroSlide[];
  active: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="grid w-full grid-cols-3 gap-2 lg:flex lg:w-auto lg:gap-3" role="group" aria-label="Слайд сонгох">
      {slides.map((slide, index) => {
        const selected = index === active;
        return (
          <button
            key={slide.id}
            type="button"
            aria-pressed={selected}
            aria-label={`${slide.thumbnailLabel} слайд`}
            onClick={() => onSelect(index)}
            className={cn(
              "relative h-14 w-full overflow-hidden border text-left transition-[border-color,opacity] duration-200 sm:h-[4.35rem] lg:h-[5.15rem] lg:w-[9.4rem]",
              selected
                ? "border-champagne opacity-100 shadow-[inset_0_0_0_1px_#E7CD94]"
                : "border-white/25 opacity-80 hover:border-white/55 hover:opacity-100",
            )}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              sizes="160px"
              className={cn("object-cover photo-grade", selected ? "brightness-100" : "brightness-[0.58]")}
              style={{ objectPosition: slide.imagePosition ?? "center" }}
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite via-graphite/35 to-graphite/15" />
            <span className="absolute inset-x-0 bottom-1.5 px-0.5 text-center font-mono text-[9px] leading-none tracking-[0.01em] whitespace-nowrap text-white sm:text-[11px] sm:tracking-[0.08em]">
              {slide.thumbnailLabel}
            </span>
          </button>
        );
      })}
    </div>
  );
}
