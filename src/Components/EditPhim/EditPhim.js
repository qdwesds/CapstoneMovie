import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { DatePicker, Form, Input, Switch, Rate } from "antd";
import moment from "moment";
import { quanLyPhimServ } from "../../services/quanLyPhimServ";
import { useNavigate } from "react-router-dom";
import { getMovieInfoApi } from "../../redux/slice/phimSlice";

const EditPhim = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { thongTinPhim } = useSelector((state) => state.phimSlice);
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: thongTinPhim?.maPhim,
      tenPhim: thongTinPhim?.tenPhim,
      trailer: thongTinPhim?.trailer,
      moTa: thongTinPhim?.moTa,
      ngayKhoiChieu: thongTinPhim?.ngayKhoiChieu,
      dangChieu: thongTinPhim?.dangChieu,
      sapChieu: thongTinPhim?.sapChieu,
      hot: thongTinPhim?.hot,
      danhGia: thongTinPhim?.danhGia,
      hinhAnh: null,
    },
    onSubmit: (values) => {
      console.log(values);
      const data = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          data.append(key, values[key]);
        } else if (key !== null) {
          data.append("File", values.hinhAnh);
        } else {
          data.append("File", values[key]);
        }
      }
      quanLyPhimServ
        .updateMovie(data)
        .then((result) => {
          console.log(result);
          dispatch(getMovieInfoApi());
          navigate("/admin/list-phim");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    validationSchema: Yup.object().shape({
      tenPhim: Yup.string().required("Vui lòng nhập tên phim"),
      trailer: Yup.string().required("Vui lòng nhập trailer"),
      moTa: Yup.string().required("Vui lòng nhập mô tả"),
      ngayKhoiChieu: Yup.string().required("Vui lòng chọn ngày"),
    }),
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    setFieldValue,
    errors,
    touched,
  } = formik;
  return (
    <>
      <Form
        onFinish={handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Tên phim">
          <Input
            name="tenPhim"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.tenPhim}
          />
          {errors.tenPhim && touched.tenPhim && (
            <span className="text-red-500">{errors.tenPhim}</span>
          )}
        </Form.Item>
        <Form.Item label="Trailer">
          <Input
            name="trailer"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.trailer}
          />
          {errors.trailer && touched.trailer && (
            <span className="text-red-500">{errors.trailer}</span>
          )}
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input
            name="moTa"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.moTa}
          />
          {errors.moTa && touched.moTa && (
            <span className="text-red-500">{errors.moTa}</span>
          )}
        </Form.Item>
        <Form.Item label="Ngày chiếu">
          <DatePicker
            name="ngayKhoiChieu"
            format={"DD/MM/YYYY"}
            onChange={(day, dayString) => {
              setFieldValue("ngayKhoiChieu", dayString);
            }}
            value={moment(thongTinPhim.ngayKhoiChieu)}
          />
          {errors.ngayKhoiChieu && touched.ngayKhoiChieu && (
            <span className="text-red-500 ml-3">{errors.ngayKhoiChieu}</span>
          )}
        </Form.Item>
        <Form.Item label="Đang chiếu">
          <Switch
            checked={values.dangChieu}
            name="dangChieu"
            onChange={(checked, event) => {
              // console.log(checked);
              setFieldValue("dangChieu", checked);
            }}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item label="Sắp chiếu">
          <Switch
            checked={values.sapChieu}
            name="sapChieu"
            onChange={(checked, event) => {
              setFieldValue("sapChieu", checked);
            }}
          />
        </Form.Item>
        <Form.Item label="Hot">
          <Switch
            checked={values.hot}
            name="hot"
            onChange={(checked, event) => {
              setFieldValue("hot", checked);
            }}
          />
        </Form.Item>
        <Form.Item label="Đánh giá">
          <Rate
            onChange={(value) => {
              setFieldValue("danhGia", value);
            }}
            value={values.danhGia}
          />
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <input
            type="file"
            name="hinhAnh"
            onChange={(event) => {
              setFieldValue("hinhAnh", event.target.files[0]);
            }}
          />
        </Form.Item>

        <Form.Item label="">
          <button
            type="submit"
            className="bg-green-500 px-3 py-2 rounded text-white hover:bg-green-600 duration-500 "
          >
            Cập nhật
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditPhim;
