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

const colors = [
  "rgba(255, 255, 255, 0.1)", // Light gray with 10% opacity
  "rgba(255, 255, 255, 0.1)", // Keep it consistent for all menu items
];
export const MenuItem = ({ text, link }: { text: string; link: string }) => {
  const colorIndex = text.length % colors.length;
  const style = {
    borderBottom: `2px solid ${colors[colorIndex]}`,
    borderTop: `2px solid ${colors[colorIndex]}`,
  };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center space-x-4 cursor-pointer p-1 py-2 justify-center"
    >
      {/* Placeholder for icon with softer border */}
      <div className="icon-placeholder" style={style} />

      {/* Text link with softer border */}
      <a
        href={link}
        className="text-placeholder py-6 p-1 flex items-center"
        style={style}
      >
        {text}
      </a>
    </motion.li>
  );
};
