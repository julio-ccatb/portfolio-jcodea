import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Model from "./models/model";

function Scene() {
  const { resolvedTheme } = useTheme();
  return (
    <motion.div
      whileTap={{ rotate: 180 }}
      whileInView={{
        opacity: [0, 1],
        transition: { duration: 1 },
      }}
      initial={{ scale: 1 }}
      animate={{
        opacity: 1,
        rotate: [180],
        borderColor: ["#04FCA6"],
      }}
      className={`z-50 cursor-pointer rounded-full border border-primary/5 bg-card lg:top-1/2 lg:h-[150px] lg:w-[150px]`}
    >
      <Canvas className="max-h-[150px] max-w-[150px]">
        {/* <Environment preset="night" /> */}
        <ambientLight
          color={resolvedTheme === "dark" ? "#09090B" : "04FCA6"}
          position={[-4, -10, -5]}
          intensity={resolvedTheme === "dark" ? 0.5 : 1.5}
        />
        <pointLight
          color={"#04FCA6"}
          intensity={resolvedTheme === "dark" ? 500 : 500}
          position={[-5, -3, -5]}
        />
        <pointLight
          color={"#04FCA6"}
          intensity={resolvedTheme === "dark" ? 500 : 500}
          position={[2, -2, 0]}
        />
        <Model />
      </Canvas>
    </motion.div>
  );
}

export default Scene;
