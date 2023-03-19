import { Sidebar } from "./SideBar";
import { useVisibleToggle } from "../../hooks/useVisibleToggle";
import styled from "styled-components";
import { MenuOutlined } from "@ant-design/icons"
import { useEffect } from "react";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 48px;
  background-color : pink;
`

export function Header() {
  const { visible, toggleVisible } = useVisibleToggle()
  return (
    <Container>

      <MenuOutlined
        style={{ margin: "8px", fontSize: "24px " }}
        onClick={toggleVisible} />
      <Sidebar
        isOpen={visible}
        setIsOpen={toggleVisible}
      />
    </Container>
  );
}