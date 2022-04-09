import { Avatar } from "antd";
import { Content } from "antd/lib/layout/layout";
import { AiOutlineBell } from "react-icons/ai";
import { BsCamera } from "react-icons/bs";
import "./Home.css";

function Home() {
  return (
    <div>
      <Content className="home">
        <span className="home-directional">Thông tin cá nhân</span>
        <div className="home-content">
          <Avatar className="home-content_avatar" />
          <BsCamera className="home-content_camera" />
          <span className="home-content_name">Nguyễn Ngọc Bảo Chung</span>
          <span className="home-content_uername-title">Tên người dùng</span>
          <span className="home-content_uername-background">
            <p className="home-content_uername-content">
              Nguyễn Ngọc Bảo Chung
            </p>
          </span>
          <span className="home-content_namelogin-title">Tên đăng nhập</span>
          <span className="home-content_namelogin-background">
            <p className="home-content_namelogin-content">
              nguyenngocbaochung01
            </p>
          </span>
          <span className="home-content_phonenumber-title">Số điện thoại</span>
          <span className="home-content_phonenumber-background">
            <p className="home-content_phonenumber-content">0767375921</p>
          </span>
          <span className="home-content_password-title">Mật khẩu</span>
          <span className="home-content_password-background">
            <p className="home-content_password-content">311940211</p>
          </span>
          <span className="home-content_email-title">Email:</span>
          <span className="home-content_email-background">
            <p className="home-content_email-content">adminSSO1@domain.com</p>
          </span>
          <span className="home-content_role-title">Vai trò:</span>
          <span className="home-content_role-background">
            <p className="home-content_role-content">Lập trình viên</p>
          </span>
        </div>
      </Content>
    </div>
  );
}

export default Home;
