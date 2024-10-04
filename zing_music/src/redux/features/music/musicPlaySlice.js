import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../../utils/http";
import { setCurrentTime } from "./currentTimeSlice";

// lay audio bai hat
export const fetchApiGetSong = createAsyncThunk(
  "musicPlay/fetchApiGetSong",
  async (idSong, { dispatch }) => {
    const response = await http.get(`song/${idSong}`);
    if (response.data.msg == "Success") {
      dispatch(setCurrentTime(0));
      return response.data.data["128"];
    } else {
      const response = await http.get(`songPremium/${idSong}`); // lấy bài hát priemium
      dispatch(setCurrentTime(0));
      return response.data.data.link;
    }
  },
);

// chuyen bai hat ke tiep
export const nextSong = createAsyncThunk(
  "musicPlay/nextSong",
  async (_, { getState, dispatch }) => {
    const idSong = getState().musicPlay.song.idSong; // lay ra id bai hat hien tai
    const indexSong = getState().musicPlay.playList.itemSong.findIndex(
      (i) => i.encodeId == idSong,
    );
    dispatch(
      fetchApiGetSong(
        getState().musicPlay.playList.itemSong[indexSong + 1].encodeId,
      ),
    );
  },
);

// lui bai hat
export const prevSong = createAsyncThunk(
  "musicPlay/prevSong",
  async (_, { getState, dispatch }) => {
    const idSong = getState().musicPlay.song.idSong; // lay ra id bai hat hien tai
    const indexSong = getState().musicPlay.playList.itemSong.findIndex(
      (i) => i.encodeId == idSong,
    );
    dispatch(
      fetchApiGetSong(
        getState().musicPlay.playList.itemSong[indexSong - 1].encodeId,
      ),
    );
  },
);

export const musicPlaySlice = createSlice({
  name: "musicPlay",
  initialState: {
    playList: null, // bien dung cho toan bo cac loai playList
    isPlay: false,
    song: null,
    randomSong: false,
    loadingSong: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiGetSong.fulfilled, (state, action) => {
      state.isPlay = true;
      state.song = {
        idSong: action.meta.arg,
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
    setLoadingSong: (state, action) => {
      state.loadingSong = action.payload;
    },
    // lấy danh sach bài hát mới
    setListRelease: (state, action) => {
      state.isPlay = true;
      state.playList = {
        ...state.playList,
        itemSong: action.payload,
        idPlayList: "newSong",
      };
    },
    setRandomSong: (state, action) => {
      state.playList = state.playList.sort(() => Math.random() - 0.5);
      state.randomSong = action.payload;
    },

    // lay danh bai hat de phat
    setPlayList: (state, action) => {
      state.isPlay = true;
      state.playList = {
        idList: action.payload[0],
        list: action.payload[1],
      };
    },
  },
});

export const {
  play,
  pause,
  setListRelease,
  setRandomSong,
  setLoadingSong,
  setPlayList,
} = musicPlaySlice.actions;
export default musicPlaySlice.reducer;
