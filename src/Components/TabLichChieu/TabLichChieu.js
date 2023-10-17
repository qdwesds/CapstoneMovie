import React, { useEffect, useState } from "react";
import { quanLyRapServ } from "../../services/quanLyRapServ";
import { Tabs } from "antd";
import moment from "moment";
import "./tabLichChieu.scss";
import { useNavigate } from "react-router-dom";

const TabLichChieu = ({ maHeThongRap }) => {
  const navigate = useNavigate();
  //   console.log(maHeThongRap);
  const [cumRap, setCumRap] = useState([]);

  useEffect(() => {
    quanLyRapServ
      .layThongTinLichChieuHeThongRap(maHeThongRap)
      .then((result) => {
        // console.log(result);
        setCumRap(result.data.content[0].lstCumRap);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [positionTab, setPositionTab] = useState("left");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 970) {
        setPositionTab("top");
      } else {
        setPositionTab("left");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Tabs
        tabPosition={positionTab}
        items={cumRap.map((item, index) => {
          //   console.log(item);
          const { tenCumRap, diaChi, danhSachPhim } = item;
          return {
            label: (
              <div className="text-left w-72" key={index}>
                <h4 className="font-medium text-green-700">{tenCumRap}</h4>
                <p className="truncate ... text-gray-500 mb-2">{diaChi}</p>
                <hr />
              </div>
            ),
            key: index,
            children: (
              <div
                className="space-y-4 "
                style={{ height: "516px", overflowY: "scroll" }}
              >
                {danhSachPhim?.map((i, index) => {
                  const { hinhAnh, tenPhim, lstLichChieuTheoPhim } = i;
                  return (
                    <div className="flex py-4" key={index}>
                      <div className="mx-3">
                        <img
                          className="w-20 h-full object-cover"
                          src={hinhAnh}
                          alt={hinhAnh}
                        />
                      </div>
                      <div className="w-96">
                        <h5 className="text-xl font-bold ">{tenPhim}</h5>
                        <div className="grid gap-3 grid-cols-2 tabLichChieu">
                          {lstLichChieuTheoPhim
                            ?.slice(0, 4)
                            .map((lichChieu, index) => {
                              // console.log(lichChieu);
                              return (
                                <p
                                  onClick={() => {
                                    navigate(
                                      `/dat-ve/${lichChieu.maLichChieu}`
                                    );
                                  }}
                                  key={index}
                                  className="py-4 px-2 bg-gray-100 border border-gray-400 rounded font-bold space-x-2 cursor-pointer"
                                >
                                  <span className="text-green-400">
                                    {moment(lichChieu.ngayChieuGioChieu).format(
                                      "DD-MM-YYYY "
                                    )}
                                  </span>
                                  ~
                                  <span className="text-orange-400">
                                    {moment(lichChieu.ngayChieuGioChieu).format(
                                      "hh:mm"
                                    )}
                                  </span>
                                </p>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ),
          };
        })}
      />
    </>
  );
};

export default TabLichChieu;
