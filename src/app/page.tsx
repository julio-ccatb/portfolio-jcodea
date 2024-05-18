"use client";

import dynamic from "next/dynamic";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card, CardContent, CardDescription } from "~/components/ui/card";
import Link from "next/link";

const Scene = dynamic(() => import("./_components/scene"), {
  ssr: false,
  loading: () => <h3>...Loading</h3>,
});

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4 ">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div className="">
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              {`Hi, I'm `}
              <span className="text-primary">Julio Castaño</span>{" "}
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Software Developer
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
              I build pixel-perfect, engaging, and accessible digital
              experiences.
            </p>

            <nav className="nav hidden lg:block">
              <ul className="mt-16 w-max text-muted-foreground">
                <li className="active group flex items-center py-3 hover:text-foreground">
                  <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <Link href="/">About me</Link>
                </li>
                <li className="active group flex items-center py-3 hover:text-foreground">
                  <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <Link href="/">Experience</Link>
                </li>
                <li className="active group flex items-center py-3 hover:text-foreground">
                  <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <Link href="/">Projects</Link>
                </li>
              </ul>
            </nav>
            <div className="items-centers ml-1 mt-8 flex gap-4 text-muted-foreground">
              <Github size={25} className="hover:text-primary" />
              <Linkedin size={25} className="hover:text-primary" />
              <Mail size={25} className="hover:text-primary" />
            </div>
          </div>
        </header>
        <section className="relative lg:w-2/3">
          <Card className="absolute -top-[150px] right-0 cursor-pointer rounded-full bg-card lg:-left-[95px] lg:top-1/2 lg:h-[150px] lg:w-[150px]">
            <Scene />
          </Card>
          <div className="mt-32 h-full w-full lg:mt-24">
            <CardContent className="flex flex-col gap-4 pt-4 lg:pl-24 lg:pt-0">
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
              <p className="mt-4 leading-normal text-muted-foreground">
                When I began university, I leveraged this foundation to secure
                several entry-level jobs. These roles allowed me to further
                develop my expertise and gain valuable industry experience.
                Balancing my studies with these positions, I continued to learn
                and grow, driven by a commitment to excellence and a desire to
                innovate.
              </p>
              <p className="mt-4 leading-normal text-muted-foreground">
                Today, I am a dedicated and enthusiastic developer, constantly
                seeking new challenges and opportunities to apply my skills. My
                early start and practical experience have shaped me into a
                versatile and resourceful professional, ready to contribute to
                the ever-evolving field of technology.
              </p>
            </CardContent>
          </div>
        </section>
      </div>
    </main>
  );
}
