"use client";

import type { ReactNode } from "react";
import { ContactProvider } from "@/components/providers/contact-context";
import { MotionProvider } from "@/components/providers/motion";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionProvider>
      <ContactProvider>{children}</ContactProvider>
    </MotionProvider>
  );
}
