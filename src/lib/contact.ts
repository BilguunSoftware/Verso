import { siteConfig } from "@/config/site";
import { contactDrawerCopy } from "@/data/contact";
import { otherInquiry, services } from "@/data/services";

export type ContactMode = "demo" | "mailto" | "formspree";

export type InquiryFields = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export type FieldErrors = Partial<Record<"name" | "phone" | "email", string>>;

export const emptyInquiry: InquiryFields = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export function inquiryOptions() {
  return [
    ...services.map((service) => ({
      id: service.id,
      label: service.inquiryLabel,
    })),
    { id: otherInquiry.id, label: otherInquiry.inquiryLabel },
  ];
}

export function resolveContactMode(): ContactMode {
  const endpoint = siteConfig.contactEndpoint.trim();
  if (siteConfig.contactMethod === "formspree" && /^https:\/\/.+/i.test(endpoint)) {
    return "formspree";
  }
  if (siteConfig.contactMethod === "mailto" && siteConfig.email.includes("@")) {
    return "mailto";
  }
  return "demo";
}

export function validateInquiry(fields: InquiryFields): FieldErrors {
  const errors: FieldErrors = {};
  const copy = contactDrawerCopy.messages;
  if (!fields.name.trim()) errors.name = copy.name;
  const digits = fields.phone.replace(/\D/g, "");
  if (!fields.phone.trim() || digits.length < 6) errors.phone = copy.phone;
  if (
    fields.email.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())
  ) {
    errors.email = copy.email;
  }
  return errors;
}

export function inquiryLabel(serviceId: string) {
  return inquiryOptions().find((option) => option.id === serviceId)?.label ?? serviceId;
}

export function buildMailto(fields: InquiryFields) {
  const service = fields.service ? inquiryLabel(fields.service) : "—";
  const body = [
    `Нэр: ${fields.name.trim()}`,
    `Утас: ${fields.phone.trim()}`,
    `И-мэйл: ${fields.email.trim() || "—"}`,
    `Чиглэл: ${service}`,
    "",
    fields.message.trim(),
  ].join("\n");

  const params = new URLSearchParams({
    subject: `${siteConfig.companyName} — шинэ ярилцлага`,
    body,
  });

  return `mailto:${siteConfig.email}?${params.toString()}`;
}
