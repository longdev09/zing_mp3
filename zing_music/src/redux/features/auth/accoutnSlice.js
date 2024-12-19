import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    user: null,
    isLogin: false,
  },
  reducers: {
    // Sửa thành reducers (số nhiều)
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setUser, setLogin } = accountSlice.actions;

export default accountSlice.reducer;
