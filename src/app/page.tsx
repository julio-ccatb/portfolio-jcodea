"use client";

import { motion, useInView, useScroll } from "framer-motion";
import { Download, Github, Linkedin, LoaderCircle, Mail } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Card } from "~/components/ui/card";
import AboutSection from "./_components/about";
import ExperienceSection from "./_components/experiences";
import { ModeToggle } from "./_components/modeToggle";
import ProjectsSection from "./_components/projects";
const Scene = dynamic(() => import("./_components/scene"), {
  ssr: false,
  loading: () => (
    <LoaderCircle className="animate-spin text-primary" size={150} />
  ),
});

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [target, setTarget] = useState<string>("about");

  const refAbout = useRef<HTMLElement>(null);
  const refExperience = useRef<HTMLElement>(null);
  const refProjects = useRef<HTMLElement>(null);

  const aboutIsInView = useInView(refAbout, { amount: "all" });
  const experienceIsInView = useInView(refExperience, {
    margin: "-50%",
  });
  const projectsIsInView = useInView(refProjects, { margin: "-50%" });

  useEffect(() => {
    if (projectsIsInView) setTarget("project");
    if (experienceIsInView) setTarget("experience");
    if (aboutIsInView) setTarget("about");
    console.log({
      projectsIsInView,
      experienceIsInView,
      aboutIsInView,
    });
  }, [projectsIsInView, experienceIsInView, aboutIsInView]);

  return (
    <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="fixed bottom-8 right-8 z-50 lg:top-8">
        <ModeToggle />
      </div>
      <div className="relative lg:flex lg:justify-between lg:gap-4">
        <header
          id="about"
          className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
        >
          <div className="">
            <h1 className="text-4xl font-bold tracking-tight  sm:text-5xl">
              {`Hi, I'm `}
              <Link href={"/"} className="text-primary">
                Julio Castaño
              </Link>{" "}
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
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
                        className={`${target === "project" ? "!w-16 bg-primary text-primary" : ""} nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
                      ></span>
                      <Link href="#project">Projects</Link>
                    </li>

                    {/* <li
                      className={`${target === "skills" ? "text-primary " : ""} group flex items-center py-3 hover:text-foreground`}
                    >
                      <span
                        className={`nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none 
                        ${target === "skills" ? "!w-16 bg-primary text-primary" : ""}`}
                      ></span>
                      <Link href="#skills">Skills</Link>
                    </li> */}
                  </ul>
                </nav>
                <div className="items-centers ml-1 flex gap-4 text-muted-foreground lg:mt-8">
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

              <motion.div
                animate={{
                  y: scrollYProgress.get() * 100,

                  // rotateX: scrollYProgress.get() * 100 + 50,
                }}
                // transition={{ delay: 1 }}
                className=" relative flex w-1/2 items-center justify-end"
              >
                <Card
                  className={`cursor-pointer rounded-full bg-card lg:top-1/2 lg:h-[150px] lg:w-[150px] `}
                >
                  <Scene />
                </Card>
              </motion.div>
            </div>
          </div>
        </header>
        <main className="relative h-4/5 lg:w-2/3">
          <AboutSection refAbout={refAbout} />
          <ExperienceSection refExperience={refExperience} />
          <ProjectsSection refProjects={refProjects} />
        </main>
      </div>
    </div>
  );
}
