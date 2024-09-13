import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem"; // Asigură-te că importi componenta corect

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuItems = [
  { text: "About Me", link: "#about-me" },
  { text: "Skills", link: "#skills" },
  { text: "Projects", link: "#projects" },
  { text: "Contact", link: "#contact" },
];

export const Navigation = ({ isOpen }: { isOpen: boolean }) => (
  <div>
    <motion.ul
      variants={variants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className={`absolute top-[65px] left-[0.1px] text-white h-max font-semibold text-lg transition-all duration-300 ${
        isOpen ? "bg-[#03001487] backdrop-blur-md z-50" : "hidden"
      }`}
    >
      <div className="pt-5 pb-[100vh]">
        {menuItems.map((item, index) => (
          <MenuItem text={item.text} link={item.link} key={index} />
        ))}
      </div>
    </motion.ul>
  </div>
);
