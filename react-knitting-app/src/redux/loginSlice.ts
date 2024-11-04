import { createSlice } from "@reduxjs/toolkit";
export const loginSlice = createSlice({
  name: "login",
  initialState: {
    name: "",
    isAuthorized: false,
  },
  reducers: {
    signIn: (state) => {
      state.isAuthorized = true;
    },
    signOut: (state) => {
      state.isAuthorized = false;
      state.name = "";
    },

    setLogin: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const { signIn, signOut, setLogin } = loginSlice.actions;
export default loginSlice.reducer;
