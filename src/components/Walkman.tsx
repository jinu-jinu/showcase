import { MeshStandardMaterial, Texture } from "three";
import vertexShader from "./shaders/transition/vertex.glsl";
import fragmentShader from "./shaders/transition/fragment.glsl";
import CustomMaterial from "./CustomMaterial";

const Walkman = ({
  nodes,
  redTex,
  blackTex,
}: {
  nodes: any;
  redTex: {
    map: Texture;
    roughnessMap: Texture;
    metalnessMap: Texture;
  };
  blackTex: {
    map: Texture;
    roughnessMap: Texture;
    metalnessMap: Texture;
  };
}) => {
  const baseMaterial1 = new MeshStandardMaterial({
    metalnessMap: redTex.metalnessMap,
    roughnessMap: redTex.roughnessMap,
    toneMapped: false,
    transparent: true,
  });

  const baseMaterial2 = new MeshStandardMaterial({
    metalnessMap: blackTex.metalnessMap,
    roughnessMap: blackTex.roughnessMap,
    toneMapped: false,
    transparent: true,
  });

  const uniforms1 = {
    uTex: { value: redTex.map },
    uValue: { value: 1 },
  };

  const uniforms2 = {
    uTex: { value: blackTex.map },
    uValue: { value: 1 },
  };

  return (
    <group rotation={[Math.PI * 0.5, 0, Math.PI * 0.1]}>
      <mesh geometry={nodes.red.geometry}>
        <CustomMaterial
          baseMaterial={baseMaterial1}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms1}
        />
      </mesh>
      <mesh geometry={nodes.black.geometry} position={[0.696, 0.026, -0.124]}>
        <CustomMaterial
          baseMaterial={baseMaterial2}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms2}
        />
      </mesh>
    </group>
  );
};

export default Walkman;
