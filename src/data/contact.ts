import type { Heading } from "@/types/content";

export const contactFinale = {
  indexLabel: "04 / A NEW CHAPTER",
  secondaryLabel: "THE INVITATION IS OPEN",
  overline: "LET'S WRITE SOMETHING NEW.",
  heading: [
    [{ text: "ДАРААГИЙН" }],
    [{ text: "БОЛОМЖИЙГ", highlight: true }],
    [{ text: "ХАМТДАА." }],
  ] satisfies Heading,
  description: "Шинэ санаа, төсөл, хамтын ажиллагааны талаар ярилцахад бид нээлттэй.",
  ctaLabel: "ЯРИЛЦЛАГА ЭХЛҮҮЛЭХ",
  mark: "VERSO / MORE THAN A COMPANY",
  closing: "YOUR STORY STARTS HERE.",
};

export const contactDrawerCopy = {
  kicker: "VERSO / NEW CONVERSATION",
  heading: [
    [{ text: "Дараагийн" }],
    [{ text: "алхмыг", highlight: true }],
    [{ text: "хамтдаа." }],
  ] satisfies Heading,
  fields: {
    name: "Нэр",
    phone: "Утасны дугаар",
    email: "И-мэйл",
    direction: "Хамтран ажиллах чиглэл",
    details: "Дэлгэрэнгүй мэдээлэл",
    submit: "Илгээх",
    placeholderName: "Таны нэр",
    placeholderPhone: "9911 2233",
    placeholderEmail: "name@company.com",
    placeholderMessage: "Төсөл, хугацаа, хүлээлтийн талаар товч бичнэ үү.",
    placeholderSelect: "Сонгох",
  },
  messages: {
    name: "Нэрээ оруулна уу.",
    phone: "Утасны дугаараа оруулна уу.",
    email: "И-мэйл хаяг буруу байна.",
    demoBefore: "Энэ загвар холболтгүй. Илгээлт хадгалагдахгүй, илгээгдэхгүй.",
    demoAfter: "Юу ч илгээгдээгүй. Энэ бол загвар горим бөгөөд таны мэдээлэл хадгалагдаагүй.",
    mailto: "И-мэйл программ нээгдлээ. Захидал илгээгдсэн эсэхийг бид баталгаажуулаагүй. Илгээлт таны и-мэйл үйлчилгээнээс хамаарна.",
    success: "Таны хүсэлт амжилттай илгээгдлээ. Бид тантай холбогдоно.",
    error: "Илгээх үед алдаа гарлаа. Дахин оролдоно уу, эсвэл шууд и-мэйлээр холбогдоно уу.",
  },
};
