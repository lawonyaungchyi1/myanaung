import styled from "styled-components";
import { iphoneXr } from "./../Responsive/responsive";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  overflow-wrap: break-word;
  ${iphoneXr({ fontSize: "10px" })}
`;

export const Button = styled.button`
  border: none;
  outline: none;
  color: #ff7b00;
  background-color: transparent;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
`;
