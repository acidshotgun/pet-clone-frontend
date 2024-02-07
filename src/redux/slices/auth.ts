import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/axiosConfig";

const initialState = {
  data: null,
  status: "idle",
};

export const fetchRegister: any = createAsyncThunk(
  "auth/fetchRegister",
  async (params) => {
    const response = await axios.post("/auth/register", params);
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRegister.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.status = "idle";
      state.data = action.payload;
    });
    builder.addCase(fetchRegister.rejected, (state) => {
      state.status = "error";
      state.data = null;
    });
  },
});

const { actions, reducer } = authSlice;

// export const selectIsAuth = (state: any) => Boolean(state.auth.data);
export const selectUserId = (state: any) => state.auth.data?._id;

export const authReducer = reducer;