import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BannerCarousel from "../../Components/BannerCarousel/BannerCarousel";
import ListMovie from "../../Components/ListMovie/ListMovie";
import TabHeThongRap from "../../Components/TabHeThongRap/TabHeThongRap";
import {
  setLoadingEnd,
  setLoadingStarted,
} from "../../redux/slice/loadingSlice";
import { layDanhSachPhimApi } from "../../redux/slice/phimSlice";
import { quanLyPhimServ } from "../../services/quanLyPhimServ";

const Home = () => {
  const dispatch = useDispatch();
  const [listBanner, setListBanner] = useState([]);
  useEffect(() => {
    dispatch(setLoadingStarted());
    quanLyPhimServ
      .layDanhSachBanner()
      .then((result) => {
        // console.log(result);
        setListBanner(result.data.content);
        dispatch(setLoadingEnd());
      })
      .catch((error) => {
        console.log(error);
        dispatch(setLoadingEnd());
      });
    dispatch(layDanhSachPhimApi());
  }, []);
  return (
    <>
      <BannerCarousel listBanner={listBanner} />
      <ListMovie />
      <TabHeThongRap />
    </>
  );
};

export default Home;
