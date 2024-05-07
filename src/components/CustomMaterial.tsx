import { useEffect } from "react";
import CSM from "three-custom-shader-material";
import { Material } from "three";
import { useIsAssetDownloaded } from "../store/loadingStore";
import { animate } from "framer-motion";
import { useIsTransitionOut, useTransitionActions } from "../store/transitionStore";

const CustomMaterial = ({
  baseMaterial,
  vertexShader,
  fragmentShader,
  uniforms,
}: {
  baseMaterial: Material;
  vertexShader: string;
  fragmentShader: string;
  uniforms: {
    uValue: {
      value: number;
    };
  };
}) => {
  const isAssetDownloaded = useIsAssetDownloaded();
  const isTransitionOut = useIsTransitionOut();
  const handleTransitionOut = useTransitionActions("handleTransitionOut");

  useEffect(() => {
    if (!isAssetDownloaded) return;

    if (!isTransitionOut)
      animate(1, 0, {
        type: "tween",
        duration: 1,
        ease: "easeIn",
        onUpdate: (n) => {
          uniforms.uValue.value = n;
        },
      });

    if (isTransitionOut)
      animate(0, 1, {
        type: "tween",
        duration: 1,
        ease: "easeOut",
        onUpdate: (n) => {
          uniforms.uValue.value = n;
        },
        onComplete: () => {
          handleTransitionOut(false);
        },
      });
  }, [isAssetDownloaded, isTransitionOut]);

  return (
    <CSM
      baseMaterial={baseMaterial}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms}
    />
  );
};

export default CustomMaterial;
