import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { useFormik } from "formik";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDungServ";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { layDanhSachNguoiDungApi } from "../../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const ThemNguoiDung = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const [loaiNguoiDung, setLoaiNguoiDung] = useState([]);
  // console.log(loaiNguoiDung);
  useEffect(() => {
    quanLyNguoiDungServ
      .layDanhSachLoaiNguoiDung()
      .then((result) => {
        console.log(result);
        setLoaiNguoiDung(result.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      email: "",
      matKhau: "",
      soDt: "",
      hoTen: "",
      maNhom: "",
      maLoaiNguoiDung: "",
    },
    onSubmit: (values) => {
      console.log(values);
      quanLyNguoiDungServ
        .themNguoiDung(values)
        .then((result) => {
          console.log(result);
          messageApi.success("Thêm người dùng thành công");
          dispatch(layDanhSachNguoiDungApi());
          navigate("/admin/quan-ly-nguoi-dung");
          resetForm();
        })
        .catch((error) => {
          console.log(error.response.data.content);
          messageApi.error(error.response.data.content);
        });
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("Vui lòng nhập tài khoản"),
      email: Yup.string().required("Vui lòng nhập email"),
      matKhau: Yup.string().required("Vui lòng nhập mật khẩu"),
      soDt: Yup.string().required("Vui lòng nhập số điện thoại"),
      hoTen: Yup.string().required("Vui lòng nhập họ và tên"),
      maNhom: Yup.string().required("Vui lòng nhập mã nhóm"),
    }),
  });
  const {
    handleBlur,
    handleChange,
    values,
    handleSubmit,
    setFieldValue,
    resetForm,
    touched,
    errors,
    setFieldError,
  } = formik;

  return (
    <>
      {contextHolder}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 text-black">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="taiKhoan"
              id="taiKhoan"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.taiKhoan}
            />
            {touched.taiKhoan && errors.taiKhoan && (
              <span className="text-red-500">{errors.taiKhoan}</span>
            )}
            <label
              htmlFor="taiKhoan"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Tài khoản
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email && errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="matKhau"
              id="matKhau"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.matKhau}
            />
            {errors.matKhau && touched.matKhau && (
              <span className="text-red-500">{errors.matKhau}</span>
            )}
            <label
              htmlFor="matKhau"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Mật khẩu
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="soDt"
              id="soDt"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.soDt}
            />
            {errors.soDt && touched.soDt && (
              <span className="text-red-500">{errors.soDt}</span>
            )}
            <label
              htmlFor="soDt"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Số điện thoại
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="hoTen"
              id="hoTen"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.hoTen}
            />
            {errors.hoTen && touched.hoTen && (
              <span className="text-red-500">{errors.hoTen}</span>
            )}
            <label
              htmlFor="hoTen"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Họ và tên
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="maNhom"
              id="maNhom"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.maNhom}
            />
            {touched.maNhom && errors.maNhom && (
              <span className="text-red-500">{errors.maNhom}</span>
            )}
            <label
              htmlFor="maNhom"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Mã nhóm
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group ">
            <Select
              style={{ width: "100%", marginTop: "20px" }}
              options={loaiNguoiDung?.map((item, index) => {
                return {
                  label: item.tenLoai,
                  value: item.maLoaiNguoiDung,
                };
              })}
              onChange={(value) => {
                // console.log(value);
                setFieldValue("maLoaiNguoiDung", value);
              }}
            />
            <div>
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Loại người dùng
              </label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="text-white mt-14 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Thêm người dùng
        </button>
      </form>
    </>
  );
};

export default ThemNguoiDung;
