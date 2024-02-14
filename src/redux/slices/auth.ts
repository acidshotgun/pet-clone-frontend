import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/axiosConfig";

const initialState = {
  data: null,
  status: "idle",
};

// Регистрация
export const fetchRegister: any = createAsyncThunk(
  "auth/fetchRegister",
  async (params) => {
    const response = await axios.post("/auth/register", params);
    return response.data;
  }
);

// Login
export const fetchLogin: any = createAsyncThunk(
  "auth/fetchLogin",
  async (params) => {
    const response = await axios.post("/auth/login", params);
    return response.data;
  }
);

// Auth
export const fetchAuth: any = createAsyncThunk("auth/fetchAuth", async () => {
  const response = await axios.get("/auth/me");
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    // Рег
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

    // Логин
    builder.addCase(fetchLogin.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.status = "idle";
      state.data = action.payload;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.status = "error";
      state.data = action.payload;
    });

    // Ауфс
    builder.addCase(fetchAuth.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.status = "idle";
      state.data = action.payload;
    });
    builder.addCase(fetchAuth.rejected, (state) => {
      state.status = "error";
      state.data = null;
    });
  },
});

const { actions, reducer } = authSlice;

export const selectIsAuth = (state: any) => state.auth.data;

export const authReducer = reducer;

// Выход из акка (очистить стейт user)
export const { logout } = actions;
