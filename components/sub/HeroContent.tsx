// HeroContent.tsx

"use client";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillCode } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-7 md:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">

        {/* Badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[16px] px-[16px] border border-[#742f882b] opacity-[0.9]"
        >
          <AiFillCode className="text-[#b49bff] mr-[10px] h-10 w-8" />
          <h1 className="Welcome-text text-sm md:text-[20px]">Full-Stack Developer</h1>
        </motion.div>

        {/* Main headline */}
        <motion.div
          variants={slideInFromLeft}
          className="flex flex-col mt-6 text-5xl md:text-6xl font-bold text-white max-w-[600px]"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-800">
              fast, scalable{" "}
            </span>
            web experiences
          </span>
        </motion.div>

        {/* Bio — professional, no "student" */}
        <motion.p
          variants={slideInFromLeft}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          {/*
           * TODO: Personalize this bio with your own words.
           * Keep it professional and specific to your actual experience.
           */}
          Full-Stack Developer passionate about turning ideas into clean,
          performant applications. I work across the full stack — from pixel-perfect
          React UIs to robust Node.js and Spring Boot APIs.
        </motion.p>

        {/* Sub-headline */}
        <motion.h3
          variants={slideInFromLeft}
          className="text-xl text-gray-400 max-w-[600px]"
        >
          Check out my projects below to see what I can do.
        </motion.h3>

        {/* CTA buttons */}
        <motion.div
          variants={slideInFromLeft}
          className="flex flex-row gap-4 mt-4 flex-wrap"
        >
          <a
            href="#contact"
            className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg"
          >
            Get in touch
          </a>

          {/*
           * TODO: Add your CV file to the /public folder as "Horatiu_Lazea_CV.pdf"
           * (or any filename you prefer) and update the href below.
           * The file will be automatically served by Next.js from /public.
           */}
          <a
            href="/Horatiu_Lazea_CV.pdf"
            download
            className="py-2 px-6 flex items-center gap-2 border border-[#7042f861] text-gray-300 hover:text-white hover:border-purple-500 cursor-pointer rounded-lg transition-all duration-300"
          >
            <HiDownload className="h-5 w-5" />
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Right side illustration */}
      <motion.div
        variants={slideInFromRight}
        className="w-full h-full hidden md:flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="Full-Stack Developer — React, Node.js, TypeScript icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
