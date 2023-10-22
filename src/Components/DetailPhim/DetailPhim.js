import React, { useEffect } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/circleCss/circle.scss";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { layThongTinLichChieuPhimApi } from "../../redux/slice/phimSlice";
import moment from "moment";
import { Rate } from "antd";
import TabPane from "antd/es/tabs/TabPane";

const DetailPhim = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  // console.log(params);
  const { detailPhim } = useSelector((state) => state.phimSlice);
  const { hinhAnh, tenPhim, ngayKhoiChieu, moTa, danhGia, heThongRapChieu } =
    detailPhim;
  useEffect(() => {
    dispatch(layThongTinLichChieuPhimApi(params.id));
  }, []);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${hinhAnh})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="min-h-[100vh] mt-18"
      >
        <CustomCard
          
          style={{ minHeight: "100vh" }}
          effectColor="#FFF" // required
          color="rgba(255,255,255,0.4)" // default color is white
          blur={5} // default blur value is 10px
          borderRadius={"0px"} // default border radius value is 10px
        >
          <div className="grid grid-cols-12">
            <div className="col-span-5 col-start-3">
              <div className="grid grid-cols-3">
                <img
                  className="w-full col-span-1 h-72"
                  src={hinhAnh}
                  alt={hinhAnh}
                />
                <div className="col-span-2 ml-5 text-white">
                  <p className="text-sm">
                    <span className="me-2 mb-3">Ngày chiếu</span>
                    {moment(ngayKhoiChieu).format("DD/MM/YYYY ~ hh:mm")}
                  </p>
                  <p className="text-4xl mb-5 ">{tenPhim}</p>
                  <p className="text-left w-72">{moTa}</p>
                  <a href="#clickDatVe">
                    <button className="px-6 py-2 mt-5 bg-red-600 hover:bg-red-800 rounded-md">
                      Đặt vé
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-span-4 flex flex-col align-middle justify-center"
              style={{ alignItems: "center" }}
            >
              <div className={`c100 p${danhGia * 10}`}>
                <span className="text-white">{danhGia}</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-white font-bold text-[15px] text-center">
                  Đánh giá
                </p>
                <Rate
                  className="text-yellow-500 mt-3"
                  allowHalf
                  value={danhGia / 2}
                />
              </div>
            </div>
          </div>
          <div className="mt-10 bg-white px-5 py-5">
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="Lịch chiếu" key={1} className="min-h-[300]">
                <div>
                  <Tabs tabPosition="left">
                    {heThongRapChieu?.map((item, index) => {
                      const { logo, tenHeThongRap, cumRapChieu } = item;
                      return (
                        <TabPane
                          id="clickDatVe"
                          key={index}
                          tab={
                            <div className=" flex flex-row items-center justify-center">
                              <img
                                src={logo}
                                alt={logo}
                                className="w-10 h-10"
                              />
                              <div className="text-center ml-2 text-green-500">
                                {tenHeThongRap}
                              </div>
                            </div>
                          }
                        >
                          {cumRapChieu?.map((cumRap, index) => {
                            const { tenCumRap, diaChi, lichChieuPhim } = cumRap;
                            return (
                              <div key={index}>
                                <div className="flex flex-row items-center">
                                  <img
                                    className="w-10 h-10"
                                    src={logo}
                                    alt={logo}
                                  />
                                  <div className="ml-2">
                                    <p className="text-xl text-green-500">
                                      {tenCumRap}
                                    </p>
                                    {diaChi}
                                  </div>
                                </div>
                                <div className="thongTinLichChieu grid grid-cols-4">
                                  {lichChieuPhim?.map(
                                    (lichChieuPhim, index) => {
                                      const { ngayChieuGioChieu, maLichChieu } =
                                        lichChieuPhim;
                                      return (
                                        <div
                                          className="col-span-1 mt-3"
                                          key={index}
                                        >
                                          <button
                                            onClick={() => {
                                              navigate(
                                                `/dat-ve/${maLichChieu}`
                                              );
                                            }}
                                            className="rounded px-3 py-2 border text-white font-semibold bg-green-500 hover:bg-green-600 duration-500"
                                          >
                                            {moment(ngayChieuGioChieu).format(
                                              "hh:mm A"
                                            )}
                                          </button>
                                        </div>
                                      );
                                    }
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </TabPane>
                      );
                    })}
                  </Tabs>
                </div>
              </TabPane>
              <TabPane tab="Thông tin" key={2} className="min-h-[300]">
                Thông tin
              </TabPane>
              <TabPane tab="Đánh giá" key={3} className="min-h-[300]">
                Đánh giá
              </TabPane>
            </Tabs>
          </div>
        </CustomCard>
      </div>
    </>
  );
};

export default DetailPhim;
