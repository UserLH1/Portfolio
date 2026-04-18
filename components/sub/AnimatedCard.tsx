"use client";

import Image from "next/image";
import { PinContainer } from "../ui/3d-pin";

interface Props {
  /** URL where the card pin/button links to (e.g. GitHub repo) */
  src: string;
  title: string;
  description: string;
  image: string;
  /** Short link label shown on the pin (e.g. "github.com/...") */
  link: string;
  /** Optional live demo URL — shown as a second button */
  demoLink?: string;
  /** Tech stack badges rendered below the description */
  techStack?: string[];
}

const AnimatedCard = ({ src, title, description, image, link, demoLink, techStack }: Props) => {
  return (
    <div className="h-auto w-full flex items-center justify-center m-1">
      <PinContainer title={link} href={src}>
        <div className="flex flex-col tracking-tight text-slate-100/50 md:w-[20vw] w-[80vw]">

          {/* Project screenshot */}
          <Image
            src={image}
            alt={title}
            width={1000}
            height={1000}
            className="w-full object-contain rounded-t-lg"
          />

          {/* Title */}
          <h2 className="p-3 font-bold text-slate-100 text-xl mt-3">{title}</h2>

          {/* Description */}
          <div className="text-base mt-1 mb-3 font-normal">
            <p className="text-slate-300 px-4 text-base leading-relaxed">{description}</p>
          </div>

          {/* Tech stack badges */}
          {techStack && techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 px-4 pb-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-full border border-purple-500/40 text-purple-300 bg-purple-900/20 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-row gap-3 px-4 pb-4 mt-1">
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-xs py-2 px-3 rounded-lg border border-[#7042f861] text-gray-300 hover:text-white hover:border-purple-500 transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
            {demoLink && demoLink !== "#" && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-xs py-2 px-3 rounded-lg button-primary text-white transition-all duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

export default AnimatedCard;
