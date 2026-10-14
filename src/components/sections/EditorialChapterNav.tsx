import { ArrowUpRight } from "lucide-react";
import { chapters, volume } from "@/data/navigation";

export function EditorialChapterNav() {
  return (
    <section className="border-b border-line bg-chapter" aria-label="Бүлгүүд">
      <div className="mx-auto flex max-w-[1480px] flex-col gap-6 px-4 py-6 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-7">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-olive sm:text-xs">
            {volume.kicker}
          </p>
          <p className="mt-2 font-sans text-lg font-semibold tracking-[-0.03em] text-ink sm:text-xl">
            {volume.statement}
          </p>
        </div>
        <nav className="flex w-full min-w-0 gap-0 overflow-x-auto" aria-label="Бүлэг рүү шилжих">
          {chapters.map((chapter) => (
            <a
              key={chapter.href}
              href={chapter.href}
              className="group flex min-h-11 min-w-[11.5rem] items-center justify-between gap-4 border-l border-line px-4 py-2 first:border-l-0 first:pl-0"
            >
              <span>
                <span className="block font-mono text-[11px] tracking-[0.16em] text-olive">
                  {chapter.index}
                </span>
                <span className="mt-1 block text-sm font-semibold tracking-[0.08em] text-ink">
                  {chapter.label}
                </span>
              </span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-olive transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
