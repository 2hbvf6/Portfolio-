import { heroTagline, person } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 scale-105 bg-no-repeat"
        style={{
          backgroundImage: "url('/images/home-pic2.jpeg')",
          backgroundSize: "auto 140%",
backgroundPosition: "center center",
          filter: "blur(3px)",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="relative mx-auto flex min-h-screen max-w-5xl items-center px-6 py-24">
        <div>
          <p className="text-lg font-bold text-[#5E011C] md:text-l">
            {person.role}
          </p>

          <h1 className="mt-3 font-display text-5xl leading-[1.1] text-[#7A1F3D] md:text-7xl">
            Ipsita Saha
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/85 md:text-xl">
            {heroTagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-5 py-3 text-sm text-black transition-transform hover:-translate-y-0.5"
            >
              View Projects
            </a>

            <a
  href="/resume.pdf.pdf"
  target="_blank"
  rel="noopener noreferrer"
              className="rounded-full border border-white/70 px-5 py-3 text-sm text-white transition-colors hover:bg-white hover:text-black"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-6 flex gap-5 text-sm text-white/85">
            <a
              href={person.github}
              className="underline underline-offset-4 hover:text-white"
            >
              GitHub
            </a>

            <a
              href="#contact"
              className="underline underline-offset-4 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}