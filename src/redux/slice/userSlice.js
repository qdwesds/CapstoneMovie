import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDungServ";
const dataUserLocal = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: dataUserLocal,
  thongTinTaiKhoan: {},
  danhSachNguoiDung: [],
  thongTinNguoiDung: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDataSlice: (state, action) => {
      //   console.log(action);
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thongTinTaiKhoanApi.fulfilled, (state, action) => {
      console.log(action);
      state.thongTinTaiKhoan = action.payload;
    });
    builder.addCase(layDanhSachNguoiDungApi.fulfilled, (state, action) => {
      // console.log(action);
      state.danhSachNguoiDung = action.payload;
    });
    builder.addCase(thongTinNguoiDungApi.fulfilled, (state, action) => {
      console.log(action);
      state.thongTinNguoiDung = action.payload;
    });
  },
});

export const { setDataSlice } = userSlice.actions;

export default userSlice.reducer;

//thunk
export const thongTinTaiKhoanApi = createAsyncThunk(
  "user/thongTinTaiKhoanApi",
  async () => {
    const res = await quanLyNguoiDungServ.thongTinTaiKhoan();
    return res.data.content;
  }
);
export const layDanhSachNguoiDungApi = createAsyncThunk(
  "user/layDanhSachNguoiDungApi",
  async () => {
    const res = await quanLyNguoiDungServ.layDanhSachNguoiDung();
    return res.data.content;
  }
);
export const thongTinNguoiDungApi = createAsyncThunk(
  "user/thongTinNguoiDungApi",
  async (taiKhoan) => {
    const res = await quanLyNguoiDungServ.layThongTinNguoiDung(taiKhoan);
    return res.data.content;
  }
);
