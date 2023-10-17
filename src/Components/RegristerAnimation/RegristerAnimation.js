import React from "react";
import Lottie from "react-lottie";
import regristerAnimation from "./../../assets/animation/regristerAnimation.json";
const RegristerAnimation = () => {
  const defaultOptions = {
    //todo : lặp lại vô tận
    loop: false,
    // todo : tự động chạy
    autoplay: true,
    // todo : animation muốn chạy
    animationData: regristerAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Lottie
      options={defaultOptions}
      height={400}
      width={400}
      // isStopped={this.state.isStopped}
      // isPaused={this.state.isPaused}
    />
  );
};

export default RegristerAnimation;
