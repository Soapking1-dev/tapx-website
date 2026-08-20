import Image from "next/image";
import { GALLERY } from "@/lib/data";
import { Reveal } from "./Reveal";

const SPAN = [
  "md:col-span-3 md:row-span-2",
  "md:col-span-3 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-2 md:row-span-1",
];

const ALSO_FOR = ["מסעדות", "ברים", "מכוני כושר", "מספרות", "קליניקות", "בתי מלון"];

export function Gallery() {
  return (
    <section id="work" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-sm font-semibold text-signal">עבודות אמיתיות</span>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-paper md:text-4xl">
            כל מעמד יוצא אחר לגמרי — כי כל עסק אחר לגמרי.
          </h2>
          <p className="mt-4 max-w-xl text-paper-dim">
            הפרויקטים שלמטה בוצעו בפועל עבור עסקים אמיתיים. אין כאן הדמיות —
            אלה מעמדים שיצאו לשטח ועובדים היום.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:auto-rows-[220px] md:grid-cols-6">
          {GALLERY.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.06}
              className={`group relative overflow-hidden rounded-3xl border border-line bg-ink-soft ${SPAN[i] ?? "md:col-span-2"}`}
            >
              <Image
                src={item.image}
                alt={`מעמד TAPX עבור ${item.name} — ${item.category}`}
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                style={{ objectPosition: item.focus }}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="mb-2 flex gap-1.5">
                  {item.colors.map((c) => (
                    <span
                      key={c}
                      className="h-2.5 w-2.5 rounded-full ring-1 ring-white/30"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
                <h3 className="ltr-inline text-lg font-bold text-paper">
                  {item.name}
                </h3>
                <p className="text-xs text-paper-dim">{item.category} · {item.link}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-wrap items-center gap-3 border-t border-line pt-8">
          <span className="text-sm text-paper-dim">מתאים גם עבור:</span>
          {ALSO_FOR.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-3 py-1 text-xs text-paper-dim"
            >
              {t}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
