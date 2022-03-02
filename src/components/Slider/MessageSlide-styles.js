import styled from "styled-components";
import { iphoneXr } from "../Responsive/responsive";

export const MessageContainer = styled.div`
  height: 330px;
  background-color: #ffaa00;
  position: relative;
  border-radius: 20px;
  ${iphoneXr({ height: "200px" })}
  &:hover {
    background-color: #ffd000;
  }
`;

export const Img = styled.img`
  position: absolute;
  width: 100px;
  top: 0;
  right: 0;
  ${iphoneXr({ width: "40px" })}
`;

export const Body = styled.div`
  position: absolute;
  top: 20%;
  background-color: white;
  width: 100%;
  font-weight: bolder;
  height: 224px;
  border-radius: 20px;
  padding: 10px;
  ${iphoneXr({ fontSize: "8px", padding: "16px" })}
`;

export const Name = styled.div`
  font-weight: 600;
  ${iphoneXr({ fontSize: "8px" })}
`;

export const Rank = styled.div`
  font-weight: 600;
  ${iphoneXr({ fontSize: "8px" })}
`;

export const Footer = styled.div`
  background-color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${iphoneXr({ fontSize: "10px", height: "20px" })}
`;
