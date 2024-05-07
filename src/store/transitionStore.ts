import { create } from "zustand";
import { TransitionStoreType } from "../types";

const transitionStore = create<TransitionStoreType>((set) => ({
  isTransitionOut: false,
  actions: {
    handleTransitionOut: (v) => set(() => ({ isTransitionOut: v })),
  },
}));

const useIsTransitionOut = () => transitionStore((state) => state.isTransitionOut);
const useTransitionActions = (name: keyof TransitionStoreType["actions"]) =>
  transitionStore((state) => state.actions[name]);

export { useIsTransitionOut, useTransitionActions };
