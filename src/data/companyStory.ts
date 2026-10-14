import type { Heading } from "@/types/content";

export const companyStory = {
  indexLabel: "01 / A DIFFERENT PERSPECTIVE",
  secondaryLabel: "OUR PHILOSOPHY",
  overline: "THE THOUGHT BEHIND THE COMPANY",
  heading: [
    [{ text: "Илүү том" }],
    [{ text: "зүйл " }, { text: "хамтдаа", highlight: true }],
    [{ text: "бүтээгддэг." }],
  ] satisfies Heading,
  description:
    "Бид компаниа зөвхөн үзүүлж буй үйлчилгээгээр бус, хамтран бүтээдэг үнэ цэнэ, ажилдаа хандах хандлагаараа тодорхойлдог.",
  image: "/images/editorial/workspace.jpg",
  imageAlt: "Цонхны гэрэлтэй орчин үеийн ажлын ширээ. Загварын зураг.",
  caption: "FIG. 001 / SPACE FOR THINKING",
  panel: {
    kicker: "THE VERSO MINDSET / 01",
    heading: [
      [{ text: "Санаанаас" }],
      [{ text: "үнэ цэн рүү.", highlight: true }],
    ] satisfies Heading,
    body: "Сайн шийдэл зөв асуултаас эхэлдэг. Бид аливаа боломжийг олон өнцгөөс харж, хэрэгжих бодит замыг эрэлхийлдэг.",
    arrowHref: "#work",
    arrowLabel: "Үйл ажиллагааны хэсэг рүү",
  },
};
