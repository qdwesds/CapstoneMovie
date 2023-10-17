import React, { useState } from "react";
import { Carousel } from "antd";
import "./BannerCarousel.scss";
import TrailerModal from "../TrailerModal/TrailerModal";
const contentStyle = {
  margin: 0,
  height: "500px",
  color: "#fff",
  position: "relative",
};
const trailerBanner = [
  <iframe
    width="100%"
    height="400"
    src="https://www.youtube.com/embed/uqJ9u7GSaYM"
    title='Phim "Bàn Tay Diệt Quỷ" Trailer | KC 09.04.2021'
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>,
  <iframe
    width="100%"
    height="400"
    src="https://www.youtube.com/embed/L-XhraxUsAs"
    title="Lật Mặt 6: Tấm Vé Định Mệnh | Trailer Chính thức | Netflix"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>,
  <iframe
    width="100%"
    height="400"
    src="https://www.youtube.com/embed/NYH2sLid0Zc"
    title="Mortal Kombat (2021) - Official Red Band Trailer"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>,
];
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i className="fa-solid fa-chevron-right"></i>
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i className="fa-solid fa-chevron-left"></i>
    </div>
  );
}

const BannerCarousel = ({ listBanner }) => {
  // console.log(listBanner);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentModal, setContentModal] = useState("");

  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };
  return (
    <>
      <Carousel
        id="banner"
        afterChange={onChange}
        arrows={true}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
      >
        {listBanner.map((item, index) => {
          const { hinhAnh } = item;
          return (
            <div key={index}>
              <div style={contentStyle}>
                <img
                  className="w-full h-full object-cover"
                  src={hinhAnh}
                  alt={hinhAnh}
                />
                <div
                  onClick={() => {
                    setIsModalOpen(true);
                    setContentModal(trailerBanner[index]);
                  }}
                  className="icon_play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[90px] hover:scale-150 duration-500"
                >
                  <i className="fa-regular fa-circle-play"></i>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <TrailerModal
        isModalOpen={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        contentModal={contentModal}
      />
    </>
  );
};

export default BannerCarousel;
