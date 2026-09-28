const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#music", label: "Beyond Technology" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-ink"
        >
          Ipsita Saha
        </a>
        <nav aria-label="Primary" className="hidden gap-6 text-sm md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink-soft transition-colors hover:text-signal"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#resume"
          className="rounded-full bg-signal px-4 py-2 text-sm text-paper transition-transform hover:-translate-y-0.5"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
