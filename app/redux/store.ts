"use client";

import { configureStore } from "@reduxjs/toolkit";
import hamburgerMenuReducer from "./features/hamburgerMenu/hamburgerMenuSlice";

export const store = configureStore({
  reducer: {
    hamburgerMenu: hamburgerMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
