import Image from "next/image";
import { Star } from "lucide-react";
import { TESTIMONIAL } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Testimonial() {
  return (
    <section className="px-6 py-20">
      <Reveal className="mx-auto max-w-3xl rounded-3xl border border-line bg-ink-soft p-10 text-center md:p-14">
        <div className="mb-5 flex justify-center gap-1">
          {Array.from({ length: TESTIMONIAL.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-signal text-signal" />
          ))}
        </div>
        <p className="text-lg leading-relaxed text-paper md:text-xl">
          &ldquo;{TESTIMONIAL.quote}&rdquo;
        </p>
        <div className="mt-7 flex items-center justify-center gap-3">
          <Image
            src={TESTIMONIAL.avatar}
            alt={TESTIMONIAL.author}
            width={36}
            height={36}
            className="rounded-full border border-line object-cover"
          />
          <span className="text-sm font-semibold text-paper-dim">
            {TESTIMONIAL.author}
          </span>
        </div>
      </Reveal>
    </section>
  );
}
