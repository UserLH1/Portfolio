// app/page.tsx

import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Experience from "@/components/main/Experience";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="w-full h-full bg-[#030014]">
      <div className="flex flex-col md:gap-20">
        {/* 1. Hero  first impression, headline + CV button */}
        <Hero />

        {/* 2. About  who you are, photo, stats, bio */}
        <About />

        {/* 3. Skills  tech stack icons */}
        <Skills />

        {/* 4. Experience  education & project timeline */}
        <Experience />

        {/* 5. Projects  portfolio of work with tech badges */}
        <Projects />

        {/* 6. Contact  form */}
        <Contact />

        <Footer />
      </div>
    </main>
  );
}
