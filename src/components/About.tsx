import Image from "next/image";
import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-white/40">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line">
          <Image
            src="/images/prof-4-portrait.jpg"
            alt="Ipsita Saha, indoor portrait"
            fill
            sizes="(min-width: 768px) 20rem, 90vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl text-ink">About</h2>
          <div className="mt-5 space-y-4 text-ink-soft">
            {about.professional.split("\n\n").map((para, i) => (
              <p key={i} className="leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
