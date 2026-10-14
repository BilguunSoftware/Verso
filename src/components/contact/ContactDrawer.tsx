"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { useContact } from "@/components/providers/contact-context";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { contactDrawerCopy } from "@/data/contact";
import { cn } from "@/lib/utils";

export function ContactDrawer() {
  const { open, serviceId, closeDrawer } = useContact();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = () =>
      Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        ),
      );

    const frame = window.requestAnimationFrame(() => {
      focusable()[0]?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeDrawer();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [closeDrawer, open]);

  return (
    <div className={cn("fixed inset-0 z-[80]", open ? "pointer-events-auto" : "pointer-events-none")} aria-hidden={open ? undefined : true}>
      <button
        type="button"
        className={cn(
          "drawer-backdrop absolute inset-0 bg-graphite/55 transition-opacity duration-500",
          open ? "opacity-100" : "opacity-0",
        )}
        aria-label="Хаалттай самбар хаах"
        onClick={closeDrawer}
        tabIndex={open ? 0 : -1}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-drawer-title"
        inert={open ? undefined : true}
        className={cn(
          "drawer-panel absolute inset-y-0 right-0 flex w-full max-w-[480px] translate-x-full flex-col bg-ivory text-ink shadow-[-24px_0_70px_rgba(29,37,33,0.18)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open && "translate-x-0",
        )}
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-5 sm:px-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-olive">
            {contactDrawerCopy.kicker}
          </p>
          <button
            type="button"
            onClick={closeDrawer}
            className="inline-flex h-11 w-11 items-center justify-center border border-ink/20"
            aria-label="Хаах"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-8 sm:px-7">
          <EditorialHeading
            id="contact-drawer-title"
            as="h2"
            lines={contactDrawerCopy.heading}
            accent="olive"
            className="text-[clamp(2.4rem,6vw,3.6rem)]"
          />
          <ContactForm open={open} serviceId={serviceId} />
        </div>
      </div>
    </div>
  );
}
