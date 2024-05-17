import { Canvas } from "@react-three/fiber";
import Model from "./models/model";
import { Environment } from "@react-three/drei";

function Scene() {
  return (
    <Canvas>
      <Environment preset="warehouse" />
      <Model />
    </Canvas>
  );
}

export default Scene;
