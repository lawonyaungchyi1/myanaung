import styled from "styled-components";
import { glaxyFold, iphoneXr, surfaceDuo } from "../Responsive/responsive";
import { oxygenImage } from "../../Data/Images";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  width: 50%;
  margin: 0 auto;
  height: 100%;
  background: url(${oxygenImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  overflow: hidden;
  ${iphoneXr({ width: "100%" })}
  ${surfaceDuo({ width: "100%" })}
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: bolder;
  color: #ff7b00;
  text-align: center;
  user-select: none;
  overflow-wrap: break-word;
  width: 100%;
  ${iphoneXr({ fontSize: "14px" })}
`;

export const CloseContainer = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10%;
  right: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #ff9500;
  ${iphoneXr({ top: "2%" })}
`;

export const PhoneContainer = styled.div`
  width: 100%;
  border: 3px solid #ffb700;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`;

export const Phone = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  height: 30px;
  margin: 10px;
  user-select: none;
  ${iphoneXr({ width: "100%" })}
  ${glaxyFold({ flexDirection: "column" })}
`;

export const Name = styled.div`
  flex: 1;
  font-size: 18px;
  color: #ff7b00;
  ${iphoneXr({ fontSize: "10px", display: "flex", justifyContent: "center" })}
  ${surfaceDuo({
    fontSize: "10px",
    display: "flex",
    justifyContent: "flex-start",
    flex: "1",
    width: "200px",
    backgroundColor: "red",
  })}
`;

export const Number = styled.div`
  flex: 1;
  font-size: 18px;
  color: #ff7b00;
  ${iphoneXr({ fontSize: "10px" })}
`;
