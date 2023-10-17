import React, { useState } from "react";
import { DatePicker, Form, Input, Radio, Switch, Rate } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { quanLyPhimServ } from "../../services/quanLyPhimServ";

const FormAddMovie = () => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      const data = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          data.append(key, values[key]);
        } else {
          data.append("File", values[key]);
        }
      }
      quanLyPhimServ
        .themPhimUploadHinh(data)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
      resetForm();
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
    resetForm,
  } = formik;
  return (
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
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
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
            // console.log(dayString);
            setFieldValue("ngayKhoiChieu", dayString);
          }}
        />
        {errors.ngayKhoiChieu && touched.ngayKhoiChieu && (
          <span className="text-red-500 ml-3">{errors.ngayKhoiChieu}</span>
        )}
      </Form.Item>
      <Form.Item label="Đang chiếu">
        <Switch
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
          name="sapChieu"
          onChange={(checked, event) => {
            setFieldValue("sapChieu", checked);
          }}
        />
      </Form.Item>
      <Form.Item label="Hot">
        <Switch
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
        />
      </Form.Item>
      <Form.Item label="Hình ảnh">
        <input
          type="file"
          name="hinhAnh"
          onChange={(event) => {
            // console.log(event.target.files);
            setFieldValue("hinhAnh", event.target.files[0]);
          }}
        />
      </Form.Item>

      <Form.Item label="">
        <button
          type="submit"
          className="bg-green-500 px-3 py-2 rounded text-white hover:bg-green-600 duration-500 "
        >
          Thêm phim
        </button>
      </Form.Item>
    </Form>
  );
};

export default FormAddMovie;
