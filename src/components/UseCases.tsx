import { USE_CASES } from "@/lib/data";
import { Reveal } from "./Reveal";

export function UseCases() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-sm font-semibold text-signal">בשביל מה זה טוב</span>
          <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight text-paper md:text-4xl">
            תוצאה אחת ברורה בכל נגיעה.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map((u, i) => (
            <Reveal
              key={u.label}
              delay={i * 0.04}
              className="bg-ink p-6 transition-colors hover:bg-ink-soft"
            >
              <span className="text-2xl font-extrabold text-signal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-bold text-paper">{u.label}</h3>
              <p className="mt-1.5 text-xs text-paper-dim">{u.hint}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
