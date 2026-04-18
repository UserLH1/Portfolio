"use client";

import { Timeline_data } from "@/constants";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import { AiOutlineBook, AiOutlineCode, AiOutlineTrophy } from "react-icons/ai";
import { MdWork } from "react-icons/md";

const typeConfig = {
  education: {
    icon: <AiOutlineBook className="w-5 h-5" />,
    color: "text-blue-400",
    border: "border-blue-500/40",
    bg: "bg-blue-900/20",
    dot: "bg-blue-500",
  },
  work: {
    icon: <MdWork className="w-5 h-5" />,
    color: "text-purple-400",
    border: "border-purple-500/40",
    bg: "bg-purple-900/20",
    dot: "bg-purple-500",
  },
  project: {
    icon: <AiOutlineCode className="w-5 h-5" />,
    color: "text-cyan-400",
    border: "border-cyan-500/40",
    bg: "bg-cyan-900/20",
    dot: "bg-cyan-500",
  },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center w-full px-7 md:px-20 py-20 relative"
    >
      {/* Section badge */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideInFromTop}
        className="Welcome-box py-[16px] px-[16px] border border-[#742f882b] opacity-[0.9] mb-4"
      >
        <AiOutlineTrophy className="text-[#b49bff] mr-[10px] h-8 w-8" />
        <h2 className="Welcome-text text-[20px]">Experience &amp; Education</h2>
      </motion.div>

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideInFromLeft}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[10px]"
      >
        My Journey So Far
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideInFromRight}
        className="text-gray-400 text-center max-w-xl mb-14"
      >
        Education, work, and key projects that shaped me as a developer.
      </motion.p>

      {/* Timeline */}
      <div className="relative w-full max-w-3xl">

        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600/60 via-blue-600/40 to-transparent md:-translate-x-1/2" />

        <div className="flex flex-col gap-10">
          {Timeline_data.map((item, index) => {
            const config = typeConfig[item.type];
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={`${item.year}-${item.title}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={isLeft ? slideInFromLeft : slideInFromRight}
                className={`relative flex flex-col md:flex-row ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } items-start md:items-center gap-4`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full ${config.dot} md:-translate-x-1/2 mt-6 md:mt-0 ring-2 ring-offset-2 ring-offset-[#030014] ring-opacity-60`} />

                {/* Card */}
                <div
                  className={`ml-10 md:ml-0 ${
                    isLeft ? "md:mr-8 md:text-right" : "md:ml-8 md:text-left"
                  } md:w-[calc(50%-2rem)] w-full`}
                >
                  <div
                    className={`p-5 rounded-xl border ${config.border} ${config.bg} backdrop-blur-sm shadow-lg`}
                  >
                    {/* Year + type icon */}
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        isLeft ? "md:justify-end" : "md:justify-start"
                      } justify-start`}
                    >
                      <span className={`${config.color}`}>{config.icon}</span>
                      <span className={`text-sm font-mono font-semibold ${config.color}`}>
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-white font-bold text-lg leading-tight">
                      {item.title}
                    </h3>
                    <p className={`text-sm font-medium mt-1 ${config.color}`}>
                      {item.institution}
                    </p>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed text-left">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
