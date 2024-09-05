import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="w-full h-full bg-[#030014]">
      <div className="flex flex-col gap-20 ">
        <Hero />
        <Skills />
        <Encryption />
      </div>
    </main>
  );
}
