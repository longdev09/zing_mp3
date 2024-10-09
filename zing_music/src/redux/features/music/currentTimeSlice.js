import { createSlice } from "@reduxjs/toolkit";

export const currentTimeSlice = createSlice({
  name: "currentTime",
  initialState: {
    duration: 0, // tong thời gian của bài hát
    currentTime: 0, // thời gian phát bài hát
    previewTime: 0, // thời gian tua bài hát
  },
  reducers: {
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },

    set_PreviewTime: (state, action) => {
      state.previewTime = action.payload;
    },
  },
});
export const { setDuration, setCurrentTime, set_PreviewTime } =
  currentTimeSlice.actions;
export default currentTimeSlice.reducer;
