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
  name: "userSlice",
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
  "userSlice/thongTinTaiKhoanApi",
  async () => {
    const result = await quanLyNguoiDungServ.thongTinTaiKhoan();
    return result.data.content;
  }
);
export const layDanhSachNguoiDungApi = createAsyncThunk(
  "userSlice/layDanhSachNguoiDungApi",
  async () => {
    const result = await quanLyNguoiDungServ.layDanhSachNguoiDung();
    return result.data.content;
  }
);
export const thongTinNguoiDungApi = createAsyncThunk(
  "userSlice/thongTinNguoiDungApi",
  async (taiKhoan) => {
    const result = await quanLyNguoiDungServ.layThongTinNguoiDung(taiKhoan);
    return result.data.content;
  }
);
