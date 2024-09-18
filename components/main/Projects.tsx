import AnimatedCard from "../sub/AnimatedCard";
const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 w-full"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full  flex flex-col md:flex-row px-16">
        <AnimatedCard
          src="https://github.com/UserLH1/PI"
          link="github.com/UserLH1/PI"
          title="Password manager"
          image="/pass-manager.jpeg"
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
          image="/SpaceWebsite.png"
          description="Portfolio website built with Next.js and Framer Motion for smooth animations."
        />
      </div>
    </div>
  );
};

export default Projects;
