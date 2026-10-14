"use client";

import Image from "next/image";
import { ImageReveal } from "@/components/effects/ImageReveal";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionMeta } from "@/components/ui/SectionMeta";
import { companyStory } from "@/data/companyStory";

export function CompanyStory() {
  return (
    <section id="story" className="chapter bg-ivory py-20 text-ink lg:py-28">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-8 lg:px-12">
        <ScrollReveal>
          <SectionMeta
            index={companyStory.indexLabel}
            secondary={companyStory.secondaryLabel}
            overline={companyStory.overline}
          />
        </ScrollReveal>
        <div className="mt-8 grid items-end gap-8 lg:mt-10 lg:grid-cols-12">
          <ScrollReveal className="lg:col-span-7">
            <EditorialHeading
              lines={companyStory.heading}
              accent="olive"
              className="text-[clamp(2.15rem,11vw,6.1rem)]"
            />
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-4 lg:col-start-9" delay={0.08}>
            <p className="max-w-md text-base leading-relaxed text-ink/80 sm:text-lg">
              {companyStory.description}
            </p>
          </ScrollReveal>
        </div>

      </div>

      <div className="mt-14 grid lg:mt-20 lg:grid-cols-[minmax(0,57%)_minmax(0,43%)]">
        <ImageReveal className="media-zoom group relative min-h-[440px] sm:min-h-[560px] lg:min-h-[740px]">
          <Image
            src={companyStory.image}
            alt={companyStory.imageAlt}
            fill
            sizes="(min-width: 1024px) 57vw, 100vw"
            className="object-cover photo-grade"
          />
          <span className="absolute bottom-0 left-0 z-10 flex items-center gap-3 bg-graphite/55 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ivory backdrop-blur-sm sm:px-5">
            <span className="h-px w-6 bg-champagne" />
            {companyStory.caption}
          </span>
        </ImageReveal>

        <aside className="flex min-h-[440px] flex-col bg-olive-soft px-7 py-10 text-ink sm:px-10 sm:py-12 lg:min-h-full lg:px-14 lg:py-16 xl:pr-[max(3.5rem,calc((100vw-1480px)/2+3.5rem))]">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-olive sm:text-xs">
            {companyStory.panel.kicker}
          </p>
          <EditorialHeading
            as="h3"
            lines={companyStory.panel.heading}
            accent="olive"
            className="mt-10 text-[clamp(2.3rem,3.6vw,3.8rem)]"
          />
          <p className="mt-6 max-w-md text-base leading-[1.7] text-ink/80">
            {companyStory.panel.body}
          </p>
          <a
            href={companyStory.panel.arrowHref}
            aria-label={companyStory.panel.arrowLabel}
            className="group mt-auto inline-flex self-end pt-16 text-ink"
          >
            <svg viewBox="0 0 72 72" className="h-16 w-16 transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden>
              <path d="M16 18 L52 54" fill="none" stroke="currentColor" strokeWidth="1.25" />
              <path d="M30 54 H52 V32" fill="none" stroke="currentColor" strokeWidth="1.25" />
            </svg>
          </a>
        </aside>
      </div>
    </section>
  );
}
