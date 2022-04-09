import { Button, Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import "./Navbar.css";
import { MdOutlineDashboard } from "react-icons/md";
import { TiDeviceDesktop } from "react-icons/ti";
import { RiCustomerService2Line } from "react-icons/ri";
import { BiAlignJustify } from "react-icons/bi";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

const MenuList = [
  {
    title: "Dashboard",
    icon: <MdOutlineDashboard />,
    link: "dashboard",
  },
  {
    title: "Thiết bị",
    icon: <TiDeviceDesktop />,
    link: "device",
  },
  {
    title: "Dịch vụ",
    icon: <RiCustomerService2Line />,
    link: "service",
  },
  {
    title: "Cấp số",
    icon: <BiAlignJustify />,
    link: "providenumber",
  },
  {
    title: "Báo cáo",
    icon: <AiOutlineFileText />,
    link: "report",
  },
  {
    title: "Cài đặt hệ thống",
    icon: <AiOutlineSetting />,
    link: "setting",
  },
];

function Navbar() {
  return (
    <div style={{ background: "#fff" }}>
      <Sider className="navbar">
        <span className="navbar_img"></span>
        <Menu
          defaultSelectedKeys={["Dashboard"]}
          mode="inline"
          className="navbar_list"
        >
          {MenuList.map((menu, index) => (
            <Menu.Item className="navbar_item" icon={menu.icon} key={index}>
              {menu.title}
            </Menu.Item>
          ))}
        </Menu>
        <Button className="navbar_logout">
          <FiLogOut />
          <span>Đăng xuất</span>
        </Button>
      </Sider>
    </div>
  );
}

export default Navbar;
