import React, { useEffect, useState } from "react";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, message, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Quản lý người dùng", "quan-ly-nguoi-dung"),
    getItem("Thêm người dùng", "them-nguoi-dung"),
  ]),
  getItem("Phim", "sub2", <TeamOutlined />, [
    getItem("Danh sách phim", "list-phim"),
    getItem("Thêm phim", "them-phim"),
  ]),
];

const AdminTemplates = () => {
  const { user } = useSelector((state) => state.userSlice);

  const navigate = useNavigate();
  const userLocal = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!userLocal) {
      message.warning("Vui lòng đăng nhập trước khi vào trang admin");
      navigate("/log-in");
    }
  }, [navigate, userLocal]);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          onSelect={({ item, key, keyPath, selectedKeys, domEvent }) => {
            // console.log(key);
            //todo : check key nhận được giá trị là list-phim
            if (key) {
              navigate(`/admin/${key}`);
            }
          }}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="headerTab">
        <Header
          style={{
            background: colorBgContainer,
            lineHeight: "30px",
            height: "60px",
            paddingTop: "10px"
          }}
        >
          <div className="text-right ">
            <span className="mr-3">{user.hoTen}</span>
            <button
              onClick={() => {
                localStorage.removeItem("user");
                navigate("/");
              }}
              className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-red-600 duration-500"
            >
              Đăng xuất
            </button>
          </div>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Trang quản trị
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminTemplates;
