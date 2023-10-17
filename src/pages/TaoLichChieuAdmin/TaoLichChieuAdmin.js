import React from "react";
import { useParams } from "react-router-dom";
import TaoLichChieu from "../../Components/TaoLichChieu/TaoLichChieu";

const TaoLichChieuAdmin = () => {
  return (
    <div className="bg-white p-10 space-y-5">
      <h2 className="font-medium text-3xl text-red-500">Tạo lịch chiếu</h2>
      <TaoLichChieu />
    </div>
  );
};

export default TaoLichChieuAdmin;
