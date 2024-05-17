"use client";

import dynamic from "next/dynamic";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card } from "~/components/ui/card";
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
          <Card className="absolute -left-[75px] top-1/2 h-[150px] w-[150px] cursor-pointer rounded-full bg-card">
            <Scene />
          </Card>
        </section>
      </div>
    </main>
  );
}
