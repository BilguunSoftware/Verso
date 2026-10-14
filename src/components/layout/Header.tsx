"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { useContact } from "@/components/providers/contact-context";
import { siteConfig } from "@/config/site";
import { headerNav } from "@/data/navigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openDrawer } = useContact();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:bg-ivory focus:px-4 focus:py-2 focus:text-ink"
      >
        Агуулга руу шилжих
      </a>
      <div className="mx-auto grid h-16 max-w-[1480px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-8 lg:h-20 lg:grid-cols-[1fr_auto_1fr] lg:px-12">
        <a href="#top" className="shrink-0 leading-none" aria-label={`${siteConfig.companyName} нүүр`}>
          <span className="block font-sans text-[1.7rem] font-semibold leading-none tracking-[-0.06em] text-ink">
            {siteConfig.logoText}
            <span className="text-champagne">.</span>
          </span>
          <span className="mt-1.5 block font-mono text-[9px] uppercase tracking-[0.22em] text-olive sm:text-[10px]">
            {siteConfig.galleryName}
          </span>
        </a>

        <nav className="hidden items-center justify-center gap-8 lg:flex" aria-label="Үндсэн цэс">
          {headerNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium tracking-[-0.01em] text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-olive after:transition-transform after:duration-200 hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3 sm:gap-5">
          <p className="hidden font-mono text-[11px] uppercase tracking-[0.16em] text-olive xl:block">
            COMPANY PROFILE / {siteConfig.year}
          </p>
          <button
            type="button"
            onClick={() => openDrawer()}
            className="lift hidden min-h-11 items-center gap-2 border border-ink/80 px-4 text-[12px] font-semibold tracking-[0.14em] text-ink hover:bg-ink hover:text-ivory lg:inline-flex"
          >
            ХОЛБОГДОХ
            <span aria-hidden>↗</span>
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-ink/20 text-ink lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">{menuOpen ? "Цэс хаах" : "Цэс нээх"}</span>
          </button>
        </div>
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
