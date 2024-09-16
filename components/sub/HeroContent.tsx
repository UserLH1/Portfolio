// HeroContent.tsx

"use client";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillCode } from "react-icons/ai";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            // Optional: Use staggerChildren to add slight delays between child animations
            // staggerChildren: 0.1,
          },
        },
      }}
      className="flex flex-row items-center justify-center px-7 md:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[16px] px-[16px] border border-[#742f882b] opacity-[0.9]"
        >
          <AiFillCode className="text-[#b49bff] mr-[10px] h-10 w-8" />
          <h1 className="Welcome-text text-sm md:text-[20px]">Web developer</h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft}
          className="flex flex-col mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-800">
              the best{" "}
            </span>
            user experience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a student who loves building websites and software, both
          front-end and back-end. I&apos;m really into web design and enjoy
          turning ideas into beautiful, easy-to-use sites.
        </motion.p>
        <motion.h3
          variants={slideInFromLeft}
          className="text-2xl text-gray-400 my-2 max-w-[600px]"
        >
          Check out my projects to see what I can do as a web developer!
        </motion.h3>
        <motion.a
          variants={slideInFromLeft}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="#contact"
        >
          Get in touch
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
