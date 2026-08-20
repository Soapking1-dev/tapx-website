import { ScanLine, Nfc, ArrowLeft } from "lucide-react";
import { Reveal } from "./Reveal";

const ROUTES = [
  "אינסטגרם",
  "WhatsApp",
  "ביקורות בגוגל",
  "תפריט",
  "אתר העסק",
];

export function QrNfc() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <span className="text-sm font-semibold text-signal">
            <span className="ltr-inline">QR</span> +{" "}
            <span className="ltr-inline">NFC</span>
          </span>
          <h2 className="mx-auto mt-3 max-w-xl text-3xl font-extrabold leading-tight text-paper md:text-4xl">
            סורקים או נוגעים. תמיד מגיעים ליעד הנכון.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <Reveal className="rounded-3xl border border-line bg-ink-soft p-8 text-center">
            <ScanLine className="mx-auto mb-4 h-9 w-9 text-signal" />
            <h3 className="text-lg font-bold text-paper">סורקים</h3>
            <p className="mt-2 text-sm text-paper-dim">
              המצלמה בטלפון קוראת את קוד ה־<span className="ltr-inline">QR</span> ופותחת
              את היעד — בלי אפליקציה נוספת.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="flex justify-center">
            <div className="hidden h-px w-16 bg-line md:block" />
            <ArrowLeft className="h-6 w-6 rotate-180 text-paper-dim md:hidden" />
          </Reveal>

          <Reveal delay={0.15} className="rounded-3xl border border-line bg-ink-soft p-8 text-center">
            <Nfc className="mx-auto mb-4 h-9 w-9 text-signal" />
            <h3 className="text-lg font-bold text-paper">נוגעים</h3>
            <p className="mt-2 text-sm text-paper-dim">
              קירוב הטלפון למעמד מפעיל את שבב ה־<span className="ltr-inline">NFC</span> ומוביל
              ליעד באופן מיידי.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {ROUTES.map((r) => (
            <span
              key={r}
              className="rounded-full border border-line px-4 py-2 text-sm text-paper-dim"
            >
              {r}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
