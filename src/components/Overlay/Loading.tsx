import { useProgress } from "@react-three/drei";
import { useEffect } from "react";
import { useLoadingActions } from "../../store/loadingStore";
import { motion } from "framer-motion";

const Loading = () => {
  const { loaded, total } = useProgress();
  const handleAssetDownload = useLoadingActions("handleAssetDownload");

  useEffect(() => {
    let key: number;
    if (loaded === total) {
      key = setTimeout(() => {
        handleAssetDownload(true);
      }, 2000);
    }

    return () => {
      clearTimeout(key);
    };
  }, [loaded, total]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-[100dvh] z-[100] bg-black text-[5vmax] font-black font-Prompt flex justify-center items-center"
    >
      LOADING
    </motion.div>
  );
};

export default Loading;
