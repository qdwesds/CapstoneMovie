import React from "react";
import Lottie from "react-lottie";
import loadingAnimation from "./../../assets/animation/loadingAnimation.json";

const Loading = () => {
  const defaultOptions = {
    //todo : lặp lại vô tận
    loop: true,
    // todo : tự động chạy
    autoplay: true,
    // todo : animation muốn chạy
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="fixed h-screen top-0 left-0 w-full bg-slate-100 bg-opacity-30 z-[9999]">
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        // isStopped={this.state.isStopped}
        // isPaused={this.state.isPaused}
      />
    </div>
  );
};

export default Loading;
