import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../../utils/http";

export const fetchApiPlayList = createAsyncThunk(
  "musicPlay/fetchApiPlayList",
  async (encodeId, { dispatch }) => {
    const response = await http.get(`playlist/${encodeId}`);

    // Lấy bài hát đầu tiên từ playlist
    const firstSongId = response.data.data?.song?.items?.[0]?.encodeId;
    if (firstSongId) {
      dispatch(fetchApiGetSong(firstSongId));
    }
    return response.data.data;
  }
);

export const fetchApiGetSong = createAsyncThunk(
  "musicPlay/fetchApiGetSong",
  async (idSong) => {
    const response = await http.get(`song/${idSong}`);
    return response.data.data;
  }
);

export const musicPlaySlice = createSlice({
  name: "musicPlay",
  initialState: {
    playList: null,
    isPlay: false,
    song: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiPlayList.fulfilled, (state, action) => {
      state.playList = action.payload;
      state.isPlay = true;
    });

    // call api song
    builder.addCase(fetchApiGetSong.pending, (state, action) => {
      state.song = {
        idSong: action.meta.arg,
      };
    });
    builder.addCase(fetchApiGetSong.fulfilled, (state, action) => {
      state.song = {
        ...state.song,
        url: action.payload,
      };
    });
  },

  reducers: {
    pause: (state) => {
      state.isPlay = false;
    },
    play: (state) => {
      state.isPlay = true;
    },
  },
});
export const { play, pause } = musicPlaySlice.actions;
export default musicPlaySlice.reducer;
