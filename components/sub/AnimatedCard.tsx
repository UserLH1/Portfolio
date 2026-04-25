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
  /** Optional live demo URL  shown as a second button */
  demoLink?: string;
  /** Tech stack badges rendered below the description */
  techStack?: string[];
}

const AnimatedCard = ({ src, title, description, image, link, demoLink, techStack }: Props) => {
  // Determine which link to use (demoLink has priority, fallback to src/github)
  const targetLink = (demoLink && demoLink !== "#") ? demoLink : (src && src !== "#") ? src : "#";
  const displayTitle = targetLink !== "#" ? targetLink.replace("https://", "").replace("www.", "") : link;

  return (
    <div className="h-[43rem] md:h-[46rem] w-full flex items-center justify-center m-1">
      <PinContainer title={displayTitle} href={targetLink}>
        {/* Fixed card height and width ensures all cards have exactly the same size. */}
        <div className="flex flex-col tracking-tight text-slate-100/50 md:w-[22vw] lg:w-[20vw] w-[80vw] h-[32rem] sm:h-[34rem] overflow-hidden">
          
          {/* Project screenshot with a fixed aspect ratio / height */}
          <div className="relative w-full h-48 sm:h-52 shrink-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col flex-1 pb-4">
            {/* Title */}
            <h2 className="p-4 font-bold text-slate-100 text-xl">{title}</h2>

            {/* Description (line clamped to ensure it doesn't break the height) */}
            <div className="px-4 mb-3 font-normal flex-1">
              <p className="text-slate-300 text-sm md:text-base leading-relaxed line-clamp-4">{description}</p>
            </div>

            {/* Tech stack badges */}
            {techStack && techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 px-4 mt-auto">
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
          </div>
          
        </div>
      </PinContainer>
    </div>
  );
};

export default AnimatedCard;

