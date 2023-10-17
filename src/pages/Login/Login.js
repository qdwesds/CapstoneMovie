import React from "react";
import LoginAnimation from "../../Components/LoginAnimation/LoginAnimation";
import LoginForm from "../../Components/LoginForm/LoginForm";
import "./login.scss";

const Login = () => {
  return (
    <div className="grid grid-cols-2 h-screen bg-gray-300 loginResponsive">
      <div className="flex items-center justify-center">
        <LoginAnimation />
      </div>
      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
