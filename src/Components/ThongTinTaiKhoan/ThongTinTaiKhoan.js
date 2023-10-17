import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thongTinTaiKhoanApi } from "../../redux/slice/userSlice";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const ThongTinTaiKhoan = () => {
  const navigate = useNavigate();
  const { thongTinTaiKhoan } = useSelector((state) => state.userSlice);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: thongTinTaiKhoan?.taiKhoan,
      matKhau: thongTinTaiKhoan?.matKhau,
      email: thongTinTaiKhoan?.email,
      soDt: thongTinTaiKhoan?.soDT,
      maNhom: thongTinTaiKhoan?.maNhom,
      maLoaiNguoiDung: thongTinTaiKhoan?.maLoaiNguoiDung,
      hoTen: thongTinTaiKhoan?.hoTen,
    },
    onSubmit: (value) => {
      console.log(value);
      navigate("/");
      resetForm();
    },
  });
  const dispatch = useDispatch();
  //   console.log(thongTinTaiKhoan);
  useEffect(() => {
    dispatch(thongTinTaiKhoanApi());
  }, []);

  const { handleChange, handleBlur, values, handleSubmit, resetForm } = formik;
  return (
    <form className="grid grid-cols-2 gap-2 text-black" onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="taiKhoan"
          id="taiKhoan"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.taiKhoan}
          disabled
        />
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
          name="matKhau"
          id="matKhau"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.matKhau}
          disabled
        />
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
          name="email"
          id="email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          disabled
        />
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
          name="soDt"
          id="soDt"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.soDt}
          disabled
        />
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
          name="maNhom"
          id="maNhom"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.maNhom}
          disabled
        />
        <label
          htmlFor="maNhom"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Mã nhóm
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="maLoaiNguoiDung"
          id="maLoaiNguoiDung"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.maLoaiNguoiDung}
          disabled
        />
        <label
          htmlFor="maLoaiNguoiDung"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Mã loại người dùng
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
          disabled
        />
        <label
          htmlFor="hoTen"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Họ và tên
        </label>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Về trang chủ
      </button>
    </form>
  );
};

export default ThongTinTaiKhoan;
