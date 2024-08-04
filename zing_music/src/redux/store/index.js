import { configureStore } from "@reduxjs/toolkit";
import { musicPlaySlice } from "../features/music/musicPlaySlice";
export const store = configureStore({
  reducer: { musicPlaySlice: musicPlaySlice },
});
