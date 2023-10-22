import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyDatVeServ } from "../../services/quanLyDatVeServ";

const initialState = {
  danhSachGheDangDat: [],
};

const quanLyDatVeSlice = createSlice({
  name: "datVe",
  initialState,
  reducers: {
    gheDuocChon: (state, action) => {
      //   console.log(action);
      let danhSachGheCapNhat = [...state.danhSachGheDangDat];
      let index = danhSachGheCapNhat.findIndex(
        (item) => item.maGhe === action.payload.maGhe
      );
      if (index !== -1) {
        danhSachGheCapNhat.splice(index, 1);
      } else {
        danhSachGheCapNhat.push(action.payload);
      }
      state.danhSachGheDangDat = danhSachGheCapNhat;
    },
    chuyenTab: (state, action) => {
      state.tabActive = "2";
    },
    quayLaiTab: (state, action) => {
      // console.log(action);
      state.tabActive = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(datVeApi.fulfilled, (state, action) => {
      // console.log(action);
      state.danhSachGheDangDat = [];
    });
  },
});

export const { gheDuocChon, chuyenTab, quayLaiTab } = quanLyDatVeSlice.actions;

export default quanLyDatVeSlice.reducer;

// thunk
export const datVeApi = createAsyncThunk(
  "datVe/quanLyDatVeSlice",
  async (thongTinDatVe) => {
    const result = await quanLyDatVeServ.datVe(thongTinDatVe);
    return result.data.content;
  }
);
