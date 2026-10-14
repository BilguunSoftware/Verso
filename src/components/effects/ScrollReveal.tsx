"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/animations";
import { useMotion } from "@/components/providers/motion";
import { cn } from "@/lib/utils";

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 22,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
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

      gsap.fromTo(
        element,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          delay,
          duration: 0.78,
          ease: "power3.out",
          onComplete: () => {
            gsap.set(element, { clearProps: "transform,opacity,visibility" });
          },
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            once: true,
          },
        },
      );
    },
    { dependencies: [delay, enabled, ready, y], scope: ref, revertOnUpdate: true },
  );

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
