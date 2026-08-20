import Image from "next/image";
import { GALLERY } from "@/lib/data";

export function LogoMarquee() {
  const items = [...GALLERY, ...GALLERY]; // duplicated for a seamless loop

  return (
    <div className="border-y border-line bg-ink-soft/60 py-8">
      <p className="mb-6 text-center text-xs font-medium tracking-wide text-paper-dim">
        עסקים אמיתיים שעובדים עם TAPX
      </p>
      <div
        className="group relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to left, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to left, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="marquee-track flex w-max items-center gap-6 group-hover:[animation-play-state:paused]">
          {items.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              title={item.name}
              className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
            >
              <Image
                src={item.logo}
                alt={`הלוגו של ${item.name}`}
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
