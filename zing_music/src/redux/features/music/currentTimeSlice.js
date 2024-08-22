import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const currentTimeSlice = createSlice({
  name: "currentTime",
  initialState: {
    currentTime: 0,
    songTime: 0,
    volume: 0,
  },
  reducers: {
    setCurrentTime: (state, action) => {
      console.log(action);
      state.currentTime = action.payload;
    },
    setSongTime: (state, action) => {
      state.songTime = action.payload;
    },
    setVolume: (state, action) => {
      state.volume = action.payload.toFixed(1);
    },
  },
});
export const { setCurrentTime, setSongTime, setVolume } =
  currentTimeSlice.actions;
export default currentTimeSlice.reducer;
