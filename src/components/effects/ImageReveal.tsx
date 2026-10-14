"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/animations";
import { useMotion } from "@/components/providers/motion";
import { cn } from "@/lib/utils";

export function ImageReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { enabled, ready } = useMotion();

  useGSAP(
    () => {
      const element = ref.current;
      if (!element) return;
      if (!ready || !enabled) {
        gsap.set(element, { clearProps: "all" });
        return;
      }

      const image = element.querySelector("img");

      gsap.fromTo(
        element,
        { clipPath: "inset(10% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true,
          },
        },
      );

      if (image) {
        gsap.fromTo(
          image,
          { scale: 1.06 },
          {
            scale: 1,
            duration: 1.35,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          },
        );
      }
    },
    { dependencies: [enabled, ready], scope: ref, revertOnUpdate: true },
  );

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {children}
    </div>
  );
}
