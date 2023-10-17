import https from "./config";
const maNhom = "GP01";
export const quanLyPhimServ = {
  layDanhSachBanner: async () => {
    return await https.get("/api/QuanLyPhim/LayDanhSachBanner");
  },
  layDanhSachPhim: async (tenPhim = "") => {
    if (tenPhim.trim() !== "") {
      return await https.get(
        `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}&tenPhim=${tenPhim}`
      );
    }
    return await https.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`);
  },
  themPhimUploadHinh: async (formData) => {
    return await https.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData);
  },
  layThongTinPhim: async (maPhim) => {
    return await https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  },
  CapNhatPhimUpload: async (formData) => {
    return await https.post(`/api/QuanLyPhim/CapNhatPhimUpload`, formData);
  },
  xoaPhim: async (maPhim) => {
    return await https.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  },
};
