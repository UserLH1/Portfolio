"use client";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { AiFillThunderbolt } from "react-icons/ai";

import { motion } from "framer-motion";
const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[16px] px-[16px] border border-[#742f882b] opacity-[0.9]"
      >
        <AiFillThunderbolt className="text-[#b49bff] mr-[10px] h-10 w-8" />

        <h1 className="Welcome-text text-[20px]">My skills</h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Building the Future with Cutting-Edge Technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="font-fira text-[20px] text-gray-200 mb-10 mt-[10px] text-center "
      >
        Turn your ideas into powerful, efficient apps.
      </motion.div>
    </div>
  );
};

export default SkillText;
