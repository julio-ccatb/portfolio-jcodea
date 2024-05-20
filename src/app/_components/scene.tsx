import { Canvas } from "@react-three/fiber";
import Model from "./models/model";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

function Scene() {
  const { resolvedTheme } = useTheme();

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        borderColor: "#04FCA6",
        transition: { duration: 2 },
      }}
      whileInView={{
        opacity: [0, 1],
        transition: { duration: 1 },
      }}
      animate={{ opacity: 1 }}
      className={`cursor-pointer rounded-full border border-primary/5 bg-card lg:top-1/2 lg:h-[150px] lg:w-[150px]`}
    >
      <Canvas className="max-h-[150px] max-w-[150px]">
        {/* <Environment preset="night" /> */}
        <ambientLight
          color={resolvedTheme === "dark" ? "#09090B" : "04FCA6"}
          position={[-4, -10, -5]}
          intensity={resolvedTheme === "dark" ? 0.5 : 8}
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
