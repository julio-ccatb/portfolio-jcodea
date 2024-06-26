import { motion } from "framer-motion";
import { type RefObject } from "react";
import { Separator } from "~/components/ui/separator";
import ProjectCard, { type Project } from "./projectCard";

const projects: Project[] = [
  {
    title: "Portfolio",
    github: "https://github.com/julio-ccatb/portfolio-jcodea",

    description:
      "This portfolio, developed using T3 Stack and Shadcn, provides a platform to showcase my work. Feel free to explore and see what I've been working on.",
    link: "https://me.jcodea.com",
    tags: [
      "Next.js",
      "TypeScript",
      "Shadcn",
      "Three.js",
      "Tailwind",
      "Framer Motion",
    ],
  },
  {
    title: "Color Unit",
    description:
      "This application is responsible for ensuring the quality and excellence of Ozono Químicos and its products. It manages everything from inventory to production and later dispatch of orders. This web application was created using Next.js and is the evolution of a previous desktop application made in C#.",
    link: "https://ozono.jcodea.com",
    tags: ["Next.js", "TypeScript", "DaisyUI", "Tailwind", "Stripe"],
  },
  {
    title: "Inateso Institute (Atabey Foundation)",
    description:
      "This web page was made for the Atabey Foundation as an intership using WordPress, later updated to recive donations via PayPal",
    link: "https://inateso.com",
    tags: ["WordPress", "CPanel", "CSS", "WooCommerce", "PHP", "Elementor"],
  },
];

const ProjectsSection = ({
  refProjects,
}: {
  refProjects: RefObject<HTMLElement>;
}) => (
  <motion.section ref={refProjects} id="project" className="mt-12 ">
    <Separator className="mb-4"></Separator>
    <h2 className="mt-12 text-sm font-bold uppercase tracking-widest lg:sr-only">
      Projects
    </h2>
    <div className="flex flex-col gap-4 px-0 pt-4 lg:mt-8 lg:pl-24">
      <ul className="group/list">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
    </div>
  </motion.section>
);

export default ProjectsSection;
