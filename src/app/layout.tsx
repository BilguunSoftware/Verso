import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { DM_Mono, Manrope, Noto_Serif } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import { siteConfig } from "@/config/site";
import { theme } from "@/config/theme";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  variable: "--font-noto",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm",
  display: "swap",
});

const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");
const canonical = siteConfig.seo.canonicalUrl.trim();

export const metadata: Metadata = {
  metadataBase: new URL(canonical || siteUrl),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  applicationName: siteConfig.companyName,
  alternates: canonical ? { canonical } : undefined,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    locale: "mn_MN",
    type: "website",
    siteName: siteConfig.companyName,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 2000,
        height: 1300,
        alt: siteConfig.seo.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
};

const themeStyle = {
  "--graphite": theme.darkGraphite,
  "--deep": theme.deepGreen,
  "--ink": theme.ink,
  "--olive": theme.mutedOlive,
  "--ivory": theme.paper,
  "--stone": theme.softStone,
  "--champagne": theme.champagne,
  "--olive-soft": theme.softOliveSurface,
  "--olive-surface": theme.oliveSurface,
  "--line": theme.border,
  "--contact": theme.contactChampagne,
  "--chapter": theme.chapter,
  "--work": theme.workSurface,
} as CSSProperties;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="mn"
      className={`${manrope.variable} ${notoSerif.variable} ${dmMono.variable} h-full antialiased`}
      style={themeStyle}
    >
      <body className="min-h-full bg-ivory font-sans text-ink antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
