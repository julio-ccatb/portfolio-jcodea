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
        My journey into coding began in 2016 when I started developing solutions
        in
        <span className="font-bold text-primary/80 hover:cursor-pointer">
          {" "}
          C#{" "}
        </span>
        and
        <span className="font-bold text-primary/80 hover:cursor-pointer">
          {" "}
          JavaScript{" "}
        </span>
        for local businesses in my area. These businesses needed customized
        software to streamline their operations, and I quickly found myself
        immersed in the world of coding, problem-solving, and creating efficient
        solutions. This hands-on experience not only honed my programming skills
        but also ignited my passion for technology and its applications in
        real-world scenarios.
      </p>
      <p className=" leading-normal text-muted-foreground">
        When I began university, I leveraged this foundation to secure several
        entry-level jobs. These roles allowed me to further develop my expertise
        and gain valuable industry experience. Balancing my studies with these
        positions, I continued to learn and grow, driven by a commitment to
        excellence and a desire to innovate.
      </p>
      <p className="pb-24 leading-normal text-muted-foreground">
        Today, I am a dedicated and enthusiastic developer, constantly seeking
        new challenges and opportunities to apply my skills. My early start and
        practical experience have shaped me into a versatile and resourceful
        professional, ready to contribute to the ever-evolving field of
        technology.
      </p>
    </div>
  </motion.section>
);

export default AboutSection;
