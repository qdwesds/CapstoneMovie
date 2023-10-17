import React from "react";
import { Carousel } from "antd";
import "./carouselMovie.scss";
import { useNavigate } from "react-router-dom";
const CarouselMovie = ({ arrPhim }) => {
  const navigate = useNavigate();
  //   console.log(arrPhim);
  return (
    <Carousel
      slidesToShow={4}
      rows={2}
      responsive={[
        {
          breakpoint: 1279,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 565,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: false,
          },
        },
      ]}
    >
      {arrPhim.map((item, index) => {
        const { hinhAnh, tenPhim, moTa, maPhim } = item;
        return (
          <div key={index} className="p-5 " id="danhSachPhim">
            <div className="movieCarousel text-left ">
              <img className="h-72 w-full object-cover" src={hinhAnh} alt="" />
              <div className="movieTitle my-3 min-h-[64px]:">
                <h3 className="text-xl h-12">
                  <span className=" text-white bg-orange-500 rounded p-1 mr-3">
                    C18
                  </span>
                  {tenPhim}
                </h3>
              </div>
            </div>
            <p className="line-clamp-2 h-11 ">{moTa}</p>
            <button
              onClick={() => {
                navigate(`/detail/${maPhim}`);
              }}
              className="bg-gray-500 w-full font-semibold mt-5 rounded py-2 px-4 text-white hover:bg-red-500 duration-500"
            >
              Đặt vé
            </button>
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselMovie;
