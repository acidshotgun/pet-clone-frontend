import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/axiosConfig";

/*
  TODO: ГОТОВО
    1) При помощи rejectWithValue(error.response.data) - добавляю полученную ошибку в стейт
    2) Теперь че с ней делать дальше? Как вывести ее на экран (идеал - нужные поля в регистрации)
    3) Тож самое и в регистрации/логгин
*/

const initialState = {
  isLogged: false,
  data: null,
  errors: null,
  status: "idle",
};

// Регистрация
export const fetchRegister: any = createAsyncThunk(
  "auth/fetchRegister",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/register", params);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Login
export const fetchLogin: any = createAsyncThunk(
  "auth/fetchLogin",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/login", params);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
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
      state.isLogged = false;
    },
  },
  extraReducers: (builder) => {
    // Рег
    builder.addCase(fetchRegister.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.isLogged = true;
      state.data = action.payload;
      state.status = "idle";
    });
    builder.addCase(fetchRegister.rejected, (state, action) => {
      state.status = "error";
      state.errors = action.payload;
    });

    // Логин
    builder.addCase(fetchLogin.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.isLogged = true;
      state.data = action.payload;
      state.status = "idle";
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.status = "error";
      state.errors = action.payload;
    });

    // Ауфс
    builder.addCase(fetchAuth.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.isLogged = true;
      state.data = action.payload;
      state.status = "idle";
    });
    builder.addCase(fetchAuth.rejected, (state) => {
      state.status = "error";
      state.data = null;
    });
  },
});

const { actions, reducer } = authSlice;

export const authReducer = reducer;

// Выход из акка (очистить стейт user)
export const { logout } = actions;
