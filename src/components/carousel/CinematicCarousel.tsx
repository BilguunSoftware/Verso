"use client";

import { heroSlides } from "@/data/heroSlides";
import { siteConfig } from "@/config/site";
import { useCarousel } from "@/hooks/useCarousel";
import { padNumber } from "@/lib/utils";
import { PhotoStack } from "@/components/media/PhotoStack";
import { CarouselControls } from "@/components/carousel/CarouselControls";
import { CarouselProgress } from "@/components/carousel/CarouselProgress";
import { CarouselSlide } from "@/components/carousel/CarouselSlide";
import { CarouselThumbnails } from "@/components/carousel/CarouselThumbnails";

export function CinematicCarousel() {
  const slides = heroSlides;
  const {
    index,
    go,
    next,
    prev,
    pause,
    paused,
    setPaused,
    setHovered,
    onTouchStart,
    onTouchEnd,
  } = useCarousel(slides.length);
  const slide = slides[index];

  if (!slide) return null;

  return (
    <section
      id="top"
      className="chapter relative isolate h-[min(750px,calc(100svh-4rem))] w-full overflow-hidden bg-graphite text-white lg:h-[clamp(675px,85vh,920px)]"
      aria-roledescription="carousel"
      aria-label={`${siteConfig.companyName} / ${siteConfig.galleryName}`}
      tabIndex={0}
      style={{ touchAction: "pan-y" }}
      onKeyDown={(event) => {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
        event.preventDefault();
        if (event.key === "ArrowRight") next();
        else prev();
        pause();
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHovered(false);
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="absolute inset-0">
        <PhotoStack
          photos={slides.map((item) => ({
            src: item.image,
            alt: item.alt,
            position: item.imagePosition,
          }))}
          active={index}
          variant="hero"
          priorityCount={slides.length}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(29,37,33,0.74)_0%,rgba(29,37,33,0.4)_36%,rgba(29,37,33,0.06)_64%,rgba(29,37,33,0.16)_100%),linear-gradient(180deg,rgba(29,37,33,0.38)_0%,rgba(29,37,33,0)_32%,rgba(29,37,33,0.2)_58%,rgba(29,37,33,0.88)_100%)]" />

      <p className="pointer-events-none absolute right-6 top-[46%] z-10 hidden -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70 [writing-mode:vertical-rl] xl:block">
        {siteConfig.carousel.verticalLabel}
      </p>

      <div className="relative z-10 flex h-full flex-col px-4 pt-4 sm:px-8 sm:pt-6 lg:px-12">
        <div className="relative z-20 flex shrink-0 items-start justify-between gap-3">
          <p className="max-w-[58%] font-mono text-[10px] uppercase leading-[1.4] tracking-[0.14em] text-white [text-shadow:0_1px_10px_rgba(29,37,33,0.75)] sm:max-w-none sm:text-[11px] sm:tracking-[0.18em]">
            {siteConfig.companyName} / {siteConfig.carousel.storiesLabel}
          </p>
          <p className="max-w-[40%] text-right font-mono text-[10px] uppercase leading-[1.4] tracking-[0.12em] text-white [text-shadow:0_1px_10px_rgba(29,37,33,0.75)] sm:max-w-none sm:text-[11px] sm:tracking-[0.16em]">
            {slide.category}
          </p>
        </div>

        <div className="flex min-h-0 flex-1 flex-col justify-end pb-4 sm:pb-6 lg:pb-10">
          <div key={slide.id} className="max-w-[40rem] xl:max-w-[46rem]">
            <CarouselSlide slide={slide} />
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          {padNumber(index + 1)} / {padNumber(slides.length)}. {slide.category}. {slide.shortLabel}
        </p>

        <div className="-mx-4 sm:-mx-8 lg:-mx-12">
        <div className="border-t border-white/10 bg-graphite/55 px-4 backdrop-blur-md sm:px-8 lg:px-12">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-x-3 gap-y-2.5 py-2.5 sm:gap-y-3 sm:py-3.5 lg:grid-cols-[11.5rem_minmax(0,1fr)_auto] lg:items-center lg:gap-8 lg:py-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/65 sm:text-[11px]">
                {siteConfig.carousel.featureLabel}
              </p>
              <p className="mt-1 font-sans text-[1.35rem] font-semibold leading-none tracking-[-0.04em] sm:text-[1.65rem] lg:text-4xl">
                {padNumber(index + 1)}
                <span className="text-white/45"> / {padNumber(slides.length)}</span>
              </p>
              <p className="mt-1 hidden text-[11px] tracking-[0.08em] text-white/75 sm:block">
                {slide.shortLabel}
              </p>
            </div>
            <div className="col-span-2 lg:col-span-1 lg:col-start-2">
              <CarouselThumbnails
                slides={slides}
                active={index}
                onSelect={(nextIndex) => {
                  go(nextIndex);
                  pause();
                }}
              />
            </div>
            <div className="col-start-2 row-start-1 lg:col-start-3 lg:row-start-1">
              <CarouselControls
                onPrev={() => {
                  prev();
                  pause();
                }}
                onNext={() => {
                  next();
                  pause();
                }}
                paused={paused}
                onTogglePause={() => setPaused((current) => !current)}
              />
            </div>
          </div>
        </div>
        <CarouselProgress count={slides.length} active={index} />
        </div>
      </div>
    </section>
  );
}
