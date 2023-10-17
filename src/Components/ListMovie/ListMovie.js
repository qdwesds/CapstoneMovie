import React from "react";
import { useSelector } from "react-redux";
import CarouselMovie from "../CarouselMovie/CarouselMovie";

const ListMovie = () => {
  const { arrPhim } = useSelector((state) => state.phimSlice);
  //   console.log(arrPhim);
  return (
    <div className="container mx-auto py-20 listMovie">
      <h2 className="text-center font-bold text-3xl mb-10">
        Danh sách các phim
      </h2>
      <CarouselMovie arrPhim={arrPhim} />
    </div>
  );
};

export default ListMovie;
