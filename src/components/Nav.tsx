"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="ltr-inline text-lg font-extrabold tracking-tight text-paper">
          TAPX
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-paper-dim transition-colors hover:text-paper"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-signal px-5 py-2 text-sm font-bold text-on-signal transition-transform hover:scale-105 md:inline-block"
        >
          בואו נעצב את שלכם
        </a>

        <button
          aria-label="פתיחת תפריט"
          className="grid h-9 w-9 place-items-center rounded-full border border-line text-paper md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute inset-x-0 top-0 h-px bg-paper transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-px bg-paper transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-base text-paper"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-signal px-5 py-2.5 text-center text-sm font-bold text-on-signal"
              >
                בואו נעצב את שלכם
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
