import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TableUser from "../../Components/TableUser/TableUser";
import { layDanhSachNguoiDungApi } from "../../redux/slice/userSlice";
import { Input } from "antd";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDungServ";
const { Search } = Input;

const ManageUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachNguoiDungApi());
  }, []);
  return (
    <div className="bg-white p-10 space-y-5">
      <h2 className="font-bold text-3xl">Quản lý người dùng</h2>
      <Search
        placeholder="Nhập tìm kiếm"
        onSearch={(value) => {
          console.log(value);
          quanLyNguoiDungServ
            .searchUsers(value)
            .then((result) => {
              console.log(result);
              dispatch(layDanhSachNguoiDungApi());
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      />

      <TableUser />
    </div>
  );
};

export default ManageUser;
