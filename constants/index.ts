
// ─────────────────────────────────────────────
// SKILL DATA
// ─────────────────────────────────────────────

export const Skill_data = [
  { skill_name: "HTML5",       Image: "/html.png",     width: 80, height: 80 },
  { skill_name: "CSS",         Image: "/css.png",      width: 80, height: 80 },
  { skill_name: "JavaScript",  Image: "/js.png",       width: 65, height: 65 },
  { skill_name: "Tailwind CSS",Image: "/tailwind.png", width: 80, height: 80 },
  { skill_name: "React",       Image: "/react.png",    width: 80, height: 80 },
  { skill_name: "Redux",       Image: "/redux.png",    width: 80, height: 80 },
  { skill_name: "TypeScript",  Image: "/ts.png",       width: 80, height: 80 },
  { skill_name: "Next.js",     Image: "/next.png",     width: 80, height: 80 },
  { skill_name: "Stripe",      Image: "/stripe.webp",  width: 80, height: 80 },
  { skill_name: "Node.js",     Image: "/node-js.png",  width: 80, height: 80 },
  { skill_name: "MongoDB",     Image: "/mongodb.png",  width: 40, height: 40 },
];

export const Socials = [
  {
    name: "LinkedIn",
    src: "/linkedin.png",
    link: "https://www.linkedin.com/in/horatiu-lazea/",
  },
  {
    name: "GitHub",
    src: "/github.png",
    link: "https://github.com/UserLH1",
  },
  {
    name: "Instagram",
    src: "/instagram.svg",
    link: "https://www.instagram.com/horatiu_lazea/",
  },
];

export const Frontend_skill = [
  { skill_name: "HTML5",        Image: "/html.png",     width: 80, height: 80 },
  { skill_name: "CSS",          Image: "/css.png",      width: 80, height: 80 },
  { skill_name: "JavaScript",   Image: "/js.png",       width: 65, height: 65 },
  { skill_name: "Tailwind CSS", Image: "/tailwind.png", width: 80, height: 80 },
  { skill_name: "Material UI",  Image: "/mui.png",      width: 80, height: 80 },
  { skill_name: "React",        Image: "/react.png",    width: 80, height: 80 },
  { skill_name: "Redux",        Image: "/redux.png",    width: 80, height: 80 },
  { skill_name: "Framer Motion",Image: "/framer.png",   width: 80, height: 80 },
  { skill_name: "TypeScript",   Image: "/ts.png",       width: 80, height: 80 },
  { skill_name: "Next.js",      Image: "/next.png",     width: 80, height: 80 },
];

export const Backend_skill = [
  { skill_name: "Node.js",     Image: "/node-js.png",  width: 80, height: 80 },
  { skill_name: "Express.js",  Image: "/express.png",  width: 80, height: 80 },
  { skill_name: "Spring Boot", Image: "/spring.png",   width: 70, height: 70 },
  { skill_name: "MongoDB",     Image: "/mongodb.png",  width: 40, height: 40 },
  { skill_name: "Firebase",    Image: "/Firebase.png", width: 55, height: 55 },
  { skill_name: "PostgreSQL",  Image: "/postger.png",  width: 70, height: 70 },
  { skill_name: "MySQL",       Image: "/mysql.png",    width: 70, height: 70 },
  { skill_name: "GraphQL",     Image: "/graphql.png",  width: 80, height: 80 },
];

export const Full_stack = [
  { skill_name: "Vite",     Image: "/vite.png",     width: 70, height: 70 },
  { skill_name: "Electron", Image: "/electron.png", width: 70, height: 70 },
  { skill_name: "Docker",   Image: "/docker.webp",  width: 70, height: 70 },
  { skill_name: "Figma",    Image: "/figma.png",    width: 50, height: 50 },
];

export const Other_skill = [
  { skill_name: "Ethereum", Image: "/eth.png", width: 60, height: 60 },
];

// ─────────────────────────────────────────────
// PROJECTS DATA
// ─────────────────────────────────────────────

export interface Project {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  /** TODO: Replace "#" with actual live demo URL once deployed */
  demoLink: string;
  techStack: string[];
}

export const Projects_data: Project[] = [
  {
    title: "Password Manager",
    description:
      "A secure desktop-style password manager with AES-256 encryption. Users can store, retrieve, and manage credentials safely. Features include master-password auth, clipboard copy, and search.",
    image: "/pass-manager.png",
    githubLink: "https://github.com/UserLH1/PI",
    demoLink: "#", // TODO: add live demo URL
    techStack: ["React", "Express.js", "Node.js", "MongoDB", "AES-256"],
  },
  {
    title: "E-commerce Website",
    description:
      "Full-stack e-commerce platform with product catalog, cart management, order tracking, and admin dashboard. Built with a Java Spring Boot REST API and Angular SPA frontend.",
    image: "/pc.png",
    githubLink: "https://github.com/ralucaapop/PC",
    demoLink: "#", // TODO: add live demo URL
    techStack: ["Angular", "Spring Boot", "PostgreSQL", "REST API"],
  },
  {
    title: "Portfolio Website",
    description:
      "Modern developer portfolio built with Next.js 14 App Router, Framer Motion animations, Three.js star background, and a Gmail-connected contact form via OAuth2.",
    image: "/portfolio.png",
    githubLink: "https://github.com/UserLH1/Portfolio",
    demoLink: "https://horatiulazea.com",
    techStack: ["Next.js", "TypeScript", "Framer Motion", "Three.js", "Tailwind CSS"],
  },
  // ─── MOCK PROJECTS ────────────────────────────────────────────────────────
  // TODO: Replace with your real projects. Update title, description,
  //       image (add screenshot to /public/), githubLink, demoLink, techStack.
  {
    title: "Task Management App",
    description:
      "Full-stack productivity app with real-time drag-and-drop Kanban boards, JWT authentication, role-based access, and email notifications for team collaboration.",
    image: "/portfolio.png", // TODO: replace with /task-manager.png screenshot
    githubLink: "https://github.com/UserLH1", // TODO: add real repo link
    demoLink: "#", // TODO: add live demo URL
    techStack: ["React", "Node.js", "MongoDB", "JWT", "Socket.io"],
  },
  {
    title: "Real-time Chat App",
    description:
      "Scalable chat application with rooms, private messaging, online presence indicators, and message history. Uses WebSockets for instant bidirectional communication.",
    image: "/portfolio.png", // TODO: replace with /chat-app.png screenshot
    githubLink: "https://github.com/UserLH1", // TODO: add real repo link
    demoLink: "#", // TODO: add live demo URL
    techStack: ["React", "Socket.io", "Express.js", "MongoDB"],
  },
  {
    title: "REST API with Auth",
    description:
      "Production-ready REST API with JWT + refresh token auth, rate limiting, input validation, Swagger docs, and full CRUD operations. Containerized with Docker.",
    image: "/portfolio.png", // TODO: replace with /api-project.png screenshot
    githubLink: "https://github.com/UserLH1", // TODO: add real repo link
    demoLink: "#", // TODO: add live demo URL
    techStack: ["Node.js", "Express.js", "PostgreSQL", "Docker", "JWT"],
  },
];

// ─────────────────────────────────────────────
// EXPERIENCE / TIMELINE DATA
// ─────────────────────────────────────────────

export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
  type: "education" | "work" | "project";
}

export const Timeline_data: TimelineItem[] = [
  // TODO: Update with your real education details (university name, years, specialization)
  {
    year: "2022 – Present",
    title: "Bachelor's in Computer Science",
    institution: "TODO: Your University Name",
    description:
      "Studying algorithms, data structures, software engineering, databases, and web technologies. Active participant in student project teams.",
    type: "education",
  },
  // TODO: Add any internship, part-time, or freelance work here
  {
    year: "2024",
    title: "Full-Stack Developer – Freelance",
    institution: "TODO: Client / Company Name (or remove if not applicable)",
    description:
      "Designed and built custom web applications for clients. Handled full delivery cycle: requirements, design, development, deployment, and maintenance.",
    type: "work",
  },
  {
    year: "2024",
    title: "E-commerce Platform",
    institution: "Academic Project",
    description:
      "Led the backend development of a full-stack e-commerce app using Spring Boot and Angular as part of a university team project.",
    type: "project",
  },
  {
    year: "2023",
    title: "Password Manager",
    institution: "Personal Project",
    description:
      "Built a secure credential manager with AES-256 encryption using React and Express.js, focusing on security best practices.",
    type: "project",
  },
  // TODO: Add certifications (freeCodeCamp, Udemy, Coursera, etc.)
  {
    year: "2023",
    title: "TODO: Certification Name",
    institution: "TODO: Platform (e.g. Udemy / freeCodeCamp / Coursera)",
    description: "TODO: Short description of what this certification covers.",
    type: "education",
  },
];
