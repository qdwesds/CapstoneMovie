import Search from "antd/es/input/Search";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TablePhim from "../../Components/TablePhim/TablePhim";
import { getAllMovieApi } from "../../redux/slice/phimSlice";

const ListPhimAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovieApi());
  }, []);
  return (
    <div className="bg-white p-10 space-y-5">
      <h2 className="font-bold text-3xl">Quản lý phim</h2>
      <button
        onClick={() => {
          navigate("/admin/them-phim");
        }}
        className="bg-blue-500 text-white rounded py-2 px-5 hover:bg-blue-700 duration-500"
      >
        Thêm phim
      </button>
      <div>
        <Search
          placeholder="Tìm kiếm phim"
          onSearch={(value) => {
            // console.log(value);
            dispatch(getAllMovieApi(value));
          }}
        />
      </div>
      <TablePhim />
    </div>
  );
};

export default ListPhimAdmin;
