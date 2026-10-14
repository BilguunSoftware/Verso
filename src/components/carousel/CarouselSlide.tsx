import { ArrowButton } from "@/components/ui/ArrowButton";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import type { HeroSlide } from "@/types/content";

export function CarouselSlide({ slide }: { slide: HeroSlide }) {
  return (
    <div className="max-w-full">
      <span className="hero-rule mb-2.5 block h-px w-10 bg-champagne sm:mb-4 sm:w-12 lg:mb-5" />
      <p className="slide-fade font-mono text-[10px] uppercase tracking-[0.16em] text-champagne sm:text-[11px] sm:tracking-[0.2em] lg:text-xs">
        {slide.overline}
      </p>
      <EditorialHeading
        as="h1"
        lines={slide.headline}
        accent="champagne"
        animated
        className="mt-2 text-[clamp(1.7rem,min(8.8vw,5.2svh),2.65rem)] leading-[1.08] text-white sm:mt-3 sm:text-[clamp(2rem,min(6.4vw,6svh),3.25rem)] lg:mt-5 lg:text-[clamp(3.5rem,6.7vw,6.5rem)] lg:leading-[1.04]"
      />
      <p
        className="slide-fade mt-3 max-w-xl text-sm leading-snug text-white [text-shadow:0_1px_16px_rgba(29,37,33,0.7)] sm:mt-5 sm:text-base sm:leading-7"
        style={{ animationDelay: "240ms" }}
      >
        {slide.description}
      </p>
      <div className="slide-fade mt-3.5 sm:mt-5 lg:mt-6" style={{ animationDelay: "300ms" }}>
        <ArrowButton href={slide.ctaTarget}>{slide.ctaLabel}</ArrowButton>
      </div>
    </div>
  );
}
