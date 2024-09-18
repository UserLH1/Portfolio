import Image from "next/image";
import { Socials } from "../../constants/index";

const Footer = () => {
  return (
    <div className="w-full h-full text-gray-200 shadow-lg p-4 md:p-6 shadow-[#2A0E61]/50 bg-[linear-gradient(180deg,rgba(38,0,77,0.2),rgba(0,0,0,0.2))] backdrop-blur-sm z-10">
      <div className="w-full flex flex-col md:flex-row items-center justify-between m-auto max-w-7xl">
        {/* Logo Section */}
        <div className="flex flex-row items-center">
          <a
            href="#about-me"
            className="flex flex-row items-center h-auto w-auto"
          >
            <Image
              src="/&.png"
              alt="logo"
              width={80}
              height={80}
              className="cursor-pointer hover:scale-110 transition-transform duration-200"
            />
          </a>
          <span className="ml-3 text-gray-300 font-semibold hidden md:block font-fira">
            Horatiu Lazea
          </span>
        </div>

        {/* Social Icons Section */}
        <div className="flex flex-row gap-5 mt-4 md:mt-0">
          {Socials.map((social) => (
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
              className="hover:scale-110 transition-transform duration-200"
            >
              <Image
                src={social.src}
                alt={social.name}
                height={30}
                width={30}
              />
            </a>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="mt-4 md:mt-0 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} Horatiu Lazea. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
