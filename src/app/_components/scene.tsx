import { Canvas } from "@react-three/fiber";
import Model from "./models/model";
import { Environment, CameraControls } from "@react-three/drei";

function Scene() {
  return (
    <Canvas className="h-[150px] w-[150px]">
      <CameraControls />
      <Environment preset="warehouse" />
      <pointLight color={"red"} intensity={105} position={[0, 0, 0]} />
      <Model />
    </Canvas>
  );
}

export default Scene;
