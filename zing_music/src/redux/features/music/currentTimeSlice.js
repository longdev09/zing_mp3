import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const currentTimeSlice = createSlice({
  name: "currentTime",
  initialState: {
    currentTime: 0,
    songTime: 0,
    volume: 50,
    currentTimeLyric: 0,
  },
  reducers: {
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    setSongTime: (state, action) => {
      state.songTime = action.payload;
    },
    setVolume: (state, action) => {
      state.volume = action.payload.toFixed(1);
    },
    setCurrentTimeLyric: (state, action) => {
      state.currentTimeLyric = action.payload;
    },
  },
});
export const { setCurrentTime, setSongTime, setVolume, setCurrentTimeLyric } =
  currentTimeSlice.actions;
export default currentTimeSlice.reducer;
