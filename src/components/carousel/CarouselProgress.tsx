import { padNumber } from "@/lib/utils";

export function CarouselProgress({
  count,
  active,
}: {
  count: number;
  active: number;
}) {
  return (
    <div className="flex gap-1.5 px-3 pb-2.5 pt-1 sm:px-5 lg:px-8" aria-hidden>
      {Array.from({ length: count }, (_, index) => (
        <span
          key={padNumber(index + 1)}
          className={
            index === active
              ? "h-[3px] flex-1 bg-champagne transition-colors duration-500"
              : "h-[3px] flex-1 bg-white/30 transition-colors duration-500"
          }
        />
      ))}
    </div>
  );
}
