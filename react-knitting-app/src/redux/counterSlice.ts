import { createSlice } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
    name: 'simpleCounter',
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            if (state.count > 0) {
                state.count -= 1;
            }
        },
        reset: (state)=>{
            state.count = 0;
        },
        setValue: (state, action)=>{
            state.count = action.payload;
        }
    },

});
export const { increment, decrement, reset,setValue } = counterSlice.actions;
export default counterSlice.reducer;
