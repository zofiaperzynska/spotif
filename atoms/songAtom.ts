import { atom } from "recoil";

export const currentTrackIdState = atom<string | undefined>({
  key: "currentTrackIdState",
  default: "",
});

export const isPlayingState = atom({
  key: "isPlayingstate",
  default: false,
});
