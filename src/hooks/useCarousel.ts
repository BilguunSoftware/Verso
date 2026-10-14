"use client";

import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import { useMotion } from "@/components/providers/motion";
import { siteConfig } from "@/config/site";

export function useCarousel(length: number) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const { enabled } = useMotion();
  const autoplay = siteConfig.carousel.autoplay;

  const go = useCallback(
    (nextIndex: number) => {
      setIndex(((nextIndex % length) + length) % length);
    },
    [length],
  );

  const next = useCallback(() => {
    setIndex((current) => (current + 1) % length);
  }, [length]);

  const prev = useCallback(() => {
    setIndex((current) => (current - 1 + length) % length);
  }, [length]);

  const pause = useCallback(() => {
    if (autoplay) setPaused(true);
  }, [autoplay]);

  useEffect(() => {
    if (!autoplay || !enabled || paused || hovered) return;

    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setIndex((current) => (current + 1) % length);
    }, siteConfig.carousel.intervalMs);

    return () => window.clearInterval(timer);
  }, [autoplay, enabled, hovered, length, paused]);

  const onTouchStart = (event: TouchEvent) => {
    const target = event.target;
    if (target instanceof Element && target.closest("button, a, input, select, textarea")) {
      touch.current = null;
      return;
    }
    const point = event.changedTouches[0];
    if (!point) return;
    touch.current = { x: point.clientX, y: point.clientY };
  };

  const onTouchEnd = (event: TouchEvent) => {
    const start = touch.current;
    touch.current = null;
    if (!start) return;
    const point = event.changedTouches[0];
    if (!point) return;
    const dx = point.clientX - start.x;
    const dy = point.clientY - start.y;
    if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy) * 1.35) return;
    if (dx < 0) next();
    else prev();
    pause();
  };

  return {
    index,
    go,
    next,
    prev,
    pause,
    paused,
    setPaused,
    setHovered,
    onTouchStart,
    onTouchEnd,
  };
}
