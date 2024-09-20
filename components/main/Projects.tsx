import AnimatedCard from "../sub/AnimatedCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center my-2 w-full"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10">
        My Projects
      </h1>
      {/* Use grid for 3 columns layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-10">
        <AnimatedCard
          src="https://github.com/UserLH1/PI"
          link="github.com/UserLH1/PI"
          title="Password manager"
          image="/pass-manager.png"
          description="Secure password manager using React and Express with strong encryption."
        />
        <AnimatedCard
          src="https://github.com/ralucaapop/PC"
          link="github.com/ralucaapop/PC"
          title="E-commerce Website"
          image="/pc.png"
          description="E-commerce store built with Angular and Spring Boot for seamless shopping."
        />
        <AnimatedCard
          src="https://github.com/UserLH1/Portfolio"
          link="github.com/UserLH1/Portfolio"
          title="Modern Next.js Website"
          image="/portfolio.png"
          description="Portfolio website built with Next.js and Framer Motion for smooth animations."
        />
      </div>
    </div>
  );
};

export default Projects;
