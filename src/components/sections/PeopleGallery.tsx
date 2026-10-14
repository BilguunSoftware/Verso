"use client";

import Image from "next/image";
import { ImageReveal } from "@/components/effects/ImageReveal";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionMeta } from "@/components/ui/SectionMeta";
import { people } from "@/data/people";

export function PeopleGallery() {
  const [connect, create] = people.images;

  if (!connect || !create) return null;

  return (
    <section id="people" className="chapter bg-stone py-20 text-ink lg:py-28">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-8 lg:px-12">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <ScrollReveal className="lg:col-span-7">
            <SectionMeta
              index={people.indexLabel}
              secondary={people.secondaryLabel}
              overline={people.overline}
            />
            <EditorialHeading
              lines={people.heading}
              accent="olive"
              className="mt-7 text-[clamp(2.15rem,11vw,5.8rem)]"
            />
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-4 lg:col-start-9" delay={0.08}>
            <p className="max-w-md text-base leading-relaxed text-ink/80 sm:text-lg">
              {people.description}
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-20 lg:grid-cols-12 lg:gap-6">
          <ImageReveal className="media-zoom group relative min-h-[480px] sm:col-span-2 sm:min-h-[560px] lg:col-span-5 lg:min-h-[760px]">
            <Image
              src={connect.src}
              alt={connect.alt}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover photo-grade"
              style={{ objectPosition: connect.position }}
            />
            <span className="absolute bottom-4 left-4 z-10 bg-graphite/60 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ivory">
              {connect.caption}
            </span>
          </ImageReveal>

          <ImageReveal className="media-zoom group relative min-h-[300px] sm:min-h-[360px] lg:col-span-3 lg:mt-28 lg:min-h-[540px]">
            <Image
              src={create.src}
              alt={create.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover photo-grade"
              style={{ objectPosition: create.position }}
            />
            <span className="absolute bottom-4 left-4 z-10 bg-graphite/60 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ivory">
              {create.caption}
            </span>
          </ImageReveal>

          <ScrollReveal className="flex min-h-[380px] flex-col justify-between bg-olive-surface p-7 sm:min-h-full sm:p-8 lg:col-span-4 lg:mt-14 lg:min-h-[580px] lg:p-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-olive sm:text-xs">
                {people.quote.kicker}
              </p>
              <EditorialHeading
                as="h3"
                lines={people.quote.heading}
                accent="olive"
                className="mt-8 text-[clamp(2rem,3.2vw,3.4rem)]"
              />
            </div>
            <a
              href={people.quote.linkHref}
              className="mt-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink hover:text-olive sm:text-xs"
            >
              {people.quote.linkLabel}
              <span aria-hidden>↗</span>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
