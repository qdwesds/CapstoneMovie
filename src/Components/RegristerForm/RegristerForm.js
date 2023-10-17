import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDungServ";
import { message } from "antd";

const RegristerForm = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      hoTen: "",
    },
    onSubmit: (values) => {
      //   console.log(values);
      quanLyNguoiDungServ
        .dangKi(values)
        .then((result) => {
          //   console.log(result);
          messageApi.success("Đăng kí tài khoản thành công");
          resetForm();
          setTimeout(() => {
            navigate("/log-in");
          }, 1000);
        })
        .catch((error) => {
          //   console.log(error);
          messageApi.error("Đăng kí tài khoản thất bại");
        });
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("Vui lòng nhập tên tài khoản"),
      matKhau: Yup.string().required("Vui lòng nhập mật khẩu"),
      email: Yup.string()
        .required("Vui lòng nhập email")
        .matches(
          /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/,
          "Vui lòng nhập đúng định dạng email"
        ),
      soDt: Yup.string()
        .required("Vui lòng nhập số điện thoại")
        .matches(
          /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
          "Vui lòng nhập đúng định dạng số điện thoại"
        ),
      maNhom: Yup.string().required("Vui lòng nhập mã nhóm"),
      hoTen: Yup.string()
        .required("Vui lòng nhập họ tên")
        .matches(
          /^[a-zA-Z'-'\sáàảãạăâắằấầặẵẫậéèẻ ẽẹếềểễệóòỏõọôốồổỗộ ơớờởỡợíìỉĩịđùúủũụưứ� �ửữựÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠ ƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼ� ��ỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞ ỠỢỤỨỪỬỮỰỲỴÝỶỸửữựỵ ýỷỹ]*$/,
          "Vui lòng nhập đúng định dạng tên"
        ),
    }),
  });
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    resetForm,
  } = formik;
  return (
    <>
      {contextHolder}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Đăng kí
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
                    placeholder="Tạo tài khoản"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.taiKhoan}
                  />
                  {touched.taiKhoan && errors.taiKhoan && (
                    <span className="text-red-500 text-[10px]">
                      {errors.taiKhoan}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="matKhau"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mật khẩu
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
                    <span className="text-red-500 text-[10px]">
                      {errors.matKhau}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="dung@gmail.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {touched.email && errors.email && (
                    <span className="text-red-500 text-[10px]">
                      {errors.email}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="soDt"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    name="soDt"
                    id="soDt"
                    placeholder="0784560xx"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.soDt}
                  />
                  {touched.soDt && errors.soDt && (
                    <span className="text-red-500 text-[10px]">
                      {errors.soDt}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="soDt"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mã nhóm
                  </label>
                  <input
                    type="text"
                    name="maNhom"
                    id="maNhom"
                    placeholder="Nhóm 1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.maNhom}
                  />
                  {touched.maNhom && errors.maNhom && (
                    <span className="text-red-500 text-[10px]">
                      {errors.maNhom}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="hoTen"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    name="hoTen"
                    id="hoTen"
                    placeholder="Nguyễn Văn A"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.hoTen}
                  />
                  {touched.hoTen && errors.hoTen && (
                    <span className="text-red-500 text-[10px]">
                      {errors.hoTen}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-500 dark:focus:ring-primary-800"
                >
                  Đăng kí
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to={"/log-in"}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
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

export default RegristerForm;
