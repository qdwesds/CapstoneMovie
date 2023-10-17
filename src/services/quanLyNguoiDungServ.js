import https from "./config";
const maNhom = "GP01";

export const quanLyNguoiDungServ = {
  dangNhap: async (values) => {
    return await https.post(`/api/QuanLyNguoiDung/DangNhap`, values);
  },
  dangKi: async (values) => {
    return await https.post(`/api/QuanLyNguoiDung/DangKy`, values);
  },
  thongTinTaiKhoan: async () => {
    return await https.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  },
  layDanhSachNguoiDung: async () => {
    return await https.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung`);
  },
  xoaNguoiDung: async (TaiKhoan) => {
    return await https.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${TaiKhoan}`
    );
  },
  layThongTinNguoiDung: async (taiKhoan) => {
    return await https.post(
      `/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`
    );
  },
  capNhatThongTinNguoiDung: async (nguoiDung) => {
    return await https.post(
      `/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      nguoiDung
    );
  },
  timKiemNguoiDung: async (tuKhoa) => {
    return await https.get(
      `/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${maNhom}&tuKhoa=${tuKhoa}`
    );
  },
  layDanhSachLoaiNguoiDung: async () => {
    return await https.get("/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung");
  },
  themNguoiDung: async (values) => {
    return await https.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, values);
  },
};
