import React from "react";
import FormAddMovie from "../../Components/FormAddMovie/FormAddMovie";

const ThemPhimAdmin = () => {
  return (
    <div className="bg-white p-10 space-y-5">
      <h2 className="text-2xl  text-red-500 font-medium">Thêm phim mới</h2>
      <FormAddMovie />
    </div>
  );
};

export default ThemPhimAdmin;
