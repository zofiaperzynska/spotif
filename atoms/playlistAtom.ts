import { atom } from "recoil";

export const playlistState = atom<SpotifyApi.SinglePlaylistResponse | null>({
  key: "playlistState",
  default: null,
});

export const playlistIdState = atom({
  key: "playlistIdState",
  default: "37i9dQZF1DX1whYo9Mg2Mt",
});
