import { Text, useTexture } from "@react-three/drei";

function Model() {
  const props = useTexture({
    map: "MetalPlates006_1K-JPG_Color.jpg",
    normalMap: "MetalPlates006_1K-JPG_NormalDX.jpg",
    roughnessMap: "MetalPlates006_1K-JPG_Roughness.jpg",
    aoMap: "MetalPlates006_1K-JPG_Displacement.jpg",
  });

  return (
    <mesh>
      <sphereGeometry args={[2, 64, 32]} />
      <meshStandardMaterial {...props} />
    </mesh>
  );
}

export default Model;
