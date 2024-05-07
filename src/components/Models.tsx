import { useProject } from "../store/projectStore";
import Viking from "./Viking";
import Swing from "./Swing";
import ModelingAssets from "./ModelingAssets";
import FerrisWheel from "./FerrisWheel";
import Walkman from "./Walkman";
import VintageCar from "./VintageCar";

const Models = () => {
  const project = useProject();
  const { viking, swing, ferrisWheel, walkman, vintageCar } = ModelingAssets();

  return (
    <>
      {project.name === "VIKING" && <Viking nodes={viking.nodes} tex={viking.tex} />}
      {project.name === "GYRO SWING" && <Swing nodes={swing.nodes} tex={swing.tex} />}
      {project.name === "FERRIS WHEEL" && (
        <FerrisWheel nodes={ferrisWheel.nodes} tex={ferrisWheel.tex} />
      )}
      {project.name === "WALKMAN" && (
        <Walkman nodes={walkman.nodes} redTex={walkman.tex.red} blackTex={walkman.tex.black} />
      )}
      {project.name === "VINTAGE CAR" && (
        <VintageCar nodes={vintageCar.nodes} tex={vintageCar.tex} />
      )}
    </>
  );
};

export default Models;
