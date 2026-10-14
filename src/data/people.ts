import type { Heading } from "@/types/content";

export const people = {
  indexLabel: "03 / WHAT CONNECTS US",
  secondaryLabel: "THE HUMAN ELEMENT",
  overline: "MORE THAN A WORKPLACE",
  heading: [
    [{ text: "Хүмүүс" }],
    [{ text: "бидний", highlight: true }, { text: " хүч." }],
  ] satisfies Heading,
  description: "Хамтын ажиллагаа, нээлттэй харилцаа, итгэлцлээс шинэ боломжууд төрдөг.",
  images: [
    {
      src: "/images/people/connect.jpg",
      alt: "Хамтдаа компьютер дээр ажиллаж буй хүмүүс. Загварын зураг, бодит ажилтнууд биш.",
      caption: "01 / CONNECT",
      position: "center 30%",
    },
    {
      src: "/images/people/create.jpg",
      alt: "Гэрэлтэй хурлын өрөө, орчин үеийн тавилгатай. Загварын зураг.",
      caption: "02 / CREATE",
      position: "center center",
    },
  ],
  quote: {
    kicker: "A HUMAN WAY OF WORKING",
    heading: [
      [{ text: "Сайн бизнес" }],
      [{ text: "сайн хүмүүсээс", highlight: true }],
      [{ text: "эхэлнэ." }],
    ] satisfies Heading,
    linkLabel: "VERSO / OUR BELIEF",
    linkHref: "#contact",
  },
};
