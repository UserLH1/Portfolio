import { Projects_data } from "@/constants";
import AnimatedCard from "../sub/AnimatedCard";

const Projects = () => {
  return (
    <section
      className="flex flex-col items-center justify-center my-2 w-full"
      id="projects"
    >
      <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-2">
        My Projects
      </h2>
      <p className="text-gray-400 text-center mb-10 max-w-xl px-4">
        A selection of projects I&apos;ve built  from full-stack apps to APIs
        and tools. Each one taught me something new.
      </p>

      {/* 3-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 w-full px-10">
        {Projects_data.map((project) => (
          <AnimatedCard
            key={project.title}
            src={project.githubLink}
            link={project.githubLink.replace("https://", "")}
            title={project.title}
            image={project.image}
            description={project.description}
            demoLink={project.demoLink}
            techStack={project.techStack}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
