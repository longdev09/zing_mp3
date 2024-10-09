import { createSlice } from "@reduxjs/toolkit";

export const actionMusicSlice = createSlice({
  name: "actionMusic",
  initialState: {
    openNowPlay: false,
  },

  reducers: {
    setOpenNowPlay: (state) => {
      state.openNowPlay = !state.openNowPlay;
    },
  },
});

export const { setOpenNowPlay } = actionMusicSlice.actions;

export default actionMusicSlice.reducer;
