import React, { useEffect } from "react";
import DatVe from "../../Components/DatVe/DatVe";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../Components/Loading/Loading";
import { Tabs, message } from "antd";
import KetQuaDatVe from "../../Components/KetQuaDatVe/KetQuaDatVe";
import { quayLaiTab } from "../../redux/slice/quanLyDatVeSlice";
const { TabPane } = Tabs;

const BookingTicket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLocal = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!userLocal) {
      message.warning("Vui lòng đăng nhập");
      navigate("/log-in");
    }
  }, [navigate, userLocal]);
  const { isLoading } = useSelector((state) => state.loadingSlice);
  const { tabActive } = useSelector((state) => state.quanLyDatVeSlice);
  return (
    <>
      {isLoading ? <Loading /> : <></>}
      <div className="p-5">
        <Tabs
          defaultActiveKey="1"
          activeKey={tabActive}
          onChange={(key) => {
            dispatch(quayLaiTab(key));
          }}
        >
          <TabPane tab="Chọn ghế và thanh toán" key={1}>
            <DatVe />
          </TabPane>
          <TabPane tab="Lịch sử đặt vé" key={2}>
            <KetQuaDatVe />
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default BookingTicket;
