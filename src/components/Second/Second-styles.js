import styled from "styled-components";
import {
  glaxyFold,
  iphoneXr,
  surfaceDuo,
  surfacePro7,
} from "./../Responsive/responsive";
import { motion } from "framer-motion";

export const Container = styled.div`
  height: 100vh;
  width: 90vw;
  margin: 0 auto;
  background-color: #f3e4d5;
  display: flex;
  border-radius: 20px;
  ${iphoneXr({
    flexDirection: "column",
    marginTop: "30%",
  })};
  ${surfacePro7({
    height: "50vh",
  })}
  ${surfaceDuo({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
  })}
`;
export const TextContainer = styled(motion.div)`
  flex: 1;
  position: relative;
  ${surfaceDuo({
    height: "50%",
  })}
`;

export const TextMain = styled.span`
  position: absolute;
  top: 40%;
  font-size: 34px;
  padding: 20px;
  color: #ffb300;
  font-weight: bolder;
  ${iphoneXr({ fontSize: "20px" })};
  ${glaxyFold({ fontSize: "16px", display: "block" })}
  ${surfacePro7({ fontSize: "22px" })}
  ${surfaceDuo({ fontSize: "16px", top: "10%" })}
`;

export const TextSub = styled.div`
  width: 70%;
  position: absolute;
  top: 54%;
  right: 0;
  font-weight: bold;
  ${iphoneXr({ fontSize: "10px", width: "94%", top: "60%" })};
  ${surfacePro7({ fontSize: "14px", width: "88%" })}
  ${surfaceDuo({ fontSize: "12px", width: "88%", top: "40%" })}
`;

export const Button = styled.button`
  font-weight: 600;
  width: 106px;
  background-color: #ffcc00;
  position: absolute;
  bottom: 25%;
  right: 10%;
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #ffaa00;
  }
  ${iphoneXr({ bottom: "10%", fontSize: "10px" })};
  ${surfacePro7({ bottom: "7%", fontSize: "14px" })}
  ${surfaceDuo({ bottom: "20%", fontSize: "12px" })}
`;

export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DonationLogo = styled(motion.img)`
  ${iphoneXr({ width: "100%" })};
  ${surfacePro7({ flex: "1", width: "50%" })}
  ${surfaceDuo({ width: "100%" })}
`;
