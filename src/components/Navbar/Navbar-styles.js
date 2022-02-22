import styled from "styled-components";
import { smallToLarge, topToBottom, opacityOfLink } from "./Navbar-keyframe";
import {
  iphoneXr,
  surfacePro7,
  surfaceDuo,
  glaxyFold,
} from "../Responsive/responsive";

export const Container = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  top: 0;
  z-index: 10;
  background-color: #073b4c;
  ${iphoneXr({ width: "100%" })};
  ${surfacePro7({ width: "100vw" })}
  ${surfaceDuo({ width: "100vw" })}
`;

export const LogoContainer = styled.div`
  flex: 1;
  z-index: 1;
  ${iphoneXr({
    display: "flex",
    justifyContent: "flex-start",
  })};
  ${surfaceDuo({
    display: "flex",
    justifyContent: "flex-start",
  })}
`;

export const Logo = styled.img`
  height: 100px;
  margin-left: 60px;
  animation: ${smallToLarge} 1s ease-in;
  z-index: 1;
  ${iphoneXr({ height: "50px" })};
  ${glaxyFold({ height: "30px" })};
  ${surfacePro7({ height: "45px" })}
  ${surfaceDuo({ height: "40px" })}
`;

export const LinksContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  animation: ${topToBottom} 1s ease-in;
  ${iphoneXr({ display: "none" })}
  ${surfaceDuo({ display: "none" })}
`;

export const Links = styled.div`
  color: #ffb300;
  display: flex;
  justify-content: center;
  justify-items: center;
  animation: ${opacityOfLink} 1s ease-in;
  cursor: pointer;
`;

export const LogoutContainer = styled.div`
  cursor: pointer;
  color: #ffb300;
  display: flex;
  justify-content: center;
  align-items: center;
`;
