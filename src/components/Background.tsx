import { Environment } from "@react-three/drei";
import { Color, Depth, LayerMaterial } from "lamina";
import { DoubleSide } from "three";

const Background = () => {
  return (
    <Environment background>
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <LayerMaterial side={DoubleSide}>
          <Color color={"#444"} alpha={1} mode="normal" />
          <Depth
            colorA="coral"
            colorB="cornflowerblue"
            alpha={0.5}
            mode="normal"
            near={0}
            far={300}
            origin={[100, 100, 100]}
          />
        </LayerMaterial>
      </mesh>
    </Environment>
  );
};

export default Background;
