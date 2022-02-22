import styled from "styled-components";
import { glaxyFold, iphoneXr } from "../../components/Responsive/responsive";

export const FirstSection = styled.section`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  user-select: none;
  ${iphoneXr({ marginTop: "70px" })}
`;

export const Logo = styled.img``;

export const Title = styled.h3`
  font-size: 30px;
  font-family: "Redressed", cursive;
  color: #ff9e00;
  ${glaxyFold({ fontSize: "20px" })}
`;

export const SecondSection = styled.section``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const FormGroup = styled.div`
  width: 50%;
  height: 80px;
  ${iphoneXr({ width: "90%" })}
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  border: 3px solid #2e84a9;
  outline: none;
  color: black;
  box-shadow: 0 0 2px 4px #2e84a9;
  padding: 5px;
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 20px;
  min-width: 50%;
  background-color: #ffd725;
  outline: none;
  padding: 4px;
  border-radius: 2px;
  cursor: pointer;
  color: #a74a2b;
  height: 40px;
  border: none;
  font-family: "Source Code Pro", monospace;
  font-size: 18px;
  box-shadow: 0 0 3px 4px #ffd725;
`;

export const Error = styled.h6`
  font-size: 10px;
  width: 100%;
  height: 10px;
  color: #ee4266;
`;
