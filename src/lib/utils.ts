export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function padNumber(value: number) {
  return String(value).padStart(2, "0");
}
