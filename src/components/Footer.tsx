import { NAV_LINKS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-paper-dim md:flex-row">
        <span className="ltr-inline text-base font-extrabold text-paper">TAPX</span>

        <ul className="flex flex-wrap items-center justify-center gap-6">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-paper">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <span>© {new Date().getFullYear()} TAPX. כל הזכויות שמורות.</span>
      </div>
    </footer>
  );
}
