import { create } from "zustand";
import { LoadingStoreType } from "../types";

const loadingStore = create<LoadingStoreType>((set) => ({
  isAssetDownloaded: false,
  actions: {
    handleAssetDownload: (v) => set(() => ({ isAssetDownloaded: v })),
  },
}));

const useIsAssetDownloaded = () => loadingStore((state) => state.isAssetDownloaded);
const useLoadingActions = (name: keyof LoadingStoreType["actions"]) =>
  loadingStore((state) => state.actions[name]);

export { useIsAssetDownloaded, useLoadingActions };
