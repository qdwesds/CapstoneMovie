import https from "./config";
const maNhom = "GP01";

export const quanLyRapServ = {
  layThongTinHeThongRap: async () => {
    return await https.get("/api/QuanLyRap/LayThongTinHeThongRap");
  },
  layThongTinLichChieuHeThongRap: async (maHeThongRap) => {
    return await https.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${maNhom}`
    );
  },
  layThongTinLichChieuPhim: async (maPhim) => {
    return await https.get(
      `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
    );
  },
  layThongTinCumRapTheoHeThong: async (maHeThongRap) => {
    return await https.get(
      `/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
    );
  },
};
