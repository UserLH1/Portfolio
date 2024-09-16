// app/page.tsx

import Contact from "@/components/main/Contact";
import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="w-full h-full bg-[#030014]">
      <div className="flex flex-col md:gap-20 ">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
