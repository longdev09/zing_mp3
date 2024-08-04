import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../../utils/http";

export const fetchApiPlayList = createAsyncThunk(
  "music/fetchApiPlayList",
  async (encodeId) => {
    const response = await http.get(`playlist/${encodeId}`);
    console.log("redux thucnk", response);
    return response.data.data;
  }
);

export const musicPlaySlice = createSlice({
  name: "music",
  initialState: {
    listMusic: [],
    nowSong: {},
  },

  reducers: {
    play: (state, action) => {},
  },
});
