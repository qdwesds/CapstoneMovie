import React, { useState } from "react";
import { Carousel } from "antd";
import "./bannerCarousel.scss";
import TrailerModal from "../TrailerModal/TrailerModal";

const contentStyle = {
  margin: 0,
  height: "500px",
  color: "#fff",
  position: "relative",
  //   lineHeight: "160px",
  //   textAlign: "center",
  //   background: "#364d79",
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
    src="https://www.youtube.com/embed/2EnP2tVC00Q"
    title='Phim "Lật Mặt 6: Tấm Vé Định Mệnh" Trailer | KC 28.04.2023'
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
const BannerCarousel = ({ listBanner }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentModal, setContentModal] = useState("");
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      >
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      >
        <i class="fa-solid fa-arrow-left"></i>
      </div>
    );
  };
  const removeContentModal = () => {
    setContentModal("");
  };
  return (
    <>
      <Carousel
      className="mt-14"
        id="banner"
        afterChange={onChange}
        arrows={true}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
        
      >
        {listBanner.map((item, index) => {
          console.log(item);
          // các slide chiều cao chưa giống nhau, nên có khoảng trắng
          return (
            <div key={index}>
              <div style={contentStyle}>
                <img
                  className="h-full w-full object-cover"
                  src={item.hinhAnh}
                  alt=""
                />
                <div
                  onClick={() => {
                    // mở modal
                    setIsModalOpen(true);
                    // set dữ liệu cho contentModal dựa trên index của slide đang có
                    setContentModal(trailerBanner[index]);
                  }}
                  className="icon_play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl"
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
        // phương thức onCancel gọi setState cho giá trị false để ẩn modal
        onCancel={() => {
          setIsModalOpen(false);
          setContentModal("");
        }}
        contentModal={contentModal}
        removeContentModal={removeContentModal}
      />
    </>
  );
};

export default BannerCarousel;
