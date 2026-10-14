"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { siteConfig } from "@/config/site";
import { contactDrawerCopy } from "@/data/contact";
import {
  buildMailto,
  emptyInquiry,
  inquiryOptions,
  resolveContactMode,
  validateInquiry,
  type InquiryFields,
} from "@/lib/contact";
import { cn } from "@/lib/utils";

type Status =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "demo" }
  | { type: "mailto" }
  | { type: "success" }
  | { type: "error" };

export function ContactForm({
  open,
  serviceId,
}: {
  open: boolean;
  serviceId: string | null;
}) {
  const [fields, setFields] = useState<InquiryFields>(emptyInquiry);
  const [errors, setErrors] = useState<Partial<Record<"name" | "phone" | "email", string>>>({});
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [session, setSession] = useState<{ open: boolean; serviceId: string | null }>({
    open: false,
    serviceId: null,
  });
  const formId = useId();
  const mode = resolveContactMode();
  const copy = contactDrawerCopy.fields;
  const messages = contactDrawerCopy.messages;

  if (open !== session.open || serviceId !== session.serviceId) {
    setSession({ open, serviceId });
    if (open && !session.open) setStatus({ type: "idle" });
    if (open && serviceId) {
      setFields((current) => ({ ...current, service: serviceId }));
    }
  }

  const update = (key: keyof InquiryFields, value: string) => {
    setFields((current) => ({ ...current, [key]: value }));
    if (key === "name" || key === "phone" || key === "email") {
      setErrors((current) => ({ ...current, [key]: undefined }));
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateInquiry(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (mode === "demo") {
      setStatus({ type: "demo" });
      return;
    }

    if (mode === "mailto") {
      window.location.href = buildMailto(fields);
      setStatus({ type: "mailto" });
      return;
    }

    setStatus({ type: "submitting" });
    try {
      const response = await fetch(siteConfig.contactEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fields.name.trim(),
          phone: fields.phone.trim(),
          email: fields.email.trim(),
          service: fields.service,
          message: fields.message.trim(),
          company: siteConfig.companyName,
        }),
      });
      if (!response.ok) {
        setStatus({ type: "error" });
        return;
      }
      setStatus({ type: "success" });
      setFields(emptyInquiry);
    } catch {
      setStatus({ type: "error" });
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="mt-8 space-y-6">
      {mode === "demo" ? (
        <p className="border border-line bg-stone px-4 py-3 text-sm leading-relaxed text-ink">
          {messages.demoBefore}
        </p>
      ) : null}

      <Field
        id={`${formId}-name`}
        label={copy.name}
        value={fields.name}
        error={errors.name}
        autoComplete="name"
        placeholder={copy.placeholderName}
        onChange={(value) => update("name", value)}
      />
      <Field
        id={`${formId}-phone`}
        label={copy.phone}
        value={fields.phone}
        error={errors.phone}
        type="tel"
        autoComplete="tel"
        placeholder={copy.placeholderPhone}
        onChange={(value) => update("phone", value)}
      />
      <Field
        id={`${formId}-email`}
        label={copy.email}
        value={fields.email}
        error={errors.email}
        type="email"
        autoComplete="email"
        placeholder={copy.placeholderEmail}
        onChange={(value) => update("email", value)}
      />

      <label className="block" htmlFor={`${formId}-service`}>
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-olive">{copy.direction}</span>
        <span className="relative mt-2 block">
          <select
            id={`${formId}-service`}
            value={fields.service}
            onChange={(event) => update("service", event.target.value)}
            className="w-full appearance-none border-b border-ink/30 bg-transparent py-3 pr-8 text-lg text-ink outline-none focus:border-ink"
          >
            <option value="">{copy.placeholderSelect}</option>
            {inquiryOptions().map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-olive" aria-hidden />
        </span>
      </label>

      <label className="block" htmlFor={`${formId}-message`}>
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-olive">{copy.details}</span>
        <textarea
          id={`${formId}-message`}
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
          rows={5}
          placeholder={copy.placeholderMessage}
          className="mt-2 w-full resize-y border-b border-ink/30 bg-transparent py-3 text-base leading-relaxed text-ink outline-none placeholder:text-ink/35 focus:border-ink"
        />
      </label>

      <button
        type="submit"
        disabled={status.type === "submitting"}
        className="lift inline-flex min-h-12 w-full items-center justify-center bg-graphite px-5 text-[13px] font-semibold tracking-[0.14em] text-ivory hover:bg-deep disabled:opacity-60"
      >
        {status.type === "submitting" ? "ИЛГЭЭЖ БАЙНА" : copy.submit}
      </button>

      {status.type !== "idle" && status.type !== "submitting" ? (
        <p
          role="status"
          className={cn(
            "border px-4 py-3 text-sm leading-relaxed",
            status.type === "success"
              ? "border-olive bg-olive-soft text-ink"
              : "border-line bg-stone text-ink",
          )}
        >
          {status.type === "demo" && messages.demoAfter}
          {status.type === "mailto" && messages.mailto}
          {status.type === "success" && messages.success}
          {status.type === "error" && messages.error}
        </p>
      ) : null}

      <div className="space-y-1 pt-2 text-sm text-ink/70">
        <a className="block hover:text-ink" href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
          {siteConfig.phone}
        </a>
        <a className="block hover:text-ink" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>
        <p>{siteConfig.address}</p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
}) {
  const errorId = `${id}-error`;
  return (
    <label className="block" htmlFor={id}>
      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-olive">{label}</span>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-lg text-ink outline-none placeholder:text-ink/35 focus:border-ink"
      />
      {error ? (
        <span id={errorId} className="mt-2 block text-sm text-[#7A3E32]">
          {error}
        </span>
      ) : null}
    </label>
  );
}
