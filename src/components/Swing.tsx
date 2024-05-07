import { MeshStandardMaterial, Texture } from "three";
import vertexShader from "./shaders/transition/vertex.glsl";
import fragmentShader from "./shaders/transition/fragment.glsl";
import CustomMaterial from "./CustomMaterial";

const Swing = ({ nodes, tex }: { nodes: any; tex: Texture }) => {
  const baseMaterial = new MeshStandardMaterial({
    toneMapped: false,
    transparent: true,
    metalness: 0.3,
    roughness: 0.3,
  });

  const uniforms = {
    uTex: { value: tex },
    uValue: { value: 1 },
  };

  return (
    <group scale={1.5} dispose={null} position={[0, -1.1, 0]}>
      <mesh geometry={nodes.swing.geometry} position={[0, 1.964, 0]}>
        <CustomMaterial
          baseMaterial={baseMaterial}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
      <mesh geometry={nodes.rotate.geometry} position={[0, 1.637, 0]}>
        <CustomMaterial
          baseMaterial={baseMaterial}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
        <mesh geometry={nodes.rotate2.geometry} position={[0, -1.349, 0]}>
          <CustomMaterial
            baseMaterial={baseMaterial}
            uniforms={uniforms}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
          />
        </mesh>
      </mesh>
    </group>
  );
};

export default Swing;
