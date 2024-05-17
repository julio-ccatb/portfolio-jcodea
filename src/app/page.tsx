"use client";

import dynamic from "next/dynamic";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card } from "~/components/ui/card";

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
              Julio Castaño
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Software Developer
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xs leading-normal">
              I build pixel-perfect, engaging, and accessible digital
              experiences.
            </p>

            <nav className="nav hidden lg:block">
              <ul className="text-muted-foreground mt-16 w-max">
                <li className="active hover:text-foreground group flex items-center py-3">
                  <span className="nav-indicator bg-muted-foreground mr-4 h-px w-8 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <a href="/">About me</a>
                </li>
                <li className="active hover:text-foreground group flex items-center py-3">
                  <span className="nav-indicator bg-muted-foreground mr-4 h-px w-8 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <a href="/">Experience</a>
                </li>
                <li className="active hover:text-foreground group flex items-center py-3">
                  <span className="nav-indicator bg-muted-foreground mr-4 h-px w-8 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <a href="/">Projects</a>
                </li>
              </ul>
            </nav>
            <div className="items-centers ml-1 mt-8 flex gap-4">
              <Github size={25} />
              <Linkedin size={25} />
              <Mail size={25} />
            </div>
          </div>
        </header>
        <section className="relative bg-red-400 lg:w-2/3">
          <Card className="bg-card absolute -left-[75px] h-[150px] w-[150px] rounded-full">
            <Scene />
          </Card>
        </section>
      </div>
    </main>
  );
}
