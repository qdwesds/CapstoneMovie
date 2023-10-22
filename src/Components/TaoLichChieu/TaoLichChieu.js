import React, { useEffect, useState } from "react";
import { Button, Form, DatePicker, InputNumber, Select, message } from "antd";
import { quanLyRapServ } from "../../services/quanLyRapServ";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { quanLyDatVeServ } from "../../services/quanLyDatVeServ";

const TaoLichChieu = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const params = useParams();
  const formik = useFormik({
    initialValues: {
      maPhim: params.id,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
    onSubmit: (value) => {
      console.log(value);
      quanLyDatVeServ
        .taoLichChieu(value)
        .then((result) => {
          console.log(result);
          messageApi.success(result.data.content);
          navigate("/");
          resetForm();
        })
        .catch((error) => {
          console.log(error);
          messageApi.error(error.response.data.content);
        });
    },
  });
  const [state, setState] = useState({
    heThongRapChieu: [],
    cumRapChieu: [],
  });
  useEffect(() => {
    quanLyRapServ
      .layThongTinHeThongRap()
      .then((result) => {
        // console.log(result);
        setState({
          ...state,
          heThongRapChieu: result.data.content,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleChangeHeThongRap = async (value) => {
    // console.log("value", value);
    try {
      const result = await quanLyRapServ.layThongTinCumRapTheoHeThong(value);
      // console.log(result);
      setState({
        ...state,
        cumRapChieu: result.data.content,
      });
    } catch (error) {}
  };
  const { handleSubmit, setFieldValue, resetForm } = formik;
  return (
    <>
      {contextHolder}
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        //   onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
        autoComplete="off"
        onSubmitCapture={handleSubmit}
      >
        <Form.Item label="Hệ thống rạp">
          <Select
            options={state.heThongRapChieu?.map((htr, index) => {
              // console.log(htr);
              return {
                label: htr.tenHeThongRap,
                value: htr.maHeThongRap,
              };
            })}
            placeholder="Chọn hệ thống rạp"
            onChange={handleChangeHeThongRap}
          />
        </Form.Item>
        <Form.Item label="Cụm rạp">
          <Select
            options={state.cumRapChieu?.map((cumRap, index) => {
              // console.log(cumRap);
              return {
                label: cumRap.tenCumRap,
                value: cumRap.maCumRap,
              };
            })}
            placeholder="Chọn cụm rạp"
            onChange={(value) => {
              // console.log(value);
              setFieldValue("maRap", value);
            }}
          />
        </Form.Item>
        <Form.Item label="Ngày chiếu giờ chiếu">
          <DatePicker
            format={"DD/MM/YYYY hh:mm:ss"}
            showTime
            onChange={(value) => {
              setFieldValue(
                "ngayChieuGioChieu",
                moment(value).format("DD/MM/YYYY hh:mm:ss")
              );
              // console.log(moment(value).format("DD/MM/YYYY hh:mm:ss"));
            }}
            onOk={(value) => {
              setFieldValue(
                "ngayChieuGioChieu",
                moment(value).format("DD/MM/YYYY hh:mm:ss")
              );
              // console.log(moment(value).format("DD/MM/YYYY hh:mm:ss"));
            }}
          />
        </Form.Item>
        <Form.Item label="Giá vé">
          <InputNumber
            min={75000}
            max={150000}
            onChange={(value) => {
              // console.log(value);
              setFieldValue("giaVe", value);
            }}
            status={(value) => {
              formik.setFieldError("giaVe", value);
            }}
          />
        </Form.Item>
        <Form.Item label="Chức năng">
          <Button htmlType="submit">Tạo lịch chiếu</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default TaoLichChieu;
