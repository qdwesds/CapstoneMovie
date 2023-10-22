import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quanLyDatVeServ } from "../../services/quanLyDatVeServ";
import "./datVe.scss";
import {
  setLoadingEnd,
  setLoadingStarted,
} from "../../redux/slice/loadingSlice";
import {
  chuyenTab,
  datVeApi,
  gheDuocChon,
} from "../../redux/slice/quanLyDatVeSlice";
import { message } from "antd";
import { useParams } from "react-router-dom";
const DatVe = () => {
  const params = useParams();
  const [messageApi, contextHolder] = message.useMessage();
  const [chiTietPhongVe, setChiTietPhongVe] = useState({});
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userSlice);
  // console.log(user);
  const { danhSachGheDangDat } = useSelector((state) => state.quanLyDatVeSlice);
  console.log(danhSachGheDangDat);
  // console.log(danhSachGheKhachDat);
  useEffect(() => {
    dispatch(setLoadingStarted());
    quanLyDatVeServ
      .layDanhSachPhongVe(params.id)
      .then((result) => {
        // console.log(result);
        dispatch(setLoadingEnd());
        setChiTietPhongVe(result.data.content);
      })
      .catch((error) => {
        console.log(error);
        dispatch(setLoadingEnd());
      });
  }, []);

  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
  // console.log(danhSachGhe);
  const renderGhe = () => {
    return danhSachGhe?.map((ghe, index) => {
      // console.log(ghe);
      let gheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let gheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let gheDangDat = "";
      let indexGheDangDat = danhSachGheDangDat.findIndex(
        (item) => item.maGhe === ghe.maGhe
      );
      let gheDaDuocDat = "";
      if (user?.taiKhoan === ghe.taiKhoanNguoiDat) {
        gheDaDuocDat = "gheDaDuocDat";
      }

      if (indexGheDangDat !== -1) {
        gheDaDat = "gheDangDat";
      }
      // console.log(ghe);
      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch(gheDuocChon(ghe));
            }}
            disabled={ghe.daDat}
            className={`ghe ${gheVip} ${gheDaDat} ${gheDangDat} ${gheDaDuocDat} `}
          >
            {ghe.stt}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  class ThongTinDatVe {
    maLichChieu = 0;
    danhSachVe = [];
  }
  return (
    <>
      {contextHolder}
      <div className="min-h-full mt-5">
        <div className="grid grid-cols-12 responsiveGhe">
          <div className="col-span-9">
            <div className="flex items-center mt-5 flex-col ">
              <div className="bg-black w-4/5 h-[15px]"></div>
              <div className="trapezoid text-center">
                <h3 className="mt-2 font-bold text-black">Màn hình</h3>
              </div>
              <div className="text-center">{renderGhe()}</div>
            </div>
            <div className="mt-5 flex justify-center flex-row m-[10px]">
              <table className="min-w-[80%] divide-y divide-gray-200">
                <thead className="bg-gray-50 py-5">
                  <tr>
                    <th>Ghế chưa đặt</th>
                    <th>Ghế đang đặt</th>
                    <th>Ghế vip</th>
                    <th>Ghế đã đặt</th>
                    <th>Ghế mình đặt</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="text-center">
                    <td>
                      <button className="ghe text-center"></button>
                    </td>
                    <td>
                      <button className="ghe gheDangDat text-center"></button>
                    </td>
                    <td>
                      <button className="ghe gheVip text-center"></button>
                    </td>
                    <td>
                      <button className="ghe gheDaDat text-center"></button>
                    </td>
                    <td>
                      <button className="ghe gheDaDuocDat text-center"></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-span-3 responsiveDatVe">
            <h3 className="text-center text-xl mb-2 ">
              {danhSachGheDangDat
                ?.reduce((tongTien, ghe, index) => {
                  return (tongTien += ghe.giaVe);
                }, 0)
                .toLocaleString()}
              đ
            </h3>
            <hr />
            <h3 className="text-xl mt-2">{thongTinPhim?.tenPhim}</h3>
            <p>
              Địa điểm: {thongTinPhim?.tenCumRap} - {thongTinPhim?.tenRap}
            </p>
            <p>
              Ngày chiếu : {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}
            </p>
            <hr />
            <div className="flex flex-row my-5">
              <div className="w-4/5">
                <span className="text-lg">Ghế : </span>
                {danhSachGheDangDat?.map((gheDD, index) => {
                  return (
                    <span key={index} className="text-xl mr-1">
                      {gheDD.stt}
                    </span>
                  );
                })}
              </div>
              <div className="text-right col-span-1">
                <span className="text-lg">
                  {danhSachGheDangDat
                    ?.reduce((tongTien, ghe, index) => {
                      return (tongTien += ghe.giaVe);
                    }, 0)
                    .toLocaleString()}
                </span>
              </div>
            </div>
            <hr />
            <div className="my-5">
              <i>Email</i> <br />
              {user?.email}
            </div>
            <div className="my-5">
              <i>Số điện thoại</i> <br />
              {user?.soDT}
            </div>
            <hr />
            <div className=" flex flex-col justify-end items-center">
              <div
                onClick={() => {
                  let thongTinDatVe = new ThongTinDatVe();
                  thongTinDatVe.maLichChieu = params.id;
                  thongTinDatVe.danhSachVe = danhSachGheDangDat;
                  // console.log(thongTinDatVe);
                  dispatch(datVeApi(thongTinDatVe));
                  messageApi.success("Đặt vé thành công");
                  setTimeout(() => {
                    dispatch(chuyenTab());
                  }, 1000);
                }}
                className="bg-black text-white w-full text-center py-2 text-xl duration-500 cursor-pointer"
              >
                Đặt vé
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DatVe;
