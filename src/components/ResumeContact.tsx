import { contact, person, resume } from "@/data/content";

export function ResumeSection() {
  return (
    <section id="resume" className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-6 py-16">
        <h2 className="font-display text-3xl text-ink">Resume</h2>
        <p className="max-w-xl text-ink-soft">
          The résumé below reflects the experience described on this page.{" "}
          {resume.note}
        </p>
        <a
          href="/resume.pdf"
          className="rounded-full bg-ink px-5 py-3 text-sm text-paper transition-transform hover:-translate-y-0.5"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-line bg-white/40">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-display text-3xl text-ink">Contact</h2>
        <p className="mt-2 max-w-xl text-ink-soft">
          The quickest ways to reach me.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <a
            href={
              contact.email.startsWith("[")
                ? "#contact"
                : `mailto:${contact.email}`
            }
            className="rounded-full border border-line px-5 py-3 text-ink transition-colors hover:border-signal hover:text-signal"
          >
            {contact.email.startsWith("[") ? "Email — add address" : contact.email}
          </a>
          <a
            href={contact.github}
            className="rounded-full border border-line px-5 py-3 text-ink transition-colors hover:border-signal hover:text-signal"
          >
            GitHub
          </a>
          <a
            href={
              contact.linkedin.startsWith("[") ? "#contact" : contact.linkedin
            }
            className="rounded-full border border-line px-5 py-3 text-ink transition-colors hover:border-signal hover:text-signal"
          >
            {contact.linkedin.startsWith("[") ? "LinkedIn — add URL" : "LinkedIn"}
          </a>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line py-8 text-center text-xs text-ink-soft/70">
      © {new Date().getFullYear()} {person.name}. Built with Next.js and
      Tailwind CSS.
    </footer>
  );
}
