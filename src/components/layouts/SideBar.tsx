import { Link } from 'react-router-dom';
import { SidebarItem } from '../SideBarItem';
import '../../styles/sidebar.css'
import { Divider } from 'antd'
import { CloseOutlined } from "@ant-design/icons"


export function Sidebar(props: {
  isOpen: boolean,
  setIsOpen: Function
}) {

  const generalMenus = [
    { name: "홈", path: "/travel/main" },

  ];



  const getMenus = () => {
    return generalMenus
  }


  const closeMenu = () => {
    props.setIsOpen(false)

  }


  if (!props.isOpen) {
    return <></>
  }
  return (
    <div className="sidebar">
      <CloseOutlined onClick={closeMenu} style={{
        marginLeft: 'auto',
        marginBottom: "16px",
        fontSize: "24px "
      }} />
      <div>

        <div style={{ color: "#F7931E" }}>
          홈 이름
        </div>

      </div>
      <Divider style={{ margin: "2px", marginBottom: "16px", marginTop: "16px" }}></Divider>
      <div style={{
        marginRight: 'auto',
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        textAlign: 'start',
        flex: 1
      }}>
        {getMenus().map((menu, index) => {
          return (
            <Link
              to={menu.path} key={index}
              style={{ textDecoration: "none" }}>
              <div onClick={closeMenu}>
                <SidebarItem
                  menu={menu}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

