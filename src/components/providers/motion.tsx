"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { siteConfig } from "@/config/site";
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion";

type MotionChoice = "on" | "off" | null;

type MotionContextValue = {
  enabled: boolean;
  ready: boolean;
  toggle: () => void;
};

const MotionContext = createContext<MotionContextValue | null>(null);
const motionEvent = "verso-motion-change";

function subscribeMotion(onStoreChange: () => void) {
  window.addEventListener(motionEvent, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(motionEvent, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function readChoice(): MotionChoice {
  const stored = window.localStorage.getItem(siteConfig.motionStorageKey);
  return stored === "on" || stored === "off" ? stored : null;
}

function subscribeMounted() {
  return () => {};
}

export function MotionProvider({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion();
  const choice = useSyncExternalStore(subscribeMotion, readChoice, () => null);
  const ready = useSyncExternalStore(subscribeMounted, () => true, () => false);
  const enabled = choice === "on" ? true : choice === "off" ? false : !reduced;

  useEffect(() => {
    document.documentElement.dataset.motion = enabled ? "on" : "off";
  }, [enabled]);

  const value = useMemo<MotionContextValue>(
    () => ({
      enabled,
      ready,
      toggle: () => {
        const next = enabled ? "off" : "on";
        window.localStorage.setItem(siteConfig.motionStorageKey, next);
        window.dispatchEvent(new Event(motionEvent));
      },
    }),
    [enabled, ready],
  );

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}

export function useMotion() {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error("useMotion must be used within MotionProvider");
  }
  return context;
}
