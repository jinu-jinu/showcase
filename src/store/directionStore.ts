import { create } from "zustand";
import { DirectionStoreType } from "../types";

const directionStore = create<DirectionStoreType>((set) => ({
  direction: "R",
  actions: {
    handleDirection: (v) => set(() => ({ direction: v })),
  },
}));

const useDirection = () => directionStore((state) => state.direction);
const useDirectionActions = (name: keyof DirectionStoreType["actions"]) =>
  directionStore((state) => state.actions[name]);

export { useDirection, useDirectionActions };
