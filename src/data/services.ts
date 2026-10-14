import type { Service } from "@/types/content";

export const servicesIntro = {
  indexLabel: "02 / HOW WE MAKE AN IMPACT",
  secondaryLabel: "OUR DISCIPLINES",
  overline: "FROM IDEAS TO REAL IMPACT",
  headline: [
    [{ text: "САНААГ" }],
    [{ text: "БОДИТ", highlight: true }],
    [{ text: "БОЛГОНО." }],
  ],
  description:
    "Бидний үйл ажиллагаа нэг зарчмаар холбогдоно: ойлгох, шийдэх, хэрэгжүүлэх.",
  ctaLabel: "ХАМТРАН АЖИЛЛАХ",
};

export const services: Service[] = [
  {
    id: "strategy",
    discipline: "DISCIPLINE / 01",
    nameLines: ["Стратеги", "төлөвлөлт"],
    category: "STRATEGY",
    selectedLabel: "SELECTED / STRATEGY",
    number: "01",
    titleLines: ["Алсын хараанаас", "тодорхой төлөвлөгөө."],
    description:
      "Зорилго, нөөц, боломжийг нэгтгэж, үр дүнд хүрэх ойлгомжтой чиглэл боловсруулна.",
    image: "/images/services/strategy.jpg",
    imageAlt: "Төлөвлөлтийн ханан дээр хамтдаа ярилцаж буй баг. Загварын зураг, бодит ажилтнууд биш.",
    imagePosition: "center 40%",
    inquiryLabel: "Стратеги төлөвлөлт",
  },
  {
    id: "operations",
    discipline: "DISCIPLINE / 02",
    nameLines: ["Үйл ажиллагаа", "ба шийдэл"],
    category: "OPERATIONS",
    selectedLabel: "SELECTED / OPERATIONS",
    number: "02",
    titleLines: ["Оновчтой шийдэл.", "Уялдаатай ажиллагаа."],
    description:
      "Үйл ажиллагааг сайжруулж, хүмүүс болон нөөцийг нэг зорилгод чиглүүлэх боломжийг эрэлхийлнэ.",
    image: "/images/services/operations.jpg",
    imageAlt: "Шилэн ханатай орчин үеийн оффисын коридор. Загварын зураг.",
    imagePosition: "center center",
    inquiryLabel: "Үйл ажиллагааны шийдэл",
  },
  {
    id: "delivery",
    discipline: "DISCIPLINE / 03",
    nameLines: ["Төсөл", "хэрэгжүүлэлт"],
    category: "DELIVERY",
    selectedLabel: "SELECTED / DELIVERY",
    number: "03",
    titleLines: ["Санааг бодит", "ажил болгоно."],
    description: "Төслийг үе шаттай хэрэгжүүлж, үйл явц болон үр дүнг хамтдаа үнэлнэ.",
    image: "/images/services/delivery.jpg",
    imageAlt: "Ширээний ард төслийн талаар ярилцаж буй хүмүүс. Загварын зураг, бодит ажилтнууд биш.",
    imagePosition: "center center",
    inquiryLabel: "Төсөл хэрэгжүүлэлт",
  },
];

export const otherInquiry = {
  id: "other",
  inquiryLabel: "Бусад",
};
