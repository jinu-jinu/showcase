import { create } from "zustand";
import { ProjectStoreType, ProjectType } from "../types";

const projects: ProjectType[] = [
  {
    name: "VIKING",
    project_code: 92001,
    technologies: "BLENDER · ANIMATION",
    year: 2023,
  },
  {
    name: "GYRO SWING",
    project_code: 92002,
    technologies: "BLENDER · ANIMATION",
    year: 2023,
  },
  {
    name: "FERRIS WHEEL",
    project_code: 92003,
    technologies: "BLENDER · ANIMATION",
    year: 2023,
  },
  {
    name: "WALKMAN",
    project_code: 92004,
    technologies: "BLENDER · PRODUCT MODELING",
    year: 2023,
  },
  {
    name: "VINTAGE CAR",
    project_code: 92005,
    technologies: "BLENDER · PRODUCT MODELING",
    year: 2023,
  },
];

const projectStore = create<ProjectStoreType>((set) => ({
  projectIdx: 0,
  project: projects[0],
  actions: {
    handlePrevProject: () =>
      set((d) => {
        const idx = d.projectIdx;
        if (idx <= 0) {
          const lastIdx = projects.length - 1;
          return { projectIdx: lastIdx, project: projects[lastIdx] };
        }
        const prevIdx = idx - 1;
        return { projectIdx: prevIdx, project: projects[prevIdx] };
      }),
    handleNextProject: () =>
      set((d) => {
        const idx = d.projectIdx;
        const len = projects.length - 1;
        if (idx >= len) {
          return { projectIdx: 0, project: projects[0] };
        }
        const nextIdx = idx + 1;
        return { projectIdx: nextIdx, project: projects[nextIdx] };
      }),
  },
}));

const useProjectIdx = () => projectStore((state) => state.projectIdx);
const useProject = () => projectStore((state) => state.project);
const useProjectActions = (name: keyof ProjectStoreType["actions"]) =>
  projectStore((state) => state.actions[name]);

export { useProjectIdx, useProject, useProjectActions };
