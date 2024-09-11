import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full text-gray-200 shadow-lg p-[15px] shadow-[#2A0E61]/50 bg-[linear-gradient(180deg,rgba(38,0,77,0.2),rgba(0,0,0,0.2))] backdrop-blur-sm z-50 pt-10">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <p className="flex flex-row items-center my-[15px] cursor-pointer hover:bg-sky-700 z-30"></p>
            <a
              href="#about-me"
              className=" flex flex-row items-center h-auto w-auto"
            >
              <Image
                src="/&.png"
                alt="logo"
                width={120}
                height={120}
                className="cursor-pointer hover:scale-110 mx-3"
              />
              <div className=" font-semibold ml-[10px] hidden md:block text-gray-300 font-fira"></div>
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center mt-10 ">
          &copy; Horatiu Lazea {new Date().getFullYear()} All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
