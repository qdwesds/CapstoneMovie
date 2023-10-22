import React from "react";
import EditUser from "../../Components/EditUser/EditUser";

const EditUserAdmin = () => {
  return (
    <div className="bg-white p-10 space-y-3">
      <h1 className="font-bold text-3xl mb-10">Chỉnh sửa người dùng</h1>
      <EditUser />
    </div>
  );
};

export default EditUserAdmin;
