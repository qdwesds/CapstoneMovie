import { Route, Routes } from "react-router-dom";
import DetailPhim from "./Components/DetailPhim/DetailPhim";
import CheckOut from "./pages/CheckOut/CheckOut";
import EditPhimAdmin from "./pages/EditPhimAdmin/EditPhimAdmin";
import EditUserAdmin from "./pages/EditUserAdmin/EditUserAdmin";
import Home from "./pages/Home/Home";
import ListPhimAdmin from "./pages/ListPhimAdmin/ListPhimAdmin";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Regrister from "./pages/Regrister/Regrister";
import TaoLichChieuAdmin from "./pages/TaoLichChieuAdmin/TaoLichChieuAdmin";
import ThemNguoiDungAdmin from "./pages/ThemNguoiDungAdmin/ThemNguoiDungAdmin";
import ThemPhimAdmin from "./pages/ThemPhimAdmin/ThemPhimAdmin";
import UserAdmin from "./pages/UserAdmin/UserAdmin";
import AdminTemplates from "./templates/AdminTemplates/AdminTemplates";
import HomeTemplates from "./templates/HomeTemplates/HomeTemplates";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeTemplates />}>
          <Route index element={<Home />} />
          <Route path="pro-file" element={<Profile />} />
          <Route path="detail">
            <Route path=":id" element={<DetailPhim />} />
          </Route>
        </Route>
        <Route path="dat-ve">
          <Route path=":id" element={<CheckOut />} />
        </Route>
        <Route path="log-in" element={<Login />} />
        <Route path="sign-up" element={<Regrister />} />
        <Route path="admin" element={<AdminTemplates />}>
          <Route path="list-phim" element={<ListPhimAdmin />} />
          <Route path="them-phim" element={<ThemPhimAdmin />} />
          <Route path="chinh-sua">
            <Route path=":id" element={<EditPhimAdmin />} />
          </Route>
          <Route path="tao-lich-chieu">
            <Route path=":id/:tenphim" element={<TaoLichChieuAdmin />} />
          </Route>
          <Route path="quan-ly-nguoi-dung" element={<UserAdmin />} />
          <Route path="chinh-sua-user">
            <Route path=":id" element={<EditUserAdmin />} />
          </Route>
          <Route path="them-nguoi-dung" element={<ThemNguoiDungAdmin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
