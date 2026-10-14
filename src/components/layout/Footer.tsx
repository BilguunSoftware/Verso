"use client";

import { MotionToggle } from "@/components/effects/MotionToggle";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { siteConfig } from "@/config/site";
import { footerNav } from "@/data/navigation";

export function Footer() {
  const contactLine = [siteConfig.phone, siteConfig.email, siteConfig.address]
    .filter(Boolean)
    .join("  ·  ");

  return (
    <footer className="overflow-hidden bg-deep text-ivory">
      <div className="mx-auto max-w-[1480px] px-4 pt-14 sm:px-8 lg:px-12 lg:pt-20">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between lg:pb-10">
          <ScrollReveal className="min-w-0">
            <p className="font-sans text-[clamp(4.75rem,16vw,15.5rem)] font-semibold leading-[0.82] tracking-[-0.06em]">
              {siteConfig.logoText}
              <span className="text-champagne">.</span>
            </p>
          </ScrollReveal>
          <p className="max-w-[11ch] font-sans text-[1.65rem] font-semibold leading-[0.95] tracking-[-0.04em] sm:text-right sm:text-3xl lg:pb-3 lg:text-[2.6rem]">
            A DIFFERENT
            <br />
            WAY FORWARD.
          </p>
        </div>

        <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-3" aria-label="Хөлний цэс">
          {footerNav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-ivory/85 hover:text-champagne">
              {item.label}
            </a>
          ))}
        </nav>

        {siteConfig.socialLinks.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-4">
            {siteConfig.socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-ivory/70 hover:text-champagne"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
            {siteConfig.copyright}
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <MotionToggle tone="light" />
            <a
              href={siteConfig.creditUrl}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/75 hover:text-champagne"
            >
              {siteConfig.creditLabel} <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
        {contactLine ? (
          <p className="pb-8 text-sm leading-relaxed text-white/55">{contactLine}</p>
        ) : null}
      </div>
    </footer>
  );
}
