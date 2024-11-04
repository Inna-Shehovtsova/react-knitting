import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Sock, TKnitRow, TSockSave, TSockSaveNamed } from "../functions/sock";
import { getModelList, updateModel } from "../functions/modelAPI";
// First, create the thunk
export const fetchSockModels = createAsyncThunk(
  "savedModels/getModel",
  async (username: string, thunkAPI) => {
    console.log("username", username);
    const response = await getModelList(username);
    console.log("res", response);
    return response;
  },
);
export const updateSockModel = createAsyncThunk(
  "savedModels/updateModel",
  async (model: TSockSaveNamed, thunkAPI) => {
    console.log(model);
    await updateModel(model);
  },
);

export const modelSlice = createSlice({
  name: "savedModels",
  initialState: {
    models: new Array<TSockSave>(),
    isLoading: false,
    error: "",
    selected: undefined,
  },
  reducers: {
    chekModel: (state, action) => {
      if (action.payload >= 0 && action.payload < state.models.length)
        state.selected = action.payload;
    },
    unChekModel: (state, action) => {
      state.selected = undefined;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchSockModels.fulfilled, (state, action) => {
      // Add user to the state array
      state.models = action.payload;
      console.log("action.payload", action.payload);
      state.isLoading = false;
    });
    builder.addCase(fetchSockModels.pending, (state, action) => {
      // Add user to the state array
      state.isLoading = true;
    });
    builder.addCase(fetchSockModels.rejected, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.error = "Error in loading data";
    });
    builder.addCase(updateSockModel.fulfilled, (state, action) => {
      // Add user to the state array

      state.isLoading = false;
    });
    builder.addCase(updateSockModel.pending, (state, action) => {
      // Add user to the state array
      state.isLoading = true;
    });
    builder.addCase(updateSockModel.rejected, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.error = "Error in updating data";
    });
  },
});
export const { chekModel, unChekModel } = modelSlice.actions;
export default modelSlice.reducer;
