import { Mesh, MeshStandardMaterial, Texture } from "three";
import vertexShader from "./shaders/transition/vertex.glsl";
import fragmentShader from "./shaders/transition/fragment.glsl";
import CustomMaterial from "./CustomMaterial";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Viking = ({ nodes, tex }: { nodes: any; tex: Texture }) => {
  const rotateRef = useRef<Mesh>(null!);
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

  useFrame(({ clock }) => {
    const et = clock.elapsedTime;
    if (!rotateRef.current) return;
    const v = Math.cos(et) * 0.4;
    rotateRef.current.rotation.z = Math.PI * v;
  });

  return (
    <group scale={1.4} dispose={null} position={[0, -1, 0]}>
      <mesh geometry={nodes.viking.geometry} position={[0, 1.556, 0]}>
        <CustomMaterial
          baseMaterial={baseMaterial}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
      <mesh ref={rotateRef} geometry={nodes.rotate.geometry} position={[0, 1.556, 0]}>
        <CustomMaterial
          baseMaterial={baseMaterial}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
    </group>
  );
};

export default Viking;
