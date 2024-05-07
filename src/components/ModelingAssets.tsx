import { useGLTF, useTexture } from "@react-three/drei";

const ModelingAssets = () => {
  const viking = useGLTF("./models/viking.glb");
  const swing = useGLTF("./models/swing.glb");
  const ferrisWheel = useGLTF("./models/ferrisWheel.glb");
  const walkman = useGLTF("./models/walkman.glb");
  const vintageCar = useGLTF("./models/vintageCar.glb");

  const vikingTex = useTexture("./images/viking_color.webp");
  vikingTex.flipY = false;
  const swingTex = useTexture("./images/swing_color.webp");
  swingTex.flipY = false;
  const ferrisWheelTex = useTexture("./images/ferrisWheelColor.webp");
  ferrisWheelTex.flipY = false;

  const walkmanRedTex = useTexture({
    map: "./images/walkman/redBase.jpg",
    roughnessMap: "./images/walkman/redRough.jpg",
    metalnessMap: "./images/walkman/redMetal.jpg",
  });
  walkmanRedTex.map.flipY = false;
  walkmanRedTex.roughnessMap.flipY = false;
  walkmanRedTex.metalnessMap.flipY = false;

  const walkmanBlackTex = useTexture({
    map: "./images/walkman/blackBase.jpg",
    roughnessMap: "./images/walkman/blackRough.jpg",
    metalnessMap: "./images/walkman/blackMetal.jpg",
  });
  walkmanBlackTex.map.flipY = false;
  walkmanBlackTex.roughnessMap.flipY = false;
  walkmanBlackTex.metalnessMap.flipY = false;

  const vintageCarTex = useTexture({
    map: "./images/vintageCar/vintage_car_color.png",
    roughnessMap: "./images/vintageCar/vintage_car_rough.png",
    metalnessMap: "./images/vintageCar/vintage_car_metal.png",
  });
  vintageCarTex.map.flipY = false;
  vintageCarTex.roughnessMap.flipY = false;
  vintageCarTex.metalnessMap.flipY = false;

  return {
    viking: { nodes: viking.nodes, tex: vikingTex },
    swing: { nodes: swing.nodes, tex: swingTex },
    ferrisWheel: { nodes: ferrisWheel.nodes, tex: ferrisWheelTex },
    walkman: {
      nodes: walkman.nodes,
      tex: {
        black: walkmanBlackTex,
        red: walkmanRedTex,
      },
    },
    vintageCar: { nodes: vintageCar.nodes, tex: vintageCarTex },
  };
};

export default ModelingAssets;
