import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ text, link }: { text: string; link: string }) => {
  const colorIndex = text.length % colors.length; // Just for variation
  const style = { border: `2px solid ${colors[colorIndex]}` };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center space-x-4 cursor-pointer p-1 justify-center"
    >
      <div className="icon-placeholder" style={style} />
      <a
        href={link}
        className="text-placeholder p-3 flex items-center justify-center"
        style={style}
      >
        {text}
      </a>
    </motion.li>
  );
};
