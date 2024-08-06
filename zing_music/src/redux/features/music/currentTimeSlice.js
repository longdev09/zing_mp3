import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const currentTimeSlice = createSlice({
  name: "currentTime",
  initialState: {
    currentTime: 0,
    songTime: 0,
  },
  reducers: {
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    setSongTime: (state, action) => {
      state.songTime = action.payload;
    },
  },
});
export const { setCurrentTime, setSongTime } = currentTimeSlice.actions;
export default currentTimeSlice.reducer;
