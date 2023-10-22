import React from "react";
import { Space, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { message, Popconfirm } from "antd";
import { quanLyPhimServ } from "../../services/quanLyPhimServ";
import { getAllMovieApi } from "../../redux/slice/phimSlice";


const onChange = (pagination, filters, sorter, extra) => {
  console.log(pagination, filters, sorter, extra);
};

const TablePhim = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend"],
      render: (text) => {
        //   console.log(text);
        return <span>{text}</span>;
      },
      with: "10%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      defaultSortOrder: "descend",
      render: (text, record, index) => {
        return (
          <img
            className="w-20 h-20"
            src={record.hinhAnh}
            alt={record.tenPhim}
          />
        );
      },
      with: "15%",
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend"],
      render: (text) => {
        //   console.log(text);
        return <span>{text}</span>;
      },
      width: "20%",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      render: (text) => {
        //   console.log(text);
        return <span>{text}</span>;
      },
      width: "40%",
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            onClick={() => {
              // console.log(record);
              navigate(`/admin/chinh-sua/${record.maPhim}`);
            }}
            className="text-xl text-blue-500 "
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <Popconfirm
            title="Xoá phim"
            description="Bạn có muốn xoá phim không?"
            onConfirm={() => {
              console.log(record);
              quanLyPhimServ
                .xoaPhim(record.maPhim)
                .then((result) => {
                  console.log(result);
                  dispatch(getAllMovieApi());
                  messageApi.success("Xoá phim thành công");
                })
                .catch((error) => {
                  console.log(error);
                  messageApi.error("Xoá phim thất bại");
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
          <button
            onClick={() => {
              navigate(
                `/admin/tao-lich-chieu/${record.maPhim}/${record.tenPhim}`
              );
              // console.log(record);
            }}
            className="text-xl text-green-500 "
          >
            <i className="fa-regular fa-calendar"></i>
          </button>
        </Space>
      ),
      width: "15%",
    },
  ];
  const { arrPhim } = useSelector((state) => state.phimSlice);
  return (
    <>
      {contextHolder}
      <Table
        columns={columns}
        dataSource={arrPhim}
        onChange={onChange}
        rowKey={"maPhim"}
      />
      ;
    </>
  );
};

export default TablePhim;
