import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./Reducers/ThemeRed";
const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
