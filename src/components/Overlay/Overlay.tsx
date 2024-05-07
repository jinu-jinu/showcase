import { AnimatePresence } from "framer-motion";
import FollowCursor from "./FollowCursor";
import Frame from "./Frame";
import Icons from "./Icons";
import Loading from "./Loading";
import SideButton from "./SideButton";
import Texts from "./Texts";
import { useIsAssetDownloaded } from "../../store/loadingStore";

const Overlay = () => {
  const isAssetDownloaded = useIsAssetDownloaded();
  return (
    <>
      <Frame />
      <Texts />
      <Icons />
      <SideButton />
      <FollowCursor />

      <AnimatePresence>{!isAssetDownloaded && <Loading />}</AnimatePresence>
    </>
  );
};

export default Overlay;
