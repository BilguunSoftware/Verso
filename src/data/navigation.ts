export type NavItem = {
  label: string;
  href: string;
};

export const headerNav: NavItem[] = [
  { label: "Түүх", href: "#story" },
  { label: "Үйл ажиллагаа", href: "#work" },
  { label: "Хүмүүс", href: "#people" },
];

export const chapters: { index: string; label: string; href: string }[] = [
  { index: "01", label: "THE THINKING", href: "#story" },
  { index: "02", label: "THE WORK", href: "#work" },
  { index: "03", label: "THE PEOPLE", href: "#people" },
];

export const footerNav: NavItem[] = [
  { label: "Нүүр", href: "#top" },
  { label: "Бидний тухай", href: "#story" },
  { label: "Үйл ажиллагаа", href: "#work" },
  { label: "Хүмүүс", href: "#people" },
  { label: "Холбогдох", href: "#contact" },
];

export const volume = {
  kicker: "VOL. 03 / THE STORIES",
  statement: "BEYOND ORDINARY BUSINESS.",
};
