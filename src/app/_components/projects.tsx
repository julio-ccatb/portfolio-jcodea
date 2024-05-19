import { motion } from "framer-motion";
import { type RefObject } from "react";

const ProjectsSection = ({
  refProjects,
}: {
  refProjects: RefObject<HTMLElement>;
}) => (
  <motion.section ref={refProjects} id="project" className="pt-4">
    <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
      Projects
    </h2>
  </motion.section>
);

export default ProjectsSection;
