import { motion } from "framer-motion";
import styled from "styled-components";
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
  ${iphoneXr({ width: "100vw" })};
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
  ${iphoneXr({ display: "none" })}
  ${surfaceDuo({ display: "none" })}
`;

export const Links = styled(motion.div)`
  color: #ffb300;
  display: flex;
  justify-content: center;
  justify-items: center;
  cursor: pointer;
  font-weight: 800;
  user-select: none;
`;

export const LogoutContainer = styled(motion.div)`
  cursor: pointer;
  color: #ffb300;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const logoutLogoStyles = {
  fontWeight: "bold",
};
