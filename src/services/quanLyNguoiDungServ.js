import https from "./config";
const maNhom = "GP01";

export const quanLyNguoiDungServ = {
  dangNhap: (data) => {
    return https.post(`/api/QuanLyNguoiDung/DangNhap`, data);
  },
  dangKy: (data) => {
    return https.post(`/api/QuanLyNguoiDung/DangKy`, data);
  },
  thongTinTaiKhoan: () => {
    return https.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  },
  layDanhSachNguoiDung: () => {
    return https.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung`);
  },
  deleteUsers: (taiKhoan) => {
    return https.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
  layThongTinNguoiDung: (taiKhoan) => {
    return https.post(
      `/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`
    );
  },
  capNhatThongTinNguoiDung: (data) => {
    return https.post(
      `/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      data
    );
  },
  searchUsers: (tuKhoa) => {
    return https.get(
      `/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${maNhom}&tuKhoa=${tuKhoa}`
    );
  },
  layDanhSachLoaiNguoiDung: () => {
    return https.get("/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung");
  },
  addUsers: (data) => {
    return https.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, data);
  },
};
