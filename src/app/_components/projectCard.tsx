import { motion } from "framer-motion";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

export type Project = {
  title: string;
  image?: string;
  link?: string;
  github?: string;
  description: string;
  tags: string[];
  img: string;
};

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.li
    whileInView={{
      opacity: [0, 1],
      transition: { duration: 1 },
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    whileHover={{ scale: 1.02 }}
    className="z-40 mb-12 p-4 hover:cursor-pointer hover:text-primary"
  >
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3>
          <Link
            target="_blank"
            className="inline-flex items-baseline text-sm font-semibold leading-tight  hover:text-primary focus-visible:text-primary"
            href={project.link ?? "/"}
          >
            {project.link && !project.github ? (
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            ) : null}
            <span className="flex items-center gap-2 transition-all duration-300 ease-in-out">
              {project.title}{" "}
              {project.link && !project.github && (
                <span className=" hover:text-primary">
                  <SquareArrowOutUpRight size={15} />
                </span>
              )}
            </span>
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-normal text-muted-foreground">
          {project.description}
        </p>
        {project.github && (
          <div className="!z-50 mt-2 flex flex-wrap gap-2 transition-all !duration-300 ease-in-out">
            <Link href={project.github} target="_blank">
              <Button variant="link">
                <Github size={15} />
              </Button>
            </Link>
            {project.link && (
              <Link href={project.link} target="_blank">
                <Button variant={"link"}>View</Button>
              </Link>
            )}
          </div>
        )}
        <div className=" mt-2 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <Image
        alt="not avilable"
        src={project.img ?? "/not-avilable.png"}
        width={120}
        height={120}
        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
      />
    </div>
  </motion.li>
);

export default ProjectCard;
