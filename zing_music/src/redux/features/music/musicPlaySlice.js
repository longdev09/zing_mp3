import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../../utils/http";
import { set_PreviewTime, setCurrentTime } from "./currentTimeSlice";

// lay audio bai hat
export const fetchApiGetSong = createAsyncThunk(
  "musicPlay/fetchApiGetSong",
  async (idSong, { dispatch }) => {
    let obj = { url: "", infoSong: "" };
    dispatch(set_PreviewTime(0)); // thoi gian tua lai 0
    const response = await http.get(`song/${idSong}`);
    const infoSong = await http.get(`songInfo/${idSong}`);
    if (response.data.msg == "Success") {
      dispatch(setCurrentTime(0));
      obj = {
        ...obj,
        url: response.data.data["128"],
        infoSong: infoSong.data.data,
      };
    } else {
      const response = await http.get(`songPremium/${idSong}`); // lấy bài hát priemium
      dispatch(setCurrentTime(0));
      obj = {
        ...obj,
        url: response.data.data["128"],
        infoSong: infoSong.data.data,
      };
    }
    return obj;
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
    volume_: 50,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiGetSong.fulfilled, (state, action) => {
      state.isPlay = true;
      state.song = {
        idSong: action.meta.arg,
        url: action.payload.url,
        infoSong: action.payload.infoSong,
      };
    });
  },

  reducers: {
    setLoadingSong: (state, action) => {
      state.loadingSong = action.payload;
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
    pause: (state) => {
      state.isPlay = false;
    },
    play: (state) => {
      state.isPlay = true;
    },
    setVolume: (state, action) => {
      state.volume_ = action.payload;
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
  setVolume,
} = musicPlaySlice.actions;

export default musicPlaySlice.reducer;
