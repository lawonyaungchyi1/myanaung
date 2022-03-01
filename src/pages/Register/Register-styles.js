import { motion } from "framer-motion";
import styled from "styled-components";
import {
  glaxyFold,
  iphoneXr,
  surfacePro7,
} from "../../components/Responsive/responsive";

export const Container = styled(motion.div)``;

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
export const LogoContainer = styled(motion.div)``;
export const Logo = styled(motion.img)``;

export const TitleContainer = styled(motion.div)``;

export const Title = styled(motion.h3)``;

export const SecondSection = styled.section``;

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 70%;
  margin: 0 auto;
  ${iphoneXr({ width: "100%" })}
  ${surfacePro7({ width: "100%" })}
`;

export const FormGroup = styled.div`
  width: 50%;
  height: 80px;
  ${iphoneXr({ width: "90%" })}
`;

export const Input = styled.input`
  width: 100%;
  /* margin-top:  */
  height: 50px;
  border-radius: 6px;
  border: 3px solid #6d597a;
  outline: none;
  color: black;
  box-shadow: 0 0 2px 4px #6d597a;
  padding: 5px;
`;

export const Button = styled(motion.button)`
  margin-top: 20px;
  width: 100%;
  background-color: #e56b6f;
  outline: none;
  padding: 4px;
  border-radius: 2px;
  cursor: pointer;
  color: #355070;
  height: 40px;
  border: none;
  font-family: "Source Code Pro", monospace;
  font-size: 18px;
  font-weight: bolder;
  box-shadow: 0 0 3px 4px #e56b6f;
`;

export const Error = styled.h6`
  font-size: 10px;
  width: 100%;
  height: 10px;
  color: #ee4266;
`;

export const DisplaySlicedTextContainer = styled.span`
  overflow: hidden;
  display: inline-block;
`;
export const DisplaySlicedText = styled(motion.span)`
  font-size: 24px;
  font-family: "Redressed", cursive;
  ${glaxyFold({ fontSize: "16px" })}
`;

export const WrapperText = styled(motion.span)`
  display: inline-block;
`;

export const LoginLinkContainer = styled.div``;

export const LoginLink = styled.span`
  text-align: center;
  font-family: "Nunito Sans", sans-serif;
  cursor: pointer;
  color: #219ebc;
  text-decoration: none;
`;
