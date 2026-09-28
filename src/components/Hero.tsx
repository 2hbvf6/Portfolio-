import Image from "next/image";
import { heroTagline, person } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-5xl gap-10 px-6 pb-20 pt-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-24"
    >
      <div>
        <p className="text-sm text-signal">{person.role}</p>
        <h1 className="mt-3 font-display text-4xl leading-[1.1] text-ink md:text-6xl">
          Ipsita Saha
        </h1>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
          {heroTagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-ink px-5 py-3 text-sm text-paper transition-transform hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#resume"
            className="rounded-full border border-line px-5 py-3 text-sm text-ink transition-colors hover:border-signal hover:text-signal"
          >
            Download Resume
          </a>
        </div>
        <div className="mt-6 flex gap-5 text-sm text-ink-soft">
          <a
            href={person.github}
            className="underline decoration-line underline-offset-4 hover:text-signal"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="underline decoration-line underline-offset-4 hover:text-signal"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-line shadow-[0_20px_50px_-25px_rgba(18,24,28,0.4)]">
        <Image
          src="/images/prof-5-waterfront.jpg"
          alt="Ipsita Saha, portrait by the water"
          fill
          sizes="(min-width: 768px) 24rem, 90vw"
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
