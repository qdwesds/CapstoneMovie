import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDungServ";
import { saveLocal } from "../../utils/localStorage";
import { message } from "antd";

const LoginForm = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      //   console.log(values);
      quanLyNguoiDungServ
        .dangNhap(values)
        .then((result) => {
          //   console.log(result);
          saveLocal("user", result.data.content);
          messageApi.success("đăng nhập thành công");
          setTimeout(() => {
            navigate("/");
          }, 1000);
          resetForm();
        })
        .catch((error) => {
          //   console.log(error);
          messageApi.error(error.response.data.content);
        });
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("Vui lòng nhập tài khoản"),
      matKhau: Yup.string().required("Vui lòng nhập mật khẩu"),
    }),
  });
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    resetForm,
  } = formik;
  return (
    <>
      {contextHolder}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to={"/"}
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Project Movie
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Đăng nhập
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="taiKhoan"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tài khoản
                  </label>
                  <input
                    type="text"
                    name="taiKhoan"
                    id="taiKhoan"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Nhập tài khoản"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.taiKhoan}
                  />
                  {touched.taiKhoan && errors.taiKhoan && (
                    <span className="text-red-500">{errors.taiKhoan}</span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="matKhau"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="matKhau"
                    id="matKhau"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.matKhau}
                  />
                  {touched.matKhau && errors.matKhau && (
                    <span className="text-red-500">{errors.matKhau}</span>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-primary-800"
                >
                  Đăng nhập
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to={"/sign-up"}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Đăng kí
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
