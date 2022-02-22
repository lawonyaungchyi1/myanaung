import React from "react";
import { HamburgerMenuContainer, MenuIcon } from "./Hamburger-styles";
import { MenuOutlined } from "@mui/icons-material";

const Hamburger = ({ handleOpen, open }) => {
  return (
    <>
      <HamburgerMenuContainer>
        <MenuIcon onClick={() => handleOpen(() => !open)}>
          <MenuOutlined />
        </MenuIcon>
      </HamburgerMenuContainer>
    </>
  );
};

export default Hamburger;
