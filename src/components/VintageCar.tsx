import { useGLTF } from "@react-three/drei";
import vertexShader from "./shaders/transition/vertex.glsl";
import fragmentShader from "./shaders/transition/fragment.glsl";
import mirrorFragmentShader from "./shaders/mirror/fragment.glsl";
import { MeshStandardMaterial, Texture } from "three";
import CustomMaterial from "./CustomMaterial";

const VintageCar = ({
  nodes,
  tex,
}: {
  nodes: any;
  tex: {
    map: Texture;
    roughnessMap: Texture;
    metalnessMap: Texture;
  };
}) => {
  const baseMaterial1 = new MeshStandardMaterial({
    metalnessMap: tex.metalnessMap,
    roughnessMap: tex.roughnessMap,
    metalness: 1.1,
    roughness: 0.6,
    toneMapped: false,
    transparent: true,
  });

  const uniforms1 = {
    uTex: { value: tex.map },
    uValue: { value: 1 },
  };

  const baseMaterial2 = new MeshStandardMaterial({
    roughness: 0,
    metalness: 0.7,
    transparent: true,
  });

  const uniforms2 = {
    uValue: { value: 1 },
  };

  return (
    <group dispose={null} position={[0, -0.35, 0]}>
      <group position={[0.001, 0, 1.34]}>
        <mesh geometry={nodes.body.geometry}>
          <CustomMaterial
            baseMaterial={baseMaterial1}
            uniforms={uniforms1}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
          />
        </mesh>
        <mesh geometry={nodes.glass.geometry}>
          <CustomMaterial
            baseMaterial={baseMaterial2}
            uniforms={uniforms2}
            vertexShader={vertexShader}
            fragmentShader={mirrorFragmentShader}
          />
        </mesh>
      </group>
    </group>
  );
};

export default VintageCar;
useGLTF.preload("./models/vintageCar.glb");
