import Image from "next/image";
import { Socials } from "../../constants/index";
const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {" "}
        <a
          href="#about-me"
          className=" flex flex-row items-center h-auto w-auto"
        >
          <Image
            src="/&.png"
            alt="logo"
            width={80}
            height={80}
            className="cursor-pointer hover:animate-pulse mx-3"
          />
          <div className=" font-semibold ml-[10px] hidden md:block text-gray-300 font-fira">
            Horaţiu Lazea
          </div>
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 font-fira">
            <a href="#about-me" className="cursor-pointer">
              About Me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer">
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5 hover:scale-50">
          {Socials.map((social) => (
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
            >
              <Image
                src={social.src}
                alt={social.name}
                height={25}
                width={25}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
