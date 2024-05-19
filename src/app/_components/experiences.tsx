import React, { type RefObject } from "react";
import { motion } from "framer-motion";
import ExperienceCard, { type Experience } from "./experienceCard";

const experiences: Experience[] = [
  {
    date: "2021 — Present",
    title: "Network Administrator",
    company: "Colegio Loyola Santo Domingo",
    description:
      "Build and maintain the workflows, servers and storages for the company and aplaying new infras structure as needed.",
    tags: [
      "Networking",
      "NextJs",
      "Cisco",
      "Proxmox",
      "PowerShell",
      "UI/UX",
      "Python",
    ],
  },
  {
    date: "2022 — Present",
    title: "Independent Consultant",
    company: "Dvine Studios",
    link: "https://dvinestudios.com/",
    description:
      "Build and maintain the workflows, servers and storages for the company and aplaying new infras structure as needed.",
    tags: ["Networking", "Wordpress", "CPanel", "Windows Server 2022"],
  },
  {
    date: "2019 - Present",
    title: "Software Developer",
    company: "Ozono Quimicos",
    link: "https://ozono.jcodea.com/",
    description:
      "I've develop user-friendly applications across different departments, aimed at maintaining consistent product quality and ensuring the reproducibility of the manufacturing processes.",
    tags: ["TypeScript", "NextJs", "Prisma", "TRPC", "Tailwind"],
  },
  {
    date: "Jul 2021 - Dec 2021",
    title: "Developer Intern",
    company: "Atabey",
    link: "https://inateso.com/",
    description:
      "      At Atabay Foundation, I oversaw the implementation of Moodle for online courses and created interactive content. Additionally, I developed a webpage for Inateso using WordPress.",
    tags: ["Moodle", "WordPress"],
  },
  {
    date: "Oct 2019 - Apr 2020",
    title: "Senior Database Manager",
    company: "Soluflex",
    description:
      "As an SQL Database Engineer, I specialized in database design, optimization, and performance tuning. Leveraging SQL expertise, I ensured secure and efficient data management, supporting organizational objectives with seamless database operations.",
    tags: ["SQL", "PwerShell", "MongoDB"],
  },
];

const ExperienceSection = ({
  refExperience,
}: {
  refExperience: RefObject<HTMLElement>;
}) => (
  <motion.section ref={refExperience} id="experience" className="pt-4">
    <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
      Expeiences
    </h2>
    <motion.div className="flex flex-col gap-4 px-0 pt-4  lg:pl-24 lg:pt-0">
      {experiences.map((experience) => (
        <ExperienceCard experience={experience} key={experience.company} />
      ))}
    </motion.div>
  </motion.section>
);

export default ExperienceSection;
