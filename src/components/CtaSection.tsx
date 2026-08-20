"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

// NOTE: this form has no backend wired up yet — it's a placeholder UI.
// Point the `action`/submit handler at TAPX's real contact channel
// (e.g. the same Shopify contact endpoint tapx.shop/pages/contact uses,
// or an email/WhatsApp API) before going live.
export function CtaSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-3xl font-extrabold leading-tight text-paper md:text-5xl">
            העסק שלכם לא נראה כמו כולם.
            <br />
            גם המעמד שלו לא צריך להיראות ככה.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 grid gap-8 md:grid-cols-2 md:text-right">
          <div className="flex flex-col justify-center">
            <p className="text-paper-dim">
              ספרו לנו על העסק — הלוגו, הצבעים והמקום שבו המעמד יעמוד — ונחזור
              אליכם עם הצעת עיצוב.
            </p>
            <p className="mt-4 text-sm text-paper-dim">
              מחיר מעמד בעיצוב אישי מלא:{" "}
              <span className="font-bold text-paper">350 ₪</span>
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="flex flex-col gap-3 rounded-3xl border border-line bg-ink-soft p-6"
          >
            {sent ? (
              <p className="py-8 text-center text-paper">
                תודה! קיבלנו את הפנייה ונחזור אליכם בהקדם.
              </p>
            ) : (
              <>
                <input
                  required
                  placeholder="שם"
                  className="rounded-xl border border-line bg-ink px-4 py-3 text-sm text-paper outline-none focus:border-signal"
                />
                <input
                  required
                  type="email"
                  placeholder="אימייל"
                  className="rounded-xl border border-line bg-ink px-4 py-3 text-sm text-paper outline-none focus:border-signal"
                />
                <input
                  type="tel"
                  placeholder="טלפון (לא חובה)"
                  className="rounded-xl border border-line bg-ink px-4 py-3 text-sm text-paper outline-none focus:border-signal"
                />
                <textarea
                  placeholder="ספרו לנו על העסק שלכם"
                  rows={3}
                  className="resize-none rounded-xl border border-line bg-ink px-4 py-3 text-sm text-paper outline-none focus:border-signal"
                />
                <button
                  type="submit"
                  className="mt-1 rounded-full bg-signal py-3 text-sm font-bold text-on-signal transition-transform hover:scale-[1.02]"
                >
                  שליחה
                </button>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
