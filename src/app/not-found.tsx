import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center bg-ivory px-6 text-ink">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">404</p>
      <h1 className="mt-4 font-sans text-5xl font-semibold tracking-[-0.045em]">
        Хуудас олдсонгүй.
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/75">
        Холбоос өөрчлөгдсөн эсвэл хуудас байхгүй байна.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center bg-graphite px-5 text-sm font-semibold tracking-[0.12em] text-ivory"
      >
        {siteConfig.companyName} НҮҮР
      </Link>
    </main>
  );
}
