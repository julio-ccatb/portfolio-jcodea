import { motion } from "framer-motion";
import { type RefObject } from "react";

const AboutSection = ({ refAbout }: { refAbout: RefObject<HTMLElement> }) => (
  <motion.section
    whileInView={{
      opacity: [0, 1],
      transition: { duration: 0.5 },
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    ref={refAbout}
    className="h-full w-full lg:mt-24"
  >
    <div className="flex flex-col gap-2 px-0 pt-4 lg:px-4 lg:pl-24 lg:pt-0">
      <h2 className="pb-10 text-sm font-bold uppercase tracking-widest lg:sr-only">
        About
      </h2>
      <p className="leading-normal text-muted-foreground">
        I began coding in 2016, specializing in{" "}
        <span className="font-bold text-primary/80 hover:cursor-pointer">
          JavaScript
        </span>{" "}
        and{" "}
        <span className="font-bold text-primary/80 hover:cursor-pointer">
          TypeScript
        </span>
        . Over the years, I’ve helped businesses streamline their operations and
        enhance their online presence with custom software solutions. This
        hands-on experience sparked my passion for building tools that drive
        growth.
      </p>
      <p className="leading-normal text-muted-foreground">
        While pursuing my degree, I worked in entry-level roles that allowed me
        to refine my skills further. Through these experiences, I gained
        valuable insight into creating efficient, user-friendly solutions for
        various industries.
      </p>
      <p className="pb-24 leading-normal text-muted-foreground">
        Today, I’m focused on creating practical software solutions that help
        businesses thrive in the digital world, with a strong emphasis on
        JavaScript and TypeScript.
      </p>
    </div>
  </motion.section>
);

export default AboutSection;
