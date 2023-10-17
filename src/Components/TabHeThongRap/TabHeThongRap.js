import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { quanLyRapServ } from "../../services/quanLyRapServ";
import TabLichChieu from "../TabLichChieu/TabLichChieu";

const TabHeThongRap = () => {
  const [listLogoRap, setListLogoRap] = useState([]);
  useEffect(() => {
    quanLyRapServ
      .layThongTinHeThongRap()
      .then((result) => {
        // console.log(result);
        setListLogoRap(result.data.content);
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
    <div className=" mx-auto tabHeThongRap py-10 max-w-5xl">
      <Tabs
        tabPosition={positionTab}
        items={listLogoRap.map((item, index) => {
          //   console.log(item);
          const { logo, maHeThongRap } = item;
          return {
            label: (
              <>
                <img className="w-10 h-10 mb-3" src={logo} alt={logo} />
                <hr />
              </>
            ),
            key: maHeThongRap,
            children: <TabLichChieu maHeThongRap={maHeThongRap} />,
          };
        })}
      />
    </div>
  );
};

export default TabHeThongRap;
