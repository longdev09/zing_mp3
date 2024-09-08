import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../../utils/http";
import { setCurrentTime } from "./currentTimeSlice";

// lay danh sach theo ma play list
export const fetchApiPlayList = createAsyncThunk(
  "musicPlay/fetchApiPlayList",
  async ({ idList }, { dispatch }) => {
    const response = await http.get(`playlist/${idList}`);
    const res = response.data.data?.song?.items;
    dispatch(fetchApiGetSong(res?.[0]?.encodeId));
    dispatch(setCurrentTime(0));
    return response.data.data;
  }
);

export const fetchApiGetSong = createAsyncThunk(
  "musicPlay/fetchApiGetSong",
  async (idSong, { dispatch }) => {
    const response = await http.get(`song/${idSong}`);
    if (response.data.msg == "Success") {
      dispatch(setCurrentTime(0));

      return response.data.data["128"];
    } else {
      const response = await http.get(`songPremium/${idSong}`);
      dispatch(setCurrentTime(0));
      return response.data.data.link;
    }
  }
);

// chuyen bai hat ke tiep
export const nextSong = createAsyncThunk(
  "musicPlay/nextSong",
  async (_, { getState, dispatch }) => {
    const idSong = getState().musicPlay.song.idSong; // lay ra id bai hat hien tai
    const indexSong = getState().musicPlay.playList.itemSong.findIndex(
      (i) => i.encodeId == idSong
    );

    dispatch(
      fetchApiGetSong(
        getState().musicPlay.playList.itemSong[indexSong + 1].encodeId
      )
    );
  }
);

// lui bai hat
export const prevSong = createAsyncThunk(
  "musicPlay/prevSong",
  async (_, { getState, dispatch }) => {
    const idSong = getState().musicPlay.song.idSong; // lay ra id bai hat hien tai
    const indexSong = getState().musicPlay.playList.itemSong.findIndex(
      (i) => i.encodeId == idSong
    );
    dispatch(
      fetchApiGetSong(
        getState().musicPlay.playList.itemSong[indexSong - 1].encodeId
      )
    );
  }
);

export const musicPlaySlice = createSlice({
  name: "musicPlay",
  initialState: {
    playList: null, // luu lai playlist dang phat
    isPlay: false,
    song: null,

    randomSong: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiPlayList.pending, (state) => {});

    // lay play list theo id play list
    builder.addCase(fetchApiPlayList.fulfilled, (state, action) => {
      state.playList = {
        ...state.playList,
        itemSong: action.payload.song.items,
        idPlayList: action.payload.encodeId,
      };
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
      let list = JSON.parse(JSON.stringify(state.playList.itemSong));
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
  },
});

export const { play, pause, setListRelease, setRandomSong } =
  musicPlaySlice.actions;
export default musicPlaySlice.reducer;
