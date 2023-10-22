import React from "react";
import TaoLichChieu from "../../Components/TaoLichChieu/TaoLichChieu";

const TaoLichChieuAdmin = () => {
  return (
    <div className="bg-white p-10 space-y-5">
      <h2 className="font-bold text-3xl">Tạo lịch chiếu</h2>
      <TaoLichChieu />
    </div>
  );
};

export default TaoLichChieuAdmin;
