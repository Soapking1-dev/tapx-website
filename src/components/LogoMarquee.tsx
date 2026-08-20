import Image from "next/image";
import { GALLERY } from "@/lib/data";

// Tight crops zoomed in on each stand's actual logo/nameplate, cropped from
// the same real product photos used in the gallery — not external logos,
// so there's zero risk of showing the wrong business.
const LOGO_CROPS: Record<string, { focus: string; zoom: number }> = {
  "nook-cafe": { focus: "42% 14%", zoom: 2.4 },
  hapina: { focus: "45% 12%", zoom: 2.2 },
  "get-phone": { focus: "45% 18%", zoom: 2.2 },
  "hummus-place": { focus: "50% 10%", zoom: 2.6 },
  "popsicle-shop": { focus: "50% 15%", zoom: 2.4 },
};

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
          {items.map((item, i) => {
            const crop = LOGO_CROPS[item.id];
            return (
              <div
                key={`${item.id}-${i}`}
                title={item.name}
                className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-line bg-ink shadow-sm"
              >
                <Image
                  src={item.image}
                  alt={`הלוגו של ${item.name}, מוטבע על מעמד TAPX`}
                  fill
                  sizes="80px"
                  style={{
                    objectPosition: crop?.focus ?? "center",
                    transform: `scale(${crop?.zoom ?? 1.6})`,
                  }}
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
