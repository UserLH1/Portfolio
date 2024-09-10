import { SignupFormDemo as Contact2 } from "@/components/main/Contact2";
import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
export default function Home() {
  return (
    <main className="w-full h-full bg-[#030014]">
      <div className="flex flex-col gap-20 ">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Contact2 />
        <Footer />
      </div>
    </main>
  );
}
