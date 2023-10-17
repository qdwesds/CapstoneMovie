import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thongTinTaiKhoanApi } from "../../redux/slice/userSlice";
import moment from "moment";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

const KetQuaDatVe = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { thongTinTaiKhoan } = useSelector((state) => state.userSlice);
  //   console.log(thongTinTaiKhoan);
  useEffect(() => {
    dispatch(thongTinTaiKhoanApi());
  }, []);
  const { thongTinDatVe } = thongTinTaiKhoan;
  const renderTicketItem = () => {
    return thongTinDatVe?.map((item, index) => {
      const { hinhAnh, tenPhim, ngayDat, danhSachGhe } = item;
      const seats = _.first(item.danhSachGhe);
      return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={hinhAnh}
            />
            <div className="flex-grow">
              <h2 className="text-red-500 title-font font-medium text-lg">
                {tenPhim}
              </h2>
              <p className="text-gray-500">
                <span className="mr-2">
                  {moment(ngayDat).format("hh:mm A")}
                </span>
                {moment(ngayDat).format("DD/MM/YYYY")}
              </p>
              <p text-gray-500>
                <span className="text-red-500">Địa điểm : </span>
                {seats.tenHeThongRap}
              </p>
              <p className="text-gray-500">{seats.tenCumRap}</p>
              <p className="space-x-1">
                <span className="text-red-500">Ghế : </span>
                {danhSachGhe?.slice(0, 4).map((ghe, index) => {
                  return <span key={index}>{ghe.tenGhe}</span>;
                })}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-green-500 rounded px-4 py-2 text-white font-bold hover:bg-green-600 cursor-pointer duration-500"
      >
        Quay lại trang chủ
      </button>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-4xl font-bold title-font mb-4 text-orange-500">
              Lịch sử đặt vé khách hàng
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Thông tin địa điểm và thời gian
            </p>
          </div>
          <div className="flex flex-wrap -m-2">{renderTicketItem()}</div>
        </div>
      </section>
    </div>
  );
};

export default KetQuaDatVe;
