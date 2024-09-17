"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface hamburgerState {
  value: boolean;
}

const initialState: hamburgerState = {
  value: false,
};

export const hamburgerMenuSlice = createSlice({
  name: "hamburgerMenu",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.value = true;
    },
    closeMenu: (state) => {
      state.value = false;
    },
  },
});

export const { openMenu, closeMenu } = hamburgerMenuSlice.actions;
export default hamburgerMenuSlice.reducer;
