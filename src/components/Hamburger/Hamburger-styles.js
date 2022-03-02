import styled from "styled-components";
import { iphoneXr, surfaceDuo } from "../Responsive/responsive";

export const HamburgerMenuContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  ${iphoneXr({ display: "inline-block" })}
  ${surfaceDuo({ display: "inline-block" })}
`;

export const MenuIcon = styled.div`
  display: none;
  height: 100%;
  z-index: 1;
  color: white;
  ${iphoneXr({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  })}
  ${surfaceDuo({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  })}
`;

export const MenuIconStyles = {
  fontSize: "30px",
  textShadow: "0px 0px 8px 3px #fee440",
  borderRadius: "4px",
  color: "#ffbe0b",
};
