"use client";

import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { useContact } from "@/components/providers/contact-context";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { contactFinale } from "@/data/contact";

export function ContactFinale() {
  const { openDrawer } = useContact();

  return (
    <section id="contact" className="chapter bg-contact py-24 text-graphite lg:py-32">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-start justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.18em] sm:text-xs">
          <span>{contactFinale.indexLabel}</span>
          <span>{contactFinale.secondaryLabel}</span>
        </div>
        <p className="mt-14 font-mono text-[11px] uppercase tracking-[0.22em] text-graphite/75 sm:mt-16 sm:text-xs">
          {contactFinale.overline}
        </p>
        <ScrollReveal>
          <EditorialHeading
            lines={contactFinale.heading}
            accent="ivory"
            className="mt-6 text-[clamp(2.15rem,12vw,6.4rem)] sm:mt-8"
          />
        </ScrollReveal>
        <p className="mt-8 max-w-xl text-base leading-[1.7] text-graphite/88 sm:text-lg">
          {contactFinale.description}
        </p>
        <ArrowButton variant="dark" className="mt-10" onClick={() => openDrawer()}>
          {contactFinale.ctaLabel}
        </ArrowButton>
        <div className="mt-24 flex flex-col gap-3 border-t border-graphite/20 pt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-graphite/75 sm:mt-32 sm:flex-row sm:items-center sm:justify-between sm:text-xs">
          <span>{contactFinale.mark}</span>
          <span>{contactFinale.closing}</span>
        </div>
      </div>
    </section>
  );
}
