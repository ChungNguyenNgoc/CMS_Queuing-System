import { Avatar } from "antd";
import { BsFillBellFill } from "react-icons/bs";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <BsFillBellFill className="header_icon-notification" />
      <Avatar className="header_avatar" src="./db.png" />
    </div>
  );
}

export default Header;
