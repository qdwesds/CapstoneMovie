import React from "react";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { quayLaiTab } from "../../redux/slice/quanLyDatVeSlice";
import KetQuaDatVe from "../../Components/KetQuaDatVe/KetQuaDatVe";

const Profile = () => {
  const { tabActive } = useSelector((state) => state.quanLyDatVeSlice);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto px-5 pb-20">
      <Tabs
      className="mt-20"
        defaultActiveKey={tabActive}
        activeKey={tabActive}
        tabPosition={"top"}
        onChange={(key) => {
          dispatch(quayLaiTab(key));
        }}
        items={[
          {
            label: <h3 className="text-sm md:text-lg">Thông Tin Tài Khoản</h3>,
            key: "1",
            // children: <ThongTinTaiKhoan />,
          },
          {
            label: <h3 className="text-sm md:text-lg"> Lịch Sử Đặt Vé</h3>,
            key: "2",
            children: <KetQuaDatVe />,
          },
        ]}
      />
    </div>
  );
};

export default Profile;
