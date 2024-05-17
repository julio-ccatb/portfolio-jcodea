import { Text, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

function Model() {
  const mesh = useRef<Mesh>();

  const props = useTexture({
    map: "MetalPlates006_1K-JPG_Color.jpg",
    normalMap: "MetalPlates006_1K-JPG_NormalDX.jpg",
    roughnessMap: "MetalPlates006_1K-JPG_Roughness.jpg",
    aoMap: "MetalPlates006_1K-JPG_Displacement.jpg",
  });

  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={mesh as unknown as React.MutableRefObject<Mesh>}>
      <sphereGeometry args={[3, 64, 32]} />
      <meshStandardMaterial {...props} />
    </mesh>
  );
}

export default Model;
