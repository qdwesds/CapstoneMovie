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
import "./detailPhim.scss";
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
        className="min-h-[100vh] responsive"
      >
        <CustomCard
          className="responsiveCot"
          style={{ minHeight: "100vh" }}
          effectColor="#FFF" // required
          color="rgba(255,255,255,0.4)" // default color is white
          blur={5} // default blur value is 10px
          borderRadius={"0px"} // default border radius value is 10px
        >
          <div className="grid grid-cols-12 responsiveCot1">
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
                </div>
              </div>
            </div>
            <div className="col-span-4 responsiveCot2">
              <div className="ml-9 mb-5">
                <p className="text-green-500 font-bold text-[15px] ml-8">
                  Đánh giá
                </p>
                <Rate className="text-blue-500" allowHalf value={danhGia / 2} />
              </div>
              <div className={`c100 p${danhGia * 10} big`}>
                <span className="text-white">{danhGia * 10} %</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 container mx-auto bg-white px-5 py-5">
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="Lịch chiếu" key={1} className="min-h-[300]">
                <div>
                  <Tabs tabPosition="left">
                    {heThongRapChieu?.map((item, index) => {
                      const { logo, tenHeThongRap, cumRapChieu } = item;
                      return (
                        <TabPane
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
                                <div className="flex flex-row items-center flexCot">
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
