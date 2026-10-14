export type ContactMethod = "demo" | "mailto" | "formspree";

export type SocialLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  companyName: "VERSO",
  companyTagline: "A Different Way Forward.",
  companyDescription:
    "VERSO нь бизнес, хүмүүс, санааг холбож, илүү өргөн боломжийг хамтдаа бүтээдэг бие даасан компанийн танилцуулга юм.",
  companyIndustry: "Компанийн танилцуулга",
  logoText: "verso",
  galleryName: "The Moving Gallery",
  phone: "+976 7700 0000",
  email: "hello@verso.example",
  address: "Улаанбаатар хот, Монгол Улс",
  socialLinks: [] as SocialLink[],
  /**
   * demo — nothing is delivered; the form says so.
   * mailto — opens the visitor's email app. Delivery is not confirmed.
   * formspree — posts to contactEndpoint. Success is shown only after a real 2xx response.
   */
  contactMethod: "demo" as ContactMethod,
  contactEndpoint: "",
  year: "2026",
  copyright: "© 2026 VERSO — ALL RIGHTS RESERVED",
  creditLabel: "WEBSITE BY BILGUUNSOFT",
  creditUrl: "https://bilguunsoft.mn",
  siteUrl: "https://verso.example",
  seo: {
    title: "VERSO — Өөр өнцөг. Илүү өргөн боломж.",
    description:
      "VERSO нь бизнес, хүмүүс, санааг холбож, илүү өргөн боломжийг хамтдаа бүтээдэг. Компанийн танилцуулга, үйл ажиллагаа, хамтын ажиллагаа.",
    ogImage: "/images/carousel/perspective.jpg",
    /** Set a real absolute URL to emit a canonical link. Leave empty to omit it. */
    canonicalUrl: "",
  },
  carousel: {
    autoplay: false,
    intervalMs: 7000,
    featureLabel: "FEATURE STORY",
    storiesLabel: "THE COMPANY STORIES",
    verticalLabel: "AN INDEPENDENT COMPANY PROFILE — 2026",
  },
  motionStorageKey: "verso-motion",
};
