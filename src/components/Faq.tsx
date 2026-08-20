import { Plus } from "lucide-react";
import { FAQ } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <section id="faq" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-12 text-center">
          <span className="text-sm font-semibold text-signal">שאלות נפוצות</span>
          <h2 className="mt-3 text-3xl font-extrabold text-paper md:text-4xl">
            כל מה שרציתם לדעת
          </h2>
        </Reveal>

        <div className="divide-y divide-line border-y border-line">
          {FAQ.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.05}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-paper marker:content-none">
                  {item.q}
                  <Plus className="h-4 w-4 shrink-0 text-signal transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-paper-dim">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
