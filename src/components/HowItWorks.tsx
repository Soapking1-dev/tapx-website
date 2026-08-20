import { PROCESS_STEPS } from "@/lib/data";
import { Reveal } from "./Reveal";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-sm font-semibold text-signal">איך זה עובד</span>
          <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight text-paper md:text-4xl">
            מהלוגו שלכם למעמד מוגמר — בארבעה שלבים.
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div className="absolute inset-x-0 top-6 hidden h-px bg-line md:block" />
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1} className="relative">
              <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-ink font-bold text-signal">
                {step.n}
              </div>
              <h3 className="text-lg font-bold text-paper">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper-dim">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
