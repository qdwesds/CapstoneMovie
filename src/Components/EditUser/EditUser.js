import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhSachNguoiDungApi,
  thongTinNguoiDungApi,
} from "../../redux/slice/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDungServ";
import { message } from "antd";

const EditUser = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thongTinNguoiDungApi(params.id));
  }, []);
  const { thongTinNguoiDung } = useSelector((state) => state.userSlice);
  console.log(thongTinNguoiDung);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: params?.id,
      matKhau: thongTinNguoiDung?.matKhau,
      email: thongTinNguoiDung?.email,
      soDt: thongTinNguoiDung?.soDT,
      maNhom: thongTinNguoiDung?.maNhom,
      maLoaiNguoiDung: thongTinNguoiDung?.maLoaiNguoiDung,
      hoTen: thongTinNguoiDung?.hoTen,
    },
    onSubmit: (values) => {
      console.log(values);
      quanLyNguoiDungServ
        .capNhatThongTinNguoiDung(values)
        .then((result) => {
          console.log(result);
          messageApi.success(result.data.content);
          dispatch(layDanhSachNguoiDungApi());
          navigate("/admin/quan-ly-nguoi-dung");
          messageApi.success(result.data.content);
          resetForm();
        })
        .catch((error) => {
          console.log(error);
          messageApi.error(error.response.data.content);
        });
    },
  });
  const { handleSubmit, handleBlur, handleChange, values, resetForm } = formik;
  return (
    <>
      {contextHolder}
      <form
        className="grid grid-cols-2 gap-2 text-black"
        onSubmit={handleSubmit}
      >
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="matKhau"
            id="matKhau"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.matKhau}
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
            value={values.maNhom}
            onBlur={handleBlur}
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
          Cập nhật
        </button>
      </form>
    </>
  );
};

export default EditUser;
