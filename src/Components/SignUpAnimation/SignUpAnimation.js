import React from 'react'
import Lottie from "react-lottie";
import loginAnimation from "./../../assets/animation/loginAnimation.json";

const SignUpAnimation = () => {
    const defaultOptions = {
        //todo : lặp lại vô tận
        loop: false,
        // todo : tự động chạy
        autoplay: true,
        // todo : animation muốn chạy
        animationData: loginAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
  return (
    <div>
        <Lottie
      options={defaultOptions}
      height={400}
      width={400}
    />
    </div>
  )
}

export default SignUpAnimation