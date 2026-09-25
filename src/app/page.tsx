import { PointerGlow } from "@/components/effects/PointerGlow";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SkipLink } from "@/components/layout/SkipLink";
import { About } from "@/components/sections/About";
import { AlterEgo } from "@/components/sections/AlterEgo";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Life } from "@/components/sections/Life";
import { Projects } from "@/components/sections/Projects";
import { Stack } from "@/components/sections/Stack";

export default function Home() {
  return (
    <>
      <SkipLink />
      <PointerGlow />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Life />
        <AlterEgo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
