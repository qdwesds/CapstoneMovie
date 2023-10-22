import React, { useEffect } from "react";
import EditPhim from "../../Components/EditPhim/EditPhim";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMovieInfoApi } from "../../redux/slice/phimSlice";

const EditPhimAdmin = () => {
  const params = useParams();
  // console.log(params);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieInfoApi(params.id));
  }, []);
  return (
    <div className="bg-white p-10 space-y-3 ">
      <h1 className="text-red-500 text-2xl">Chỉnh sửa phim</h1>
      <EditPhim />
    </div>
  );
};

export default EditPhimAdmin;
