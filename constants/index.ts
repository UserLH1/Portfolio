
// ─────────────────────────────────────────────
// SKILL DATA
// ─────────────────────────────────────────────

export const Skill_data = [
  { skill_name: "TypeScript",  Image: "/ts.png",       width: 80, height: 80 },
  { skill_name: "Next.js",     Image: "/next.png",     width: 80, height: 80 },
  { skill_name: "React",       Image: "/react.png",    width: 80, height: 80 },
  { skill_name: "Node.js",     Image: "/node-js.png",  width: 80, height: 80 },
  { skill_name: "NestJS",      Image: "/NestJS.webp",   width: 80, height: 80 },
  { skill_name: "Tailwind CSS",Image: "/tailwind.png", width: 80, height: 80 },
  { skill_name: "PostgreSQL",  Image: "/postger.png",  width: 70, height: 70 },
  { skill_name: "Docker",      Image: "/docker.webp",  width: 70, height: 70 },
  { skill_name: "CSS",         Image: "/css.png",      width: 80, height: 80 },
  { skill_name: "JavaScript",  Image: "/js.png",       width: 65, height: 65 },
  { skill_name: "Stripe",      Image: "/stripe.webp",  width: 80, height: 80 },
  { skill_name: "Supabase",    Image: "/supabase.webp", width: 80, height: 80 },

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
  { skill_name: "Supabase",    Image: "/supabase.webp", width: 55, height: 55 },
  { skill_name: "PostgreSQL",  Image: "/postger.png",  width: 70, height: 70 },
  { skill_name: "MySQL",       Image: "/mysql.png",    width: 70, height: 70 },
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
    title: "KeepMyPass - AI-Enhanced Password Manager",
    description:
      "A production-ready secure password vault featuring real-time anomaly detection. Built with AES-256 encryption and machine learning algorithms to identify and prevent unauthorized access patterns.",
    image: "/pass-manager.png", // Asigură-te că ai un screenshot mișto cu aplicația aici
    githubLink: "#", // Îl lași cu # pentru că e privat. Dacă te întreabă la interviu, le zici că e closed-source din motive de securitate.
    demoLink: "https://keepmypass.com", // Link-ul către producție - asta vinde cel mai bine!
    techStack: ["Vite", "React", "Express.js", "PostgreSQL", "Python", "AES-256"], // Am pus Python presupunând că acolo ai făcut partea de AI. Poți ajusta.
  },
  {
    title: "Cortix ",
    description:
      "A fintech platform built from the ground up. Handled full-stack architecture, cloud deployment, and automated billing integration. Acquired 400+ users and 20 paid subscriptions in the first 30 days.",
    image: "/cortix-preview.png", // Adaugă un screenshot cu platforma Cortix
    githubLink: "#", // Dacă e cod închis, poți lăsa # sau un link către profilul tău
    demoLink: "https://getcortix.com", // Pune link-ul real către SaaS-ul tău
    techStack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Stripe"],
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
    title: "NexusEDR",
    description:
      "A modern, cross-platform Endpoint Detection & Response desktop application. Features real-time process monitoring, interactive network topology mapping with GeoIP, IoC matching, and threat response actions (kill, isolate, suspend) powered by an event-driven architecture.",
    image: "/nexus-edr.png", // Asigură-te că pui o captură de ecran în /public/
    githubLink: "https://github.com/UserLH1/edr",
    demoLink: "#", 
    techStack: ["Rust", "Tauri", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Monopoly Empire Multiplayer",
    description:
      "A web-based multiplayer board game with real-time game events broadcasting via Server-Sent Events (SSE). Built with a containerized architecture, automated API testing (Karate), and full OpenAPI documentation.",
    image: "/monopoly.png", // Asigură-te că pui o captură de ecran în /public/
    githubLink: "https://github.com/UserLH1/Monopoly-Empire",
    demoLink: "#", 
    techStack: ["Java", "Spring Boot", "React", "Docker", "PostgreSQL"],
  },{
    title: "CV Generator",
    description:
      "A full-stack web application for creating and managing professional CVs. Implemented a robust RESTful backend and a modern UI utilizing shadcn/ui components for a seamless user experience.",
    image: "/cv-generator.png", // Asigură-te că pui o captură de ecran în /public/
    githubLink: "https://github.com/UserLH1/CV-generator",
    demoLink: "#", 
    techStack: ["Node.js", "Express.js", "React", "TypeScript", "PostgreSQL"],
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
    year: "2025 – Present",
    title: "Master's in Cybersecurity",
    institution: "West University of Timișoara",
    description:
      "Currently pursuing a Master's degree focused on application security, penetration testing, and DevSecOps. Learning to bridge the gap between software engineering and offensive security to build resilient systems.",
    type: "education",
  },
  // TODO: Add any internship, part-time, or freelance work here
  {
    year: "March 2026 – Present",
    title: "Founder & Full Stack Engineer",
    institution: "Cortix",
    description:
      "Founded and developed a B2B SaaS. Managed full product lifecycle: from initial architecture (NestJS/Next.js) to cloud deployment, CI/CD, payment integration (Stripe), and successful market launch.",
    type: "work",
  },
  {
    year: "June 2023 – Present",
    title: "Full Stack Software Engineer",
    institution: "West University of Timișoara",
    description:
      "Architected a centralized request management platform. Beyond this flagship project, I developed various custom web solutions from scratch, built complex PHP plugins, and drove multiple digitalization initiatives across university departments.",
    type: "work",
  },
  {
    year: "Jan 2023 – June 2023",
    title: "Web Developer Intern",
    institution: "West University of Timișoara",
    description:
      "Spearheaded the redesign and migration of multiple faculty websites using WordPress and deployed an Open Journal Systems (OJS) platform, focusing on UI/UX and SEO.",
    type: "work",
  },
  // TODO: Add certifications (freeCodeCamp, Udemy, Coursera, etc.)
  {
    year: "2022 – 2025",
    title: "Bachelor's in Computer Science",
    institution: "West University of Timișoara",
    description:
      "Studied advanced data structures, software architecture, and cryptography. Developed an AI-enhanced Password Manager featuring real-time anomaly detection for the final thesis.",
    type: "education",
  },
];
