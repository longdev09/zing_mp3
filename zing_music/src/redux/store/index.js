import { configureStore } from "@reduxjs/toolkit";
import musicPlaySlice from "../features/music/musicPlaySlice";
import currentTimeSlice from "../features/music/currentTimeSlice";
import actionMusicSlice from "../features/action/actionMusicSlice";
export const store = configureStore({
  reducer: {
    musicPlay: musicPlaySlice,
    currentTime: currentTimeSlice,
    actionMusic: actionMusicSlice,
  },
});
