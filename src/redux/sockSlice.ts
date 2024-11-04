import { createSlice } from "@reduxjs/toolkit";
import { Sock, TSockSave } from "../functions/sock";

export const sockSlice = createSlice({
  name: "sockCounter",
  initialState: {
    count: 0,
    row: 10,
    stich: 10,
    size: 37,
    name: "",
    model: new Sock(37, 10, 10),
    rowDesc: { row: "", desc: "" },
  },
  reducers: {
    setSize: (state, action) => {
      state.size = action.payload;
    },
    setRow: (state, action) => {
      state.row = action.payload;
    },
    setStich: (state, action) => {
      state.stich = action.payload;
    },
    setModel: (state) => {
      state.model = new Sock(state.size, state.stich, state.row, state.count);
    },
    getNextRow: (state) => {
      state.rowDesc = state.model.getCurrentRow();
      state.count = state.model.currentRow;
    },
    getPreviosRow: (state) => {
      state.rowDesc = state.model.getPreviosRow();
      state.count = state.model.currentRow;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAll: (state, action) => {
      let t: TSockSave = action.payload;
      state.count = t.progress;
      state.row = t.row;
      state.name = t.name;
      state.size = t.size;
      state.stich = t.stich;
    },
  },
});
export const {
  setSize,
  setRow,
  setStich,
  setModel,
  getNextRow,
  getPreviosRow,
  setName,
  setAll,
} = sockSlice.actions;
export default sockSlice.reducer;
