"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type ContactContextValue = {
  open: boolean;
  serviceId: string | null;
  openDrawer: (serviceId?: string) => void;
  closeDrawer: () => void;
};

const ContactContext = createContext<ContactContextValue | null>(null);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [serviceId, setServiceId] = useState<string | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const openDrawer = useCallback((nextServiceId?: string) => {
    const active = document.activeElement;
    triggerRef.current = active instanceof HTMLElement ? active : null;
    setServiceId(nextServiceId ?? null);
    setOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setOpen(false);
    const trigger = triggerRef.current;
    window.setTimeout(() => {
      trigger?.focus();
    }, 0);
  }, []);

  const value = useMemo(
    () => ({ open, serviceId, openDrawer, closeDrawer }),
    [closeDrawer, open, openDrawer, serviceId],
  );

  return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>;
}

export function useContact() {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact must be used within ContactProvider");
  }
  return context;
}
