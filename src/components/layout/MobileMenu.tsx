"use client";

import { useEffect, useRef } from "react";
import { MotionToggle } from "@/components/effects/MotionToggle";
import { useContact } from "@/components/providers/contact-context";
import { headerNav } from "@/data/navigation";
import { siteConfig } from "@/config/site";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const { openDrawer } = useContact();

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    const focusable = () =>
      Array.from(
        panel?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? [],
      );
    const frame = window.requestAnimationFrame(() => focusable()[0]?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div
      id="mobile-menu"
      ref={panelRef}
      className="absolute inset-x-0 top-full z-40 border-b border-line bg-ivory lg:hidden"
    >
      <nav className="flex flex-col px-5 py-6 sm:px-8" aria-label="Үндсэн цэс">
        {headerNav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="border-b border-line py-4 text-3xl font-semibold tracking-[-0.04em] text-ink"
          >
            {item.label}
          </a>
        ))}
        <button
          type="button"
          className="mt-6 inline-flex min-h-11 items-center justify-between border border-ink px-4 py-3 text-sm font-semibold tracking-[0.14em] text-ink"
          onClick={() => {
            onClose();
            openDrawer();
          }}
        >
          ХОЛБОГДОХ
          <span aria-hidden>↗</span>
        </button>
        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-olive">
            {siteConfig.companyName} / {siteConfig.year}
          </p>
          <MotionToggle />
        </div>
      </nav>
    </div>
  );
}
