import React from "react";
import ThemNguoiDung from "../../Components/ThemNguoiDung/ThemNguoiDung";

const ThemNguoiDungAdmin = () => {
  return (
    <div className="bg-white p-10 space-y-5">
      <h1 className="text-red-500 font-bold text-2xl">Thêm người dùng</h1>
      <ThemNguoiDung />
    </div>
  );
};

export default ThemNguoiDungAdmin;
