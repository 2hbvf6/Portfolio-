import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Hero from "@/components/Hero";
import Music from "@/components/Music";
import Projects from "@/components/Projects";
import { ContactSection, ResumeSection, SiteFooter } from "@/components/ResumeContact";
import SiteHeader from "@/components/SiteHeader";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Achievements />
        <Music />
        <ResumeSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
