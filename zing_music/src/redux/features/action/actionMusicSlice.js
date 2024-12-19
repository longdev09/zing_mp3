import { createSlice } from "@reduxjs/toolkit";

export const actionMusicSlice = createSlice({
  name: "actionMusic",
  initialState: {
    openNowPlay: false,
    openPlayingBar: true,
  },

  reducers: {
    setOpenNowPlay: (state) => {
      state.openNowPlay = !state.openNowPlay;
    },
    setOpenPlayingBar: (state) => {
      state.openPlayingBar = !state.openPlayingBar;
    },
  },
});

export const { setOpenNowPlay, setOpenPlayingBar } = actionMusicSlice.actions;

export default actionMusicSlice.reducer;
