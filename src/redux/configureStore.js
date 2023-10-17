import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./slice/loadingSlice";
import phimSlice from "./slice/phimSlice";
import quanLyDatVeSlice from "./slice/quanLyDatVeSlice";
import userSlice from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    phimSlice,
    loadingSlice,
    userSlice,
    quanLyDatVeSlice,
  },
});
