import { motion } from "framer-motion";
import { type RefObject } from "react";
import { Separator } from "~/components/ui/separator";
import ProjectCard, { type Project } from "./projectCard";

const projects: Project[] = [
  {
    title: "Dra. Ofara Pacheco - Dental Clinic",
    description:
      "This website was created for the Dra. Ofara Pacheco Dental Clinic. It was built using Next.js and Tailwind CSS and is hosted on Vercel.",
    link: "https://drapacheco.com",
    tags: ["Next.js", "TypeScript", "Shadcn", "Tailwind", "Framer Motion"],
    img: "https://3hdrj4nvyn.ufs.sh/f/EgtRYMwXFUCykF5Q3dpcGFtfvneQ6AKq7P2sILOMxXhwyVET",
  },
  {
    title: "Portfolio",
    github: "https://github.com/julio-ccatb/portfolio-jcodea",

    description:
      "This portfolio, built with the T3 Stack and ShadCN UI, serves as a platform to showcase my work. Feel free to explore and discover what I’ve been working on!",
    link: "https://me.jcodea.com",
    tags: [
      "Next.js",
      "TypeScript",
      "Shadcn",
      "Three.js",
      "Tailwind",
      "Framer Motion",
    ],
    img: "https://utfs.io/f/f043a048-0755-4712-b173-c61a52a487c1-n3k5xe.png",
  },
  {
    title: "Color Unit",
    description:
      "This application is responsible for ensuring the quality and excellence of Ozono Químicos and its products. It manages everything from inventory to production and the subsequent dispatch of orders. This web application was created using Next.js and is the evolution of a previous desktop application developed in C#.",
    link: "https://ozono.jcodea.com",
    tags: ["Next.js", "TypeScript", "DaisyUI", "Tailwind", "Stripe"],

    img: "https://utfs.io/f/1c2d35aa-70ea-4356-b533-bdaf2fefdead-hpliu7.png",
  },
  {
    title: "Inateso Institute (Atabey Foundation)",
    description:
      "This web page was created for the Atabey Foundation as part of an internship using WordPress. It was later updated to support donations via PayPal.",
    link: "https://inateso.com",
    tags: ["WordPress", "CPanel", "CSS", "WooCommerce", "PHP", "Elementor"],
    img: "https://utfs.io/f/a0cbc294-d6cb-4351-9c70-c77f69f64237-befg6v.png",
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
