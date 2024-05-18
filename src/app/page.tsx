"use client";

import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Download, Github, Linkedin, LoaderCircle, Mail } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { type LegacyRef, type RefObject, useRef, useState } from "react";
import { Card } from "~/components/ui/card";
import ExperienceCard, { type Experience } from "./_components/experienceCard";
const Scene = dynamic(() => import("./_components/scene"), {
  ssr: false,
  loading: () => <LoaderCircle size={150} />,
});

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

export default function Home() {
  const { scrollY } = useScroll();

  const [target, setTarget] = useState<string>("about");
  const refAbout = useRef();
  const refExperience = useRef();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (ExperienceisInView) setTarget("experience");
    if (aboutisInView) setTarget("about");
    // console.log(latest);
  });

  const aboutisInView = useInView(
    refAbout as unknown as RefObject<HTMLElement>,
    { amount: "all" },
  );
  const ExperienceisInView = useInView(
    refExperience as unknown as RefObject<HTMLElement>,
    { amount: "some" },
  );

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="relative lg:flex lg:justify-between lg:gap-4">
        <header
          id="about"
          className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
        >
          <div className="">
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              {`Hi, I'm `}
              <Link href={"/"} className="text-primary">
                Julio Castaño
              </Link>{" "}
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Software Developer
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
              I build pixel-perfect, engaging, and accessible digital
              experiences.
            </p>

            <div className="mt-4 flex items-center justify-between lg:mt-0">
              <div className="lg:w-1/2">
                <nav className="nav hidden lg:block">
                  <ul className="mt-16 w-max text-xs font-extrabold uppercase text-muted-foreground">
                    <li
                      className={`${target === "about" ? "text-primary " : ""} group flex items-center py-3 hover:text-foreground`}
                    >
                      <span
                        className={`nav-indicator group mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none 
                        ${target === "about" ? "!w-16 bg-primary text-primary" : "w-8"}`}
                      ></span>
                      <Link href="#about">About me</Link>
                    </li>
                    <li
                      className={`${target === "experience" ? "text-primary " : ""} group flex items-center py-3 hover:text-foreground`}
                    >
                      <span
                        className={`${target === "experience" ? "!w-16 bg-primary text-primary" : ""} nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
                      ></span>
                      <Link href="#experience">Experience</Link>
                    </li>
                    <li
                      className={`${target === "project" ? "text-primary " : ""} group flex items-center py-3 hover:text-foreground`}
                    >
                      <span
                        className={`nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none 
                        ${target === "projects" ? "!w-16 bg-primary text-primary" : ""}`}
                      ></span>
                      <Link href="#project">Projects</Link>
                    </li>
                    <li
                      className={`${target === "skills" ? "text-primary " : ""} group flex items-center py-3 hover:text-foreground`}
                    >
                      <span
                        className={`nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none 
                        ${target === "skills" ? "!w-16 bg-primary text-primary" : ""}`}
                      ></span>
                      <Link href="#skills">Skills</Link>
                    </li>
                  </ul>
                </nav>
                <div className="items-centers ml-1 mt-8 flex gap-4 text-muted-foreground">
                  <Link target="_blank" href={"https://github.com/julio-ccatb"}>
                    <Github size={25} className="hover:text-primary" />
                  </Link>
                  <Link
                    target="_blank"
                    href={"https://www.linkedin.com/in/julio-cca/"}
                  >
                    <Linkedin size={25} className="hover:text-primary" />
                  </Link>
                  <Link href={"mailto:jcastano@jcodea.com"}>
                    <Mail size={25} className="hover:text-primary" />
                  </Link>
                  <Link href={""}>
                    <Download size={25} className="hover:text-primary" />
                  </Link>
                </div>
              </div>
              <div className=" relative flex w-1/2 items-center justify-end">
                <Card className=" cursor-pointer rounded-full bg-card lg:top-1/2 lg:h-[150px] lg:w-[150px]">
                  <Scene />
                </Card>
              </div>
            </div>
          </div>
        </header>
        <main className="relative h-4/5 lg:w-2/3">
          <motion.section
            onViewportEnter={() => console.log(1)}
            ref={refAbout as unknown as LegacyRef<HTMLElement>}
            className="h-full w-full lg:mt-24"
          >
            <div className="flex flex-col gap-2 px-0 pt-4 lg:px-4 lg:pl-24 lg:pt-0">
              <p className="leading-normal text-muted-foreground">
                My journey into coding began in 2016 when I started developing
                solutions in
                <span className="font-bold text-primary/80 hover:cursor-pointer">
                  {" "}
                  C#{" "}
                </span>
                and
                <span className="font-bold text-primary/80 hover:cursor-pointer">
                  {" "}
                  JavaScript{" "}
                </span>
                for local businesses in my area. These businesses needed
                customized software to streamline their operations, and I
                quickly found myself immersed in the world of coding,
                problem-solving, and creating efficient solutions. This hands-on
                experience not only honed my programming skills but also ignited
                my passion for technology and its applications in real-world
                scenarios.
              </p>
              <p className=" leading-normal text-muted-foreground">
                When I began university, I leveraged this foundation to secure
                several entry-level jobs. These roles allowed me to further
                develop my expertise and gain valuable industry experience.
                Balancing my studies with these positions, I continued to learn
                and grow, driven by a commitment to excellence and a desire to
                innovate.
              </p>
              <p className="pb-24 leading-normal text-muted-foreground">
                Today, I am a dedicated and enthusiastic developer, constantly
                seeking new challenges and opportunities to apply my skills. My
                early start and practical experience have shaped me into a
                versatile and resourceful professional, ready to contribute to
                the ever-evolving field of technology.
              </p>
            </div>
          </motion.section>
          <motion.section
            ref={refExperience as unknown as LegacyRef<HTMLElement>}
            id="experience"
            className="pt-4"
          >
            <div className="flex flex-col gap-4 px-0 pt-4  lg:pl-24 lg:pt-0">
              {experiences.map((experience) => (
                <ExperienceCard
                  experience={experience}
                  key={experience.company}
                />
              ))}
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
