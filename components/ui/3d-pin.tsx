"use client";
import { cn } from "@/utils/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

interface PinContainerProps {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}

export const PinContainer: React.FC<PinContainerProps> = ({
  children,
  title,
  href,
  className,
  containerClassName,
}) => {
  const [transform, setTransform] = useState<string>(
    "translate(-50%,-50%) rotateX(0deg) scale(1)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };

  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <Link
      className={cn(
        "relative z-40 cursor-pointer rounded-lg shadow-lg group/pin border !p-0",
        containerClassName
      )}
      target="_blank"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href || "/"}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2  top-1/2 flex justify-stretch items-stretch rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)]  border border-[#2f1e6e]  transition-transform duration-700 overflow-hidden"
        >
          <div className={cn("relative z-40", className)}>{children}</div>
        </motion.div>
      </div>
      <PinPerspective title={title} href={href} />
    </Link>
  );
};

interface PinPerspectiveProps {
  title?: string;
  href?: string;
}

export const PinPerspective: React.FC<PinPerspectiveProps> = ({
  title,
  href,
}) => {
  return (
    <motion.div className="pointer-events-none w-[32rem] h-[28rem] flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[40] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <a
            href={href}
            target={"_blank"}
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 ring-1 ring-white/10"
          >
            <span className="relative z-20 text-white text-lg font-bold inline-block py-0.5">
              {title}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </a>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            {Array.from({ length: 3 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{
                  opacity: [0, 1, 0.5, 0],
                  scale: 1,
                  z: 0,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: index * 2,
                }}
                className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
              ></motion.div>
            ))}
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};
