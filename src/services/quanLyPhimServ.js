import https from "./config";
const maNhom = "GP01";

export const quanLyPhimServ = {
  getAllBanner: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachBanner");
  },
  getAllMovie: () => {
    return https.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`);
  },
  themPhimUploadHinh: (data) => {
    return https.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, data);
  },
  getMovieInfo: (maPhim) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  },
  updateMovie: (data) => {
    return https.post(`/api/QuanLyPhim/CapNhatPhimUpload`, data);
  },
  xoaPhim: (maPhim) => {
    return https.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  },
};
