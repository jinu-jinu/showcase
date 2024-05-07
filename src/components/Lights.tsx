const Lights = () => {
  return (
    <group>
      <ambientLight />
      <directionalLight intensity={10} position={[-2.8, 2.8, 1.2]} />
      <pointLight
        color={"#0081fa"}
        intensity={10}
        decay={0.2}
        distance={2}
        position={[-0.5, 0.5, 1]}
      />
    </group>
  );
};

export default Lights;
