"use client";

import Image from "next/image";
import { Socials } from "../../constants/index";
import { Menu } from "../sub/Menu/Menu";

const navLinks = [
  { label: "About Me",   href: "#about-me"  },
  { label: "Skills",     href: "#skills"    },
  { label: "Experience", href: "#experience"},
  { label: "Projects",   href: "#projects"  },
  { label: "Contact",    href: "#contact"   },
];

const Navbar = () => {
  return (
    <nav
      aria-label="Main navigation"
      className="align-middle w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#030014ce] md:bg-[#03001441] md:backdrop-blur-md z-50 px-10"
    >
      {/* Mobile hamburger menu */}
      <div className="md:hidden relative bottom-2 right-7 ml-2">
        <Menu />
      </div>

      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">

        {/* Logo */}
        <a
          href="#about-me"
          aria-label="Horatiu Lazea – back to top"
          className="flex flex-row items-center h-auto w-auto"
        >
          <Image
            src="/&.png"
            alt="Horatiu Lazea logo"
            width={90}
            height={90}
            className="cursor-pointer hover:scale-110 mx-3 transition-transform duration-200"
          />
          <span className="font-semibold ml-[10px] hidden md:block text-gray-300 font-fira">
            Horaţiu Lazea
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center">
          <div className="flex flex-row items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 font-fira gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-pointer hover:text-purple-400 transition-colors duration-200 text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right side: social icons + Resume button */}
        <div className="hidden md:flex flex-row items-center gap-4">
          {/* Social icons */}
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${social.name} profile`}
              className="hover:scale-110 transition-transform duration-200"
            >
              <Image
                src={social.src}
                alt={social.name}
                height={25}
                width={25}
              />
            </a>
          ))}

          {/*
           * TODO: make sure your CV file is at /public/Horatiu_Lazea_CV.pdf
           */}
          <a
            href="/final_resume.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Download resume PDF"
            className="ml-2 py-1.5 px-4 text-sm button-primary text-white rounded-full border border-[#7042f861] hover:border-purple-500 transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
