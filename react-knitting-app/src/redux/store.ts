import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import sockSlice from "./sockSlice";
import loginSlice from "./loginSlice";
import { modelSlice } from "./modelsSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    sockCounter: sockSlice,
    login: loginSlice,
    model: modelSlice.reducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
