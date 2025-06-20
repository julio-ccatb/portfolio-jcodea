"use client";

import { motion, useInView, useScroll } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AboutSection from "./_components/about";
import ExperienceSection from "./_components/experiences";
import { ModeToggle } from "./_components/modeToggle";
import ProjectsSection from "./_components/projects";
import { Skeleton } from "~/components/ui/skeleton";
import Menu from "./_components/menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
const Scene = dynamic(() => import("./_components/scene"), {
  ssr: false,
  loading: () => (
    <Skeleton className="min-h-[150px] min-w-[150px] rounded-full bg-primary-foreground" />
  ),
});
type Language = {
  code: string;
  name: string;
  flag: string;
  href: string;
};
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
  const [open, setOpen] = useState(false);

  const languages: Language[] = [
    { code: "en", name: "English", flag: "🇺🇸", href: "ENG" },
    { code: "es", name: "Spanish", flag: "🇪🇸", href: "ES" },
  ];

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
              I design software solutions to enhance performance and digital
              presence.
            </p>

            <div className="mt-4 flex items-center justify-between lg:mt-0">
              <div className="lg:w-1/2">
                <Menu target={target} />
                <div
                  className={`items-centers ml-1 flex gap-4 text-muted-foreground lg:mt-8 ${scrollYProgress.get() > 0.9 && "mb-4"}`}
                >
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
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Download
                        size={25}
                        className={`hover:text-primary ${scrollYProgress.get() > 0.9 && "hidden"}`}
                      />
                    </PopoverTrigger>
                    <PopoverContent className="w-fit p-0" align="end">
                      <div className="p-2">
                        {languages.map((language) => (
                          <Button key={language.code} asChild variant={"ghost"}>
                            <Link
                              target="_blank"
                              href={`/Resume_${language.href}.pdf`}
                              className=""
                            >
                              {language.flag} {language.name}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <motion.div
                whileInView={{
                  opacity: [0, 1],
                  transition: { duration: 0.5 },
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: scrollYProgress.get() * 100 }}
                // transition={{ delay: 1 }}
                className={`relative flex w-1/2 items-center justify-end ${scrollYProgress.get() > 0.9 && "hidden"}`}
              >
                <Scene />
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
