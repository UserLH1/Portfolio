"use client";

import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";

// ─────────────────────────────────────────────
// TODO: Update all stats with your real numbers
// ─────────────────────────────────────────────
const stats = [
  { value: "4+", label: "Years coding" },
  { value: "10+", label: "Projects delivered" },
  { value: "10+", label: "Technologies mastered" },
];

const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center w-full px-7 md:px-20 py-20 relative"
    >
      {/* Section badge */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideInFromTop}
        className="Welcome-box py-[16px] px-[16px] border border-[#742f882b] opacity-[0.9] mb-8"
      >
        <AiOutlineUser className="text-[#b49bff] mr-[10px] h-8 w-8" />
        <h2 className="Welcome-text text-[20px]">About Me</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-14 w-full max-w-5xl">

        {/* ── Profile photo ─────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInFromLeft}
          className="flex-shrink-0"
        >
          {/*
           * TODO: Add your professional headshot to /public/profile.jpg
           * (or .png / .webp) and replace the src below.
           * Recommended size: 400×400 px minimum, square crop.
           *
           * If you don't have a photo yet, the gradient placeholder below
           * will be shown automatically.
           */}
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-purple-500/40 shadow-lg shadow-purple-900/30">
            {/* Gradient fallback shown when photo is missing */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-blue-900 flex items-center justify-center">
              <span className="text-5xl font-bold text-white/80 select-none">HL</span>
            </div>

            <Image
              src="/profile.jpg"            // TODO: replace with your photo
              alt="Horatiu Lazea – Full-Stack Developer"
              fill
              className="object-cover"
              onError={(e) => {
                // Fallback: hide broken image so the gradient shows through
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </motion.div>

        {/* ── Text content ──────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInFromRight}
          className="flex flex-col gap-6 max-w-xl"
        >
          <h2 className="text-4xl font-bold text-white">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Horatiu Lazea
            </span>
          </h2>

          {/*
           * TODO: Rewrite these paragraphs in your own voice.
           * Be specific: mention your university, city, what excites you
           * technically, and what kind of role / team you're looking for.
           */}
          <p className="text-gray-400 text-lg leading-relaxed">
            I&apos;m a Full-Stack Developer with a strong foundation in both
            frontend and backend technologies. I love building products that
            are not only functional but also a pleasure to use  clean interfaces
            backed by reliable, well-structured code.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            My stack of choice is React / Next.js on the frontend and
            Node.js or Spring Boot on the backend, but I&apos;m always exploring
            new tools and patterns. I care deeply about performance, code
            quality, and developer experience.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            {/* TODO: mention if you're open to work, internship, full-time, freelance */}
            Currently open to full-time roles and interesting freelance projects.
          </p>

          {/* CTA row */}
          <div className="flex flex-row gap-4 flex-wrap mt-2">
            <a
              href="#contact"
              className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg"
            >
              Let&apos;s talk
            </a>
            {/*
             * TODO: add your CV to /public/Horatiu_Lazea_CV.pdf
             */}
            <a
              href="/Horatiu_Lazea_CV.pdf"
              download
              className="py-2 px-6 border border-[#7042f861] text-gray-300 hover:text-white hover:border-purple-500 rounded-lg transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
      <br></br>

      {/* ── Stats row ─────────────────────────────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideInFromTop}
        className="flex flex-row gap-10 md:gap-20 mt-16 flex-wrap justify-center"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              {stat.value}
            </span>
            <span className="text-gray-400 text-sm text-center">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
