import https from "./config";

export const quanLyDatVeServ = {
  layDanhSachPhongVe: async (maLichChieu) => {
    return await https.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  },
  datVe: async (thongTinDatVe) => {
    return await https.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe);
  },
  taoLichChieu: async (thongTinLichChieu) => {
    return await https.post(`/api/QuanLyDatVe/TaoLichChieu`, thongTinLichChieu);
  },
};
