import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./slices/auth";

// Импорт reducers

// store (хранилище)
//  1) reducers
//  2) middlewares + уже есть дефолтные
//  3) devTools - для утилиты
const store = configureStore({
  reducer: { auth: authReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

// Экспортируем для использования в провайдере
export default store;
