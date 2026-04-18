// components/main/Footer.tsx

import Image from "next/image";
import Link from "next/link";
import { Socials } from "../../constants/index";

const quickLinks = [
  { label: "About",      href: "#about-me"   },
  { label: "Skills",     href: "#skills"     },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects"   },
  { label: "Contact",    href: "#contact"    },
];

const Footer = () => {
  return (
    <footer
      aria-label="Site footer"
      className="w-full text-gray-200 shadow-lg p-6 md:p-8 shadow-[#2A0E61]/50 bg-[linear-gradient(180deg,rgba(38,0,77,0.2),rgba(0,0,0,0.2))] backdrop-blur-sm z-10"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

        {/* ── Column 1: Logo + tagline + "Open to work" badge ── */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <a href="#about-me" aria-label="Back to top" className="flex flex-row items-center">
            <Image
              src="/&.png"
              alt="Horatiu Lazea logo"
              width={70}
              height={70}
              className="cursor-pointer hover:scale-110 transition-transform duration-200"
            />
            <span className="ml-3 text-gray-300 font-semibold font-fira">Horatiu Lazea</span>
          </a>

          <p className="text-sm text-gray-500 text-center md:text-left max-w-[200px]">
            Full-Stack Developer building modern web experiences.
          </p>

          {/*
           * TODO: Remove this badge when you are no longer looking for work,
           * or update the text to "Freelance available" etc.
           */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/40 bg-green-900/20 text-green-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to work
          </div>
        </div>

        {/* ── Column 2: Quick navigation links ── */}
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-1">
            Quick Links
          </h3>
          <nav aria-label="Footer navigation" className="flex flex-col items-center gap-2">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* ── Column 3: Social icons + location + copyright ── */}
        <div className="flex flex-col items-center md:items-end gap-4">
          {/* Social icons */}
          <div className="flex flex-row gap-4">
            {Socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${social.name} profile`}
                className="hover:scale-110 transition-transform duration-200"
              >
                <Image src={social.src} alt={social.name} height={28} width={28} />
              </a>
            ))}
          </div>

          {/*
           * TODO: Update the city/country if you're not in Romania,
           * or remove this line if you prefer not to show location.
           */}
          <p className="text-xs text-gray-500">📍 Romania</p>

          <div className="text-xs text-gray-500 text-center md:text-right space-y-1">
            <div>&copy; {new Date().getFullYear()} Horatiu Lazea. All rights reserved.</div>
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-gray-200 underline transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
