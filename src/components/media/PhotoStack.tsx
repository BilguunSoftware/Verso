"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Photo = {
  src: string;
  alt: string;
  position?: string;
};

export function PhotoStack({
  photos,
  active,
  variant = "fade",
  priorityCount = 0,
  sizes = "100vw",
}: {
  photos: Photo[];
  active: number;
  variant?: "hero" | "fade";
  priorityCount?: number;
  sizes?: string;
}) {
  const [layer, setLayer] = useState({ current: active, previous: active });

  if (layer.current !== active) {
    setLayer({ current: active, previous: layer.current });
  }

  useEffect(() => {
    if (layer.previous === layer.current) return;
    const timer = window.setTimeout(() => {
      setLayer((item) =>
        item.current === active ? { current: active, previous: active } : item,
      );
    }, 980);
    return () => window.clearTimeout(timer);
  }, [active, layer]);

  return (
    <>
      {photos.map((photo, index) => {
        const isActive = index === active;
        const holding = index === layer.previous;
        return (
          <Image
            key={photo.src}
            src={photo.src}
            alt={isActive ? photo.alt : ""}
            fill
            sizes={sizes}
            priority={index < priorityCount}
            className={cn("frame object-cover photo-grade", variant === "hero" && "frame-hero")}
            style={{ objectPosition: photo.position ?? "center" }}
            data-active={isActive ? "true" : "false"}
            data-under={holding ? "true" : "false"}
            data-animate={isActive && layer.previous !== active ? "true" : "false"}
            aria-hidden={isActive ? undefined : true}
          />
        );
      })}
    </>
  );
}
