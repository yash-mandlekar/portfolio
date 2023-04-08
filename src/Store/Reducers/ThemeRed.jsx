import { createReducer } from "@reduxjs/toolkit";

const theme = localStorage.getItem("theme") || "dark";

const initialState = {
  theme: theme,
};

export const themeReducer = createReducer(initialState, {
  changeThemeSuccess: (state, action) => {
    state.theme = action.payload;
    localStorage.setItem("theme", action.payload);
  },
});
