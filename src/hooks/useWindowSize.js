import { useEffect, useState } from "react";

//todo : custom hook
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    withWindow: 1300,
    heightWindow: 1300,
  });
  useEffect(() => {
    const handleSizeWindow = () => {
      setWindowSize({
        //? innerWidth : đại diện chiều dài của trình duyệt
        //? innerHeight : đại diện chiều cao của trình duyệt
        withWindow: window.innerWidth,
        heightWindow: window.innerHeight,
      });
    };
    handleSizeWindow();
    //todo : chạy hàm handleSizeWindow để bắt được chiều dài và chiều cao thiết bị khi giao diện thay đổi
    window.addEventListener("resize", handleSizeWindow);
    //todo : xoá bỏ hàm handleSizeWindow khi component không còn hiển thị lên giao diện
    return () => {
      window.removeEventListener("resize", handleSizeWindow);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
