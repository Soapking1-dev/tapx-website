"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { AtSign, MessageCircle, Star, Globe } from "lucide-react";
import { Reveal } from "./Reveal";
import { ColorWheel } from "./ColorWheel";

const COLORS = [
  { name: "נחושת", value: "#a8552b" },
  { name: "שחור פחם", value: "#1a1a1a" },
  { name: "קרם", value: "#e9dfce" },
  { name: "ירוק כהה", value: "#28402f" },
  { name: "תכלת", value: "#8fb9c9" },
];

const LINK_OPTIONS = [
  { key: "ig", label: "אינסטגרם", icon: AtSign },
  { key: "wa", label: "WhatsApp", icon: MessageCircle },
  { key: "gg", label: "ביקורות", icon: Star },
  { key: "site", label: "אתר", icon: Globe },
];

export function Customization() {
  const [color, setColor] = useState(COLORS[0].value);
  const [name, setName] = useState("העסק שלכם");
  const [links, setLinks] = useState<string[]>(["ig", "wa"]);

  function toggleLink(key: string) {
    setLinks((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  }

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <Reveal>
          <span className="text-sm font-semibold text-signal">התאמה אישית</span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-paper md:text-4xl">
            זה לא עוד תבנית. זה נבנה סביב העסק שלכם.
          </h2>
          <p className="mt-5 max-w-md text-paper-dim">
            צבע, שם, לוגו והקישורים — הכול מותאם אישית לכל לקוח. זו רק
            תצוגה מקדימה קלה כדי להמחיש את העיקרון; העיצוב המלא נבנה יחד
            איתכם בשיחה.
          </p>

          <div className="mt-8">
            <label className="mb-2 block text-xs font-medium text-paper-dim">
              שם העסק על המעמד
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value.slice(0, 18))}
              className="w-full max-w-xs rounded-xl border border-line bg-ink-soft px-4 py-2.5 text-paper outline-none focus:border-signal"
            />
          </div>

          <div className="mt-6">
            <span className="mb-2 block text-xs font-medium text-paper-dim">צבע</span>
            <div className="flex flex-wrap items-start gap-6">
              <div className="flex gap-3">
                {COLORS.map((c) => (
                  <button
                    key={c.value}
                    aria-label={c.name}
                    onClick={() => setColor(c.value)}
                    className="h-9 w-9 rounded-full ring-2 ring-offset-2 ring-offset-ink transition-transform hover:scale-110"
                    style={{
                      backgroundColor: c.value,
                      ["--tw-ring-color" as string]:
                        color === c.value ? "var(--color-signal)" : "transparent",
                    }}
                  />
                ))}
              </div>
              <ColorWheel onChange={setColor} />
            </div>
          </div>

          <div className="mt-6">
            <span className="mb-2 block text-xs font-medium text-paper-dim">קישורים על הבסיס</span>
            <div className="flex flex-wrap gap-2">
              {LINK_OPTIONS.map((l) => (
                <button
                  key={l.key}
                  onClick={() => toggleLink(l.key)}
                  className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition-colors ${
                    links.includes(l.key)
                      ? "border-signal bg-signal/10 text-paper"
                      : "border-line text-paper-dim"
                  }`}
                >
                  <l.icon className="h-3.5 w-3.5" />
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mx-auto flex w-full max-w-xs justify-center">
          <motion.div
            animate={{ backgroundColor: color }}
            transition={{ duration: 0.4 }}
            className="relative flex aspect-[3/4] w-full flex-col items-center justify-between rounded-t-[40px] rounded-b-2xl border border-black/10 p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]"
          >
            <span className="ltr-inline mt-2 max-w-full truncate text-center text-lg font-extrabold text-mock-ink/90">
              {name || "העסק שלכם"}
            </span>

            <div className="grid h-28 w-28 place-items-center rounded-xl bg-white/95 p-2 shadow-inner">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #111 0 4px, transparent 4px 8px), repeating-linear-gradient(-45deg, #111 0 4px, transparent 4px 8px)",
                  backgroundBlendMode: "multiply",
                  opacity: 0.85,
                }}
              />
            </div>

            <div className="flex gap-2 rounded-full bg-black/15 px-3 py-2 backdrop-blur">
              {LINK_OPTIONS.filter((l) => links.includes(l.key)).map((l) => (
                <span
                  key={l.key}
                  className="grid h-7 w-7 place-items-center rounded-full bg-white/90 text-mock-ink"
                >
                  <l.icon className="h-3.5 w-3.5" />
                </span>
              ))}
              {links.length === 0 && (
                <span className="px-2 text-[11px] text-mock-ink/60">בחרו קישור</span>
              )}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
