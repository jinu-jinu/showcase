import { motion } from "framer-motion";
import { useIsTransitionOut, useTransitionActions } from "../../store/transitionStore";
import { useProjectActions } from "../../store/projectStore";
import { useEffect } from "react";
import { useIsAssetDownloaded } from "../../store/loadingStore";
import { useDirection, useDirectionActions } from "../../store/directionStore";

const SideButton = () => {
  const firstTrigger = useIsAssetDownloaded(); // only work once trigger
  const isTransitionOut = useIsTransitionOut();
  const handleTransitionOut = useTransitionActions("handleTransitionOut");
  const handlePrevProject = useProjectActions("handlePrevProject");
  const handleNextProject = useProjectActions("handleNextProject");
  const handleDirection = useDirectionActions("handleDirection");
  const direction = useDirection();

  useEffect(() => {
    if (firstTrigger && !isTransitionOut) {
      if (direction === "L") handlePrevProject();
      if (direction === "R") handleNextProject();
    }
  }, [isTransitionOut, direction]);

  const onClickPrev = () => {
    handleTransitionOut(true);
    handleDirection("L");
  };

  const onClickNext = () => {
    handleTransitionOut(true);
    handleDirection("R");
  };

  return (
    <>
      <motion.button
        disabled={isTransitionOut ? true : false}
        initial={{ opacity: 1 }}
        animate={isTransitionOut ? { opacity: 0 } : { opacity: 1 }}
        onClick={onClickPrev}
        whileTap={{ opacity: 0.3 }}
        className="fixed top-[50%] left-[4vmax] translate-y-[-50%] w-[3vmax] h-[3vmax]"
      >
        <motion.svg
          whileHover={{ scale: 1.5 }}
          viewBox="-0.5 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.4102 16.4199L10.3502 13.55C10.1944 13.4059 10.0702 13.2311 9.98526 13.0366C9.9003 12.8422 9.85645 12.6321 9.85645 12.4199C9.85645 12.2077 9.9003 11.9979 9.98526 11.8035C10.0702 11.609 10.1944 11.4342 10.3502 11.29L13.4102 8.41992"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.button>

      <motion.button
        disabled={isTransitionOut ? true : false}
        initial={{ opacity: 1 }}
        animate={isTransitionOut ? { opacity: 0 } : { opacity: 1 }}
        onClick={onClickNext}
        whileTap={{ opacity: 0.3 }}
        className="fixed top-[50%] right-[4vmax] translate-y-[-50%] w-[3vmax] h-[3vmax]"
      >
        <motion.svg
          whileHover={{ scale: 1.5 }}
          viewBox="-0.5 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5596 8.41992L13.6196 11.29C13.778 11.4326 13.9047 11.6068 13.9914 11.8015C14.0781 11.9962 14.123 12.2068 14.123 12.4199C14.123 12.633 14.0781 12.8439 13.9914 13.0386C13.9047 13.2332 13.778 13.4075 13.6196 13.55L10.5596 16.4199"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.button>
    </>
  );
};

export default SideButton;
