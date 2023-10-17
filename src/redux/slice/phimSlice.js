import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyPhimServ } from "../../services/quanLyPhimServ";
import { quanLyRapServ } from "../../services/quanLyRapServ";

const initialState = {
  arrPhim: [],
  detailPhim: [],
  thongTinPhim: {},
};

const phimSlice = createSlice({
  name: "phimSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(layDanhSachPhimApi.fulfilled, (state, action) => {
      //   console.log(action);
      state.arrPhim = action.payload;
    });
    builder.addCase(layThongTinLichChieuPhimApi.fulfilled, (state, action) => {
      // console.log(action);
      state.detailPhim = action.payload;
    });
    builder.addCase(layThongTinPhimApi.fulfilled, (state, action) => {
      // console.log(action);
      // console.log(state);
      state.thongTinPhim = action.payload;
    });
  },
});

export const {} = phimSlice.actions;

export default phimSlice.reducer;

//todo :action thunk
export const layDanhSachPhimApi = createAsyncThunk(
  "phimSlice/layDanhSachPhimApi",
  async (tenPhim = "") => {
    const result = await quanLyPhimServ.layDanhSachPhim(tenPhim);
    // console.log(result);
    return result.data.content;
  }
);
export const layThongTinLichChieuPhimApi = createAsyncThunk(
  "phimSlice/layThongTinLichChieuPhimApi",
  async (maPhim) => {
    const result = await quanLyRapServ.layThongTinLichChieuPhim(maPhim);
    // console.log(result);
    return result.data.content;
  }
);
export const layThongTinPhimApi = createAsyncThunk(
  "phimSlice/layThongTinPhimApi",
  async (maPhim) => {
    const result = await quanLyPhimServ.layThongTinPhim(maPhim);
    return result.data.content;
  }
);
