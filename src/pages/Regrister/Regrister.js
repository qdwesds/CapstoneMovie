import React from "react";
import RegristerAnimation from "../../Components/RegristerAnimation/RegristerAnimation";
import RegristerForm from "../../Components/RegristerForm/RegristerForm";
import "./regrister.scss";

const Regrister = () => {
  return (
    <div className="grid grid-cols-2 h-[100vh] bg-gray-300 regristerResponsive">
      <div className="flex items-center justify-center">
        <RegristerAnimation />
      </div>
      <div>
        <RegristerForm />
      </div>
    </div>
  );
};

export default Regrister;
