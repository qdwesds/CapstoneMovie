import React from "react";
import { Popconfirm, Space, Table, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDungServ";
import { useNavigate } from "react-router-dom";
import { layDanhSachNguoiDungApi } from "../../redux/slice/userSlice";

const onChange = (pagination, filters, sorter, extra) => {
  // console.log("params", pagination, filters, sorter, extra);
};

const TableUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const { danhSachNguoiDung } = useSelector((state) => state.userSlice);
  // console.log(danhSachNguoiDung);
  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      sorter: (a, b) => a.index - b.index,
      sortDirections: ["descend"],
      render: (text, record, index) => {
        return <span className="text-center">{index + 1}</span>;
      },
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDT",
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
    },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
    },
    {
      title: "Hành dộng",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            onClick={() => {
              // console.log(record);
              navigate(`/admin/chinh-sua-user/${record.taiKhoan}`);
            }}
            className="text-xl text-blue-500 "
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <Popconfirm
            title="Xoá Người dùng"
            description="Bạn có muốn xoá người dùng không không?"
            onConfirm={() => {
              quanLyNguoiDungServ
                .xoaNguoiDung(record.taiKhoan)
                .then((result) => {
                  console.log(result);
                  messageApi.success(result.data.content);
                  dispatch(layDanhSachNguoiDungApi());
                })
                .catch((error) => {
                  console.log(error);
                  messageApi.error(error.response.data.content);
                });
            }}
            // onCancel={cancel}
            okText="Có"
            cancelText="Không"
            okButtonProps={{
              className: "bg-red-500 hover:bg-red-600 duration:500",
            }}
          >
            <button className="text-xl text-red-500">
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <>
      {contextHolder}
      <Table
        columns={columns}
        dataSource={danhSachNguoiDung}
        onChange={onChange}
      />
    </>
  );
};

export default TableUser;
