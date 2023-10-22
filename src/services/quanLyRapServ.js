import https from "./config";
const maNhom = "GP01";

export const quanLyRapServ = {
  layThongTinHeThongRap: () => {
    return https.get("/api/QuanLyRap/LayThongTinHeThongRap");
  },
  layThongTinLichChieuHeThongRap: (maHeThongRap) => {
    return https.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${maNhom}`
    );
  },
  layThongTinLichChieuPhim: (maPhim) => {
    return https.get(
      `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
    );
  },
  layThongTinCumRapTheoHeThong: (maHeThongRap) => {
    return https.get(
      `/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
    );
  },
};
