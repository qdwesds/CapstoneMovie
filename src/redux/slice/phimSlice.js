import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyPhimServ } from "../../services/quanLyPhimServ";
import { quanLyRapServ } from "../../services/quanLyRapServ";

const initialState = {
  arrPhim: [],
  detailPhim: [],
  thongTinPhim: {},
};

const phimSlice = createSlice({
  name: "phim",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllMovieApi.fulfilled, (state, action) => {
      //   console.log(action);
      state.arrPhim = action.payload;
    });
    builder.addCase(layThongTinLichChieuPhimApi.fulfilled, (state, action) => {
      // console.log(action);
      state.detailPhim = action.payload;
    });
    builder.addCase(getMovieInfoApi.fulfilled, (state, action) => {
      // console.log(action);
      // console.log(state);
      state.thongTinPhim = action.payload;
    });
  },
});

export const {} = phimSlice.actions;

export default phimSlice.reducer;

// thunk
export const getAllMovieApi = createAsyncThunk(
  "phim/getAllMovie",
  async () => {
    const res = await quanLyPhimServ.getAllMovie();
    // console.log(res);
    return res.data.content;
  }
);
export const layThongTinLichChieuPhimApi = createAsyncThunk(
  "phim/layThongTinLichChieuPhimApi",
  async (maPhim) => {
    const result = await quanLyRapServ.layThongTinLichChieuPhim(maPhim);
    // console.log(res);
    return result.data.content;
  }
);
export const getMovieInfoApi = createAsyncThunk(
  "phim/getMovieInfo",
  async (maPhim) => {
    const result = await quanLyPhimServ.getMovieInfo(maPhim);
    return result.data.content;
  }
);
