"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { AtSign, MessageCircle, Star, Link2, UtensilsCrossed } from "lucide-react";

const DESTINATIONS = [
  { icon: AtSign, label: "אינסטגרם", pos: "top-[6%] -left-6 md:-left-10" },
  { icon: MessageCircle, label: "WhatsApp", pos: "top-[32%] -right-8 md:-right-14" },
  { icon: Star, label: "ביקורות בגוגל", pos: "bottom-[26%] -left-10 md:-left-16" },
  { icon: UtensilsCrossed, label: "תפריט", pos: "bottom-[4%] -right-4 md:-right-8" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-signal/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-paper-dim"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            מודפס בתלת־ממד · בעיצוב אישי מלא
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl font-extrabold leading-[1.15] tracking-tight text-paper sm:text-5xl md:text-6xl"
          >
            לא עוד מעמד
            <span className="ltr-inline mx-2 text-signal">QR</span>
            <br />
            מוצר מיתוג לשולחן שלכם.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-paper-dim"
          >
            TAPX מעצבת ומייצרת מעמדי{" "}
            <span className="ltr-inline">QR</span> ו-
            <span className="ltr-inline">NFC</span> בהתאמה אישית מלאה ללוגו,
            לצבעים ולסגנון של העסק שלכם — לא עוד מדבקה גנרית על הדלפק.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="rounded-full bg-signal px-7 py-3.5 text-base font-bold text-on-signal transition-transform hover:scale-105"
            >
              בואו נעצב את שלכם
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-base font-medium text-paper transition-colors hover:text-signal"
            >
              <Link2 className="h-4 w-4" />
              צפו בעבודות שלנו
            </a>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[28px] border border-line bg-ink-soft shadow-[0_30px_90px_-35px_rgba(28,24,21,0.35)]"
          >
            <Image
              src="/images/product-2.jpg"
              alt="מעמד TAPX מודפס בתלת־ממד בעיצוב אישי, בבית קפה Nook"
              width={720}
              height={900}
              priority
              style={{ objectPosition: "38% 42%" }}
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>

          {DESTINATIONS.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.12, ease: "backOut" }}
              className={`absolute ${d.pos} hidden items-center gap-2 rounded-full border border-line bg-ink-soft/95 px-3 py-2 text-xs font-medium text-paper shadow-lg backdrop-blur sm:flex`}
            >
              <d.icon className="h-3.5 w-3.5 text-signal" />
              {d.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
