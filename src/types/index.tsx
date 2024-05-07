export type LoadingStoreType = {
  isAssetDownloaded: boolean;
  actions: {
    handleAssetDownload: (v: boolean) => void;
  };
};

export type ProjectType = {
  project_code: number;
  name: string;
  technologies: string;
  year: number;
};

export type ProjectStoreType = {
  projectIdx: number;
  project: ProjectType;
  actions: {
    handlePrevProject: () => void;
    handleNextProject: () => void;
  };
};

export type TransitionStoreType = {
  isTransitionOut: boolean;
  actions: {
    handleTransitionOut: (v: boolean) => void;
  };
};

export type DirectionStoreType = {
  direction: "L" | "R";
  actions: {
    handleDirection: (v: "L" | "R") => void;
  };
};
