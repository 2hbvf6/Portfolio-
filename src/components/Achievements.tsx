import { achievements } from "@/data/content";

const GROUPS: { key: keyof typeof achievements; label: string }[] = [
  { key: "technical", label: "Technical" },
  { key: "academic", label: "Academic" },
  { key: "certifications", label: "Certifications" },
  { key: "music", label: "Music & Performance" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="border-t border-line bg-white/40">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-3xl text-ink">Achievements</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {GROUPS.map((group) => (
            <div
              key={group.key}
              className="rounded-xl border border-line bg-paper p-5"
            >
              <h3 className="text-sm text-signal">{group.label}</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink-soft">
                {achievements[group.key].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
