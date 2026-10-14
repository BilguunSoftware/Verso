import type { HeroSlide } from "@/types/content";

export const heroSlides: HeroSlide[] = [
  {
    id: "perspective",
    category: "01 — OUR PERSPECTIVE",
    overline: "A DIFFERENT WAY TO SEE BUSINESS",
    headline: [
      [{ text: "ӨӨР ӨНЦӨГ." }],
      [{ text: "ИЛҮҮ ӨРГӨН", highlight: true }],
      [{ text: "БОЛОМЖ." }],
    ],
    description:
      "Бидний хувьд бизнес бол зөвхөн зорилго биш. Хүмүүс, санаа, боломжийг холбох орон зай юм.",
    image: "/images/carousel/perspective.jpg",
    alt: "Доороос харагдсан шилэн оффисын цамхагууд. Загварын зураг.",
    imagePosition: "center 42%",
    thumbnailLabel: "01 / ХАРАА",
    shortLabel: "A NEW PERSPECTIVE",
    ctaLabel: "БИДНИЙ ТУХАЙ",
    ctaTarget: "#story",
  },
  {
    id: "people",
    category: "02 — THE PEOPLE",
    overline: "GOOD THINGS HAPPEN TOGETHER",
    headline: [
      [{ text: "ХҮМҮҮС." }],
      [{ text: "ХАМТДАА.", highlight: true }],
      [{ text: "ИЛҮҮ ХҮЧТЭЙ." }],
    ],
    description:
      "Сайн санаа, итгэлцэл, багийн нэгдэл — биднийг урагшлуулдаг хамгийн чухал үнэ цэнэ.",
    image: "/images/carousel/people.jpg",
    alt: "Нартай цонхны дэргэд хамтдаа ярилцаж буй хүмүүс. Загварын зураг, бодит ажилтнууд биш.",
    imagePosition: "center 36%",
    thumbnailLabel: "02 / ХҮМҮҮС",
    shortLabel: "PEOPLE MAKE POSSIBILITY",
    ctaLabel: "БИДНИЙ ТУХАЙ",
    ctaTarget: "#story",
  },
  {
    id: "future",
    category: "03 — OUR FUTURE",
    overline: "DESIGNING WHAT COMES NEXT",
    headline: [
      [{ text: "ӨНӨӨДРИЙН" }],
      [{ text: "САНААГААР", highlight: true }],
      [{ text: "МАРГААШИЙГ." }],
    ],
    description:
      "Бид боломж бүрийг шинэ эхлэл гэж харж, хэрэгжих шийдлээр илүү сайн ирээдүйг бүтээхийг зорьдог.",
    image: "/images/carousel/future.jpg",
    alt: "Гэгээтэй, өргөн орчин үеийн оффисын дотоод засал. Загварын зураг.",
    imagePosition: "center center",
    thumbnailLabel: "03 / ИРЭЭДҮЙ",
    shortLabel: "LOOKING BEYOND TODAY",
    ctaLabel: "БИДНИЙ ТУХАЙ",
    ctaTarget: "#story",
  },
];
