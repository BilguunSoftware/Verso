"use client";

import { useState } from "react";
import { PhotoStack } from "@/components/media/PhotoStack";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { useContact } from "@/components/providers/contact-context";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionMeta } from "@/components/ui/SectionMeta";
import { services, servicesIntro } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const { openDrawer } = useContact();
  const service = services[active];

  if (!service) return null;

  return (
    <section id="work" className="chapter bg-work py-20 text-ivory lg:py-28">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-8 lg:px-12">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <ScrollReveal className="lg:col-span-7">
            <SectionMeta
              index={servicesIntro.indexLabel}
              secondary={servicesIntro.secondaryLabel}
              overline={servicesIntro.overline}
              tone="light"
            />
            <EditorialHeading
              lines={servicesIntro.headline}
              accent="champagne"
              className="mt-7 text-[clamp(2.15rem,11vw,6rem)]"
            />
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-4 lg:col-start-9" delay={0.08}>
            <p className="max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
              {servicesIntro.description}
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid lg:mt-16 lg:min-h-[760px] lg:grid-cols-[minmax(0,39%)_minmax(0,61%)]">
          <div className="flex flex-col border-white/10 lg:border-r" role="tablist" aria-label="Үйл ажиллагаа">
            {services.map((item, index) => {
              const selected = index === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`service-tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls="service-panel"
                  onClick={() => setActive(index)}
                  className={cn(
                    "flex flex-1 flex-col justify-center border-b border-white/12 px-1 py-8 text-left transition-colors sm:px-2 lg:border-l-2 lg:px-8 lg:py-10",
                    selected
                      ? "border-l-champagne bg-white/[0.03] text-champagne"
                      : "border-l-transparent text-[#E7E4DA]/68 hover:text-ivory",
                  )}
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
                    {item.discipline}
                  </span>
                  <span className="mt-4 block text-[clamp(1.7rem,2.5vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
                    {item.nameLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="service-panel"
            role="tabpanel"
            aria-labelledby={`service-tab-${service.id}`}
            className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-full"
          >
            <PhotoStack
              photos={services.map((item) => ({
                src: item.image,
                alt: item.imageAlt,
                position: item.imagePosition,
              }))}
              active={active}
              sizes="(min-width: 1024px) 61vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(29,37,33,0.28)_0%,rgba(29,37,33,0.04)_42%,rgba(29,37,33,0.82)_100%)]" />
            <div className="relative z-10 flex h-full min-h-[520px] flex-col justify-between p-6 sm:min-h-[580px] sm:p-8 lg:p-10">
              <div className="flex items-start justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-white/80">
                <span>{service.selectedLabel}</span>
                <span>{service.number}</span>
              </div>
              <div key={service.id} className="copy-swap max-w-xl">
                <h3 className="text-[clamp(2rem,3.4vw,3.5rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
                  {service.titleLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
                  {service.description}
                </p>
                <div className="pointer-events-auto mt-6">
                  <ArrowButton variant="champagne" onClick={() => openDrawer(service.id)}>
                    {servicesIntro.ctaLabel}
                  </ArrowButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
