import { Mesh, MeshStandardMaterial, Texture } from "three";
import vertexShader from "./shaders/transition/vertex.glsl";
import swingVertexShader from "./shaders/Swing/vertex.glsl";
import fragmentShader from "./shaders/transition/fragment.glsl";
import CustomMaterial from "./CustomMaterial";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Swing = ({ nodes, tex }: { nodes: any; tex: Texture }) => {
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
    uTime: { value: 0 },
  };

  useFrame(({ clock }) => {
    const et = clock.elapsedTime;
    if (!rotateRef.current) return;
    const v = Math.cos(et) * 0.4;
    rotateRef.current.rotation.z = Math.PI * v;
    uniforms.uTime.value = et;
  });

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
      <mesh ref={rotateRef} geometry={nodes.rotate.geometry} position={[0, 1.637, 0]}>
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
            vertexShader={swingVertexShader}
            fragmentShader={fragmentShader}
          />
        </mesh>
      </mesh>
    </group>
  );
};

export default Swing;
