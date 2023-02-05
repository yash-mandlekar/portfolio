import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
};

export const themeReducer = createReducer(initialState, {
  changeThemeSuccess: (state, action) => {
    state.theme = action.payload;
  },
});
