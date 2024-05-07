import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lights from "./Lights";
import Background from "./Background";
import Models from "./Models";

const Experience = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} shadows>
      <OrbitControls
        autoRotate
        maxPolarAngle={Math.PI * 0.4}
        minPolarAngle={Math.PI * 0.2}
        enableZoom={false}
      />
      <Lights />

      <Models />
      <Background />
    </Canvas>
  );
};

export default Experience;
