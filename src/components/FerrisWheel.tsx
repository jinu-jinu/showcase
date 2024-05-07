import { useRef } from "react";
import { Mesh, MeshStandardMaterial, Texture } from "three";
import vertexShader from "./shaders/transition/vertex.glsl";
import fragmentShader from "./shaders/transition/fragment.glsl";
import ferrisWheelVertexShader from "./shaders/FerrisWheel/vertex.glsl";
import mirrorFragmentShader from "./shaders/mirror/fragment.glsl";
import { useFrame } from "@react-three/fiber";
import CustomMaterial from "./CustomMaterial";

const FerrisWheel = ({ nodes, tex }: { nodes: any; tex: Texture }) => {
  const ferrisWheelRotate = useRef<Mesh>(null!);

  const baseMaterial = new MeshStandardMaterial({
    toneMapped: false,
    transparent: true,
    roughness: 0.1,
    metalness: 0.3,
  });

  const uniforms1 = {
    uTex: { value: tex },
    uValue: { value: 1 },
  };

  const uniforms2 = {
    uTime: { value: 0 },
    uRotZ: { value: 0 },
    uValue: { value: 1 },
  };

  const uniforms3 = {
    uTex: { value: tex },
    uTime: { value: 0 },
    uRotZ: { value: 0 },
    uValue: { value: 1 },
  };

  useFrame(({ clock }, dt) => {
    const et = clock.elapsedTime * 1.5;
    if (!ferrisWheelRotate.current) return;
    ferrisWheelRotate.current.rotation.z -= dt * 0.1;
    if (ferrisWheelRotate.current.rotation.z <= -360) ferrisWheelRotate.current.rotation.z = 0;
    uniforms2.uTime.value = et;
    uniforms2.uRotZ.value = ferrisWheelRotate.current.rotation.z;
    uniforms3.uTime.value = et;
    uniforms3.uRotZ.value = ferrisWheelRotate.current.rotation.z;
  });

  return (
    <group scale={0.07} dispose={null} position={[0, -1.4, 0]}>
      <mesh geometry={nodes.ferrisWheelBody.geometry} position={[-0.109, 0.373, -3.78]}>
        <CustomMaterial
          baseMaterial={baseMaterial}
          uniforms={uniforms1}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
      <mesh
        ref={ferrisWheelRotate}
        geometry={nodes.ferrisWheelRotate.geometry}
        position={[-0.161, 27.696, -3.821]}
      >
        <CustomMaterial
          baseMaterial={baseMaterial}
          uniforms={uniforms1}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />

        <group>
          <group position={[0.001, 19.283, 0.027]}>
            <mesh geometry={nodes.Circle010.geometry}>
              <CustomMaterial
                baseMaterial={baseMaterial}
                uniforms={uniforms3}
                vertexShader={ferrisWheelVertexShader}
                fragmentShader={fragmentShader}
              />
            </mesh>
            <mesh geometry={nodes.Circle010_1.geometry}>
              <CustomMaterial
                baseMaterial={baseMaterial}
                uniforms={uniforms2}
                vertexShader={ferrisWheelVertexShader}
                fragmentShader={mirrorFragmentShader}
              />
            </mesh>
          </group>

          <group position={[-11.462, 15.558, 0.027]}>
            <mesh geometry={nodes.Circle009.geometry}>
              <CustomMaterial
                baseMaterial={baseMaterial}
                uniforms={uniforms3}
                vertexShader={ferrisWheelVertexShader}
                fragmentShader={fragmentShader}
              />
            </mesh>

            <mesh geometry={nodes.Circle009_1.geometry}>
              <CustomMaterial
                baseMaterial={baseMaterial}
                uniforms={uniforms2}
                vertexShader={ferrisWheelVertexShader}
                fragmentShader={mirrorFragmentShader}
              />
            </mesh>
          </group>
          <group position={[11.467, 15.556, 0.027]}>
            <mesh geometry={nodes.Circle011.geometry}>
              <CustomMaterial
                baseMaterial={baseMaterial}
                uniforms={uniforms3}
                vertexShader={ferrisWheelVertexShader}
                fragmentShader={fragmentShader}
              />
            </mesh>

            <mesh geometry={nodes.Circle011_1.geometry}>
              <CustomMaterial
                baseMaterial={baseMaterial}
                uniforms={uniforms2}
                vertexShader={ferrisWheelVertexShader}
                fragmentShader={mirrorFragmentShader}
              />
            </mesh>
          </group>
          <group position={[18.554, 5.801, 0.027]}>
            <mesh geometry={nodes.Circle001.geometry}>
              <CustomMaterial
                baseMaterial={baseMaterial}
                uniforms={uniforms3}
                vertexShader={ferrisWheelVertexShader}
                fragmentShader={fragmentShader}
              />
            </mesh>

            <mesh geometry={nodes.Circle001_1.geometry}>
              <CustomMaterial
                baseMaterial={baseMaterial}
                uniforms={uniforms2}
                vertexShader={ferrisWheelVertexShader}
                fragmentShader={mirrorFragmentShader}
              />
            </mesh>
          </group>
          <group position={[18.553, -6.256, 0.027]}>
            <mesh geometry={nodes.Circle003.geometry}>
              <CustomMaterial
                baseMaterial={baseMaterial}
                uniforms={uniforms3}
                vertexShader={ferrisWheelVertexShader}
                fragmentShader={fragmentShader}
              />
            </mesh>

            <mesh geometry={nodes.Circle003_1.geometry}>
              <CustomMaterial
                baseMaterial={baseMaterial}
                uniforms={uniforms2}
                vertexShader={ferrisWheelVertexShader}
                fragmentShader={mirrorFragmentShader}
              />
            </mesh>
          </group>
          <group position={[11.466, -16.011, 0.027]}>
            <mesh geometry={nodes.Circle004.geometry}>
              <CustomMaterial
                baseMaterial={baseMaterial}
                uniforms={uniforms3}
                vertexShader={ferrisWheelVertexShader}
                fragmentShader={fragmentShader}
              />
            </mesh>

            <mesh geometry={nodes.Circle004_1.geometry}>
              <CustomMaterial
                baseMaterial={baseMaterial}
                uniforms={uniforms2}
                vertexShader={ferrisWheelVertexShader}
                fragmentShader={mirrorFragmentShader}
              />
            </mesh>
          </group>
          <group position={[-0.001, -19.736, 0.027]}>
            <mesh geometry={nodes.Circle005.geometry}>
              <CustomMaterial
                baseMaterial={baseMaterial}
                uniforms={uniforms3}
                vertexShader={ferrisWheelVertexShader}
                fragmentShader={fragmentShader}
              />
            </mesh>

            <mesh geometry={nodes.Circle005_1.geometry}>
              <CustomMaterial
                baseMaterial={baseMaterial}
                uniforms={uniforms2}
                vertexShader={ferrisWheelVertexShader}
                fragmentShader={mirrorFragmentShader}
              />
            </mesh>
          </group>
          <group position={[-11.472, -16.009, 0.027]}>
            <mesh geometry={nodes.Circle006.geometry}>
              <CustomMaterial
                baseMaterial={baseMaterial}
                uniforms={uniforms3}
                vertexShader={ferrisWheelVertexShader}
                fragmentShader={fragmentShader}
              />
            </mesh>

            <mesh geometry={nodes.Circle006_1.geometry}>
              <CustomMaterial
                baseMaterial={baseMaterial}
                uniforms={uniforms2}
                vertexShader={ferrisWheelVertexShader}
                fragmentShader={mirrorFragmentShader}
              />
            </mesh>
          </group>
          <group position={[-18.555, -6.254, 0.027]}>
            <mesh geometry={nodes.Circle007.geometry}>
              <CustomMaterial
                baseMaterial={baseMaterial}
                uniforms={uniforms3}
                vertexShader={ferrisWheelVertexShader}
                fragmentShader={fragmentShader}
              />
            </mesh>

            <mesh geometry={nodes.Circle007_1.geometry}>
              <CustomMaterial
                baseMaterial={baseMaterial}
                uniforms={uniforms2}
                vertexShader={ferrisWheelVertexShader}
                fragmentShader={mirrorFragmentShader}
              />
            </mesh>
          </group>
          <group position={[-18.546, 5.804, 0.027]}>
            <mesh geometry={nodes.Circle008.geometry}>
              <CustomMaterial
                baseMaterial={baseMaterial}
                uniforms={uniforms3}
                vertexShader={ferrisWheelVertexShader}
                fragmentShader={fragmentShader}
              />
            </mesh>

            <mesh geometry={nodes.Circle008_1.geometry}>
              <CustomMaterial
                baseMaterial={baseMaterial}
                uniforms={uniforms2}
                vertexShader={ferrisWheelVertexShader}
                fragmentShader={mirrorFragmentShader}
              />
            </mesh>
          </group>
        </group>
      </mesh>
    </group>
  );
};

export default FerrisWheel;
