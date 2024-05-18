import { Canvas } from "@react-three/fiber";
import Model from "./models/model";
import { Environment } from "@react-three/drei";

function Scene() {
  return (
    <Canvas className="max-h-[150px] max-w-[150px]">
      {/* <Environment preset="night" /> */}
      <ambientLight color={"green"} intensity={0.5} />
      <pointLight color={"red"} intensity={250} position={[-5, -3, -5]} />
      <pointLight color={"green"} intensity={100} position={[5, -3, 5]} />
      <Model />
    </Canvas>
  );
}

export default Scene;
