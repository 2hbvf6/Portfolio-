import { education, experience } from "@/data/content";

export default function Timeline() {
  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto grid max-w-5xl gap-14 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl text-ink">
            Experience &amp; Internships
          </h2>
          <ol className="mt-8 space-y-8 border-l border-line pl-6">
            {experience.map((item) => (
              <li key={item.org} className="relative">
                <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-signal" />
                <div className="text-ink">{item.role}</div>
                <div className="text-sm text-signal">{item.org}</div>
                <div className="text-xs text-ink-soft/70">
                  {item.duration}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.summary}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="font-display text-3xl text-ink">Education</h2>
          <ol className="mt-8 space-y-8 border-l border-line pl-6">
            {education.map((item) => (
              <li key={item.degree} className="relative">
                <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-wine" />
                <div className="text-ink">{item.degree}</div>
                <div className="text-sm text-wine">{item.institution}</div>
                <div className="text-xs text-ink-soft/70">
                  {item.duration}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
