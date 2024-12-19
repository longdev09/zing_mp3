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

// next bài hát
export const nextSong = createAsyncThunk(
  "musicPlay/nextSong",
  async (_, { getState, dispatch }) => {
    const idSong = getState().musicPlay.song.idSong; // lay ra id bai hat hien tai
    const indexSong = getState().musicPlay.playList.list.findIndex(
      (i) => i.encodeId == idSong,
    );
    if (indexSong === getState().musicPlay.playList.list.length - 1) {
      console.log("sss");
      dispatch(fetchApiGetSong(getState().musicPlay.playList.list[0].encodeId));
    } else {
      dispatch(
        fetchApiGetSong(
          getState().musicPlay.playList.list[indexSong + 1].encodeId,
        ),
      );
    }
  },
);

// prev bài hát
export const prevSong = createAsyncThunk(
  "musicPlay/nextSong",
  async (_, { getState, dispatch }) => {
    const idSong = getState().musicPlay.song.idSong; // lay ra id bai hat hien tai
    const indexSong = getState().musicPlay.playList.list.findIndex(
      (i) => i.encodeId == idSong,
    );
    if (indexSong === 0) {
      dispatch(
        fetchApiGetSong(getState().musicPlay.playList.list[indexSong].encodeId),
      );
    } else {
      dispatch(
        fetchApiGetSong(
          getState().musicPlay.playList.list[indexSong - 1].encodeId,
        ),
      );
    }
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
    updatePlayList: (state, action) => {
      state.playList = { ...state.playList, list: action.payload };
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
  updatePlayList,
} = musicPlaySlice.actions;

export default musicPlaySlice.reducer;
