import Image from "next/image";
import { about, musicJourney } from "@/data/content";

const GALLERY = [
  { src: "/images/music-3-solo-stage.jpg", alt: "Solo vocal performance under stage lights", tall: true },
  { src: "/images/music-2-group-stage.jpg", alt: "Performing with the group on stage in a golden saree" },
  { src: "/images/music-6-bw-vocals.jpeg", alt: "Black-and-white live vocal performance" },
  { src: "/images/music-4-artistic-stage.jpg", alt: "Close-up stage performance with dramatic lighting" },
  { src: "/images/music-5-award.jpg", alt: "Receiving a certificate of achievement", tall: false },
  { src: "/images/music-7-bw-mic.jpeg", alt: "live mic vocal performance" },
  { src: "/images/music-1-bw-vocal.jpg", alt: "live mic vocal performance" },
  { src: "/images/music-8-bw-rab.jpeg", alt: "live mic vocal performance" },
  
];

export default function Music() {
  return (
    <section id="music" className="border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm text-[#FCA5A5]">Beyond Technology</p>
        <h2 className="music-journey-title mt-2 font-display text-3xl italic text-paper md:text-4xl">
  My Music Journey
</h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-paper/75">
          {musicJourney.intro}
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-paper/75">
          {about.personal.split("\n\n")[1]}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {GALLERY.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-xl border border-paper/15 ${
                i === 0 ? "col-span-2 aspect-[16/10] md:col-span-1 md:aspect-[3/4]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 30vw, 45vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
