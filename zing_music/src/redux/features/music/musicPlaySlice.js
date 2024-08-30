import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../../utils/http";
import { setCurrentTime } from "./currentTimeSlice";

// lay danh sach theo ma play list
export const fetchApiPlayList = createAsyncThunk(
  "musicPlay/fetchApiPlayList",
  async ({ idList, idSong }, { dispatch, getState }) => {
    const response = await http.get(`playlist/${idList}`);
    const res = response.data.data?.song?.items;
    if (idSong == null && !getState().musicPlay.randomSong) {
      // Lấy bài hát đầu tiên từ playlist
      const firstSongId = res?.[0]?.encodeId;
      if (firstSongId) {
        dispatch(fetchApiGetSong(firstSongId));
      }
    } else {
      // random bai hat
      const randDom = Math.floor(Math.random() * res.length);
      dispatch(fetchApiGetSong(res?.[randDom].encodeId));
    }

    dispatch(setCurrentTime(0));
    return response.data.data;
  }
);

export const fetchApiGetSong = createAsyncThunk(
  "musicPlay/fetchApiGetSong",
  async (idSong, { dispatch }) => {
    const response = await http.get(`song/${idSong}`);
    dispatch(setCurrentTime(0));
    return response.data.data;
  }
);

export const nextSong = createAsyncThunk(
  "musicPlay/nextSong",
  async (listSong, { getState, dispatch }) => {
    const idSong = getState().musicPlay.song.idSong; // lay ra id bai hat hien tai
    const indexSong = listSong.findIndex((i) => i.encodeId == idSong);
    dispatch(fetchApiGetSong(listSong[indexSong + 1].encodeId));
  }
);

export const prevSong = createAsyncThunk(
  "musicPlay/prevSong",
  async (listSong, { getState, dispatch }) => {
    const idSong = getState().musicPlay.song.idSong; // lay ra id bai hat hien tai
    const indexSong = listSong.findIndex((i) => i.encodeId == idSong);
    dispatch(fetchApiGetSong(listSong[indexSong - 1].encodeId));
  }
);

export const musicPlaySlice = createSlice({
  name: "musicPlay",
  initialState: {
    playList: null, // luu lai playlist dang phat
    isPlay: false,
    song: null,
    listRelease: null,
    randomSong: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiPlayList.pending, (state) => {});

    // lay play list theo id play list
    builder.addCase(fetchApiPlayList.fulfilled, (state, action) => {
      state.playList = action.payload.song.items;
      state.isPlay = true;
    });

    // call api song
    builder.addCase(fetchApiGetSong.pending, (state, action) => {
      state.song = {
        idSong: action.meta.arg,
        loadingSong: true,
      };
    });
    builder.addCase(fetchApiGetSong.fulfilled, (state, action) => {
      state.isPlay = true;
      let list = null;
      if (state.listRelease) {
        list = JSON.parse(JSON.stringify(state.listRelease));
      }
      if (state.playList) {
        list = JSON.parse(JSON.stringify(state.playList));
      }
      const song = list.find((i) => i.encodeId == action.meta.arg);

      state.song = {
        ...state.song,
        url: action.payload,
        loadingSong: false,
        infoSong: song,
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

    // lay danh sach bai hat moi phat hanh
    setListRelease: (state, action) => {
      state.isPlay = true;
      state.playList = action.payload;
    },

    setRandomSong: (state, action) => {
      state.randomSong = action.payload;
    },
  },
});

export const { play, pause, setListRelease, setRandomSong } =
  musicPlaySlice.actions;
export default musicPlaySlice.reducer;
