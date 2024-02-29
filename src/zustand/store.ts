import { create } from "zustand";

interface VideoState {
  videoUrl: string | null;
  setVideoUrl: (param: string) => void;
}

interface ProcessState {
  processing: boolean;
  setProcessing: (param: boolean) => void;
}

export const useVideoStore = create<VideoState>((set: any) => ({
  videoUrl: null,
  setVideoUrl: (url: string) => set({ videoUrl: url }),
}));

export const useProcessStore = create<ProcessState>((set: any) => ({
  processing: false,
  setProcessing: (tf: boolean) => set({ processing: tf }),
}));
