import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import sockSlice from "./sockSlice"

const store = configureStore({
    reducer: {
        counter: counterSlice,
        sockCounter: sockSlice,
       
    },
});

export default store;