import styled from "styled-components";
import {
  iphoneXr,
  surfacePro7,
  glaxyFold,
  surfaceDuo,
} from "../Responsive/responsive";
import { popUp } from "./ModalOverlay-keyframe";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff8800;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
  scrollbar-width: thin;
  scrollbar-color: #ff8800 white;
  justify-content: ${({ first, second }) =>
    first || second ? "flex-start" : "center"};
  margin-top: ${({ first, second }) => (first || second ? "10px" : "0px")};
  align-items: center;
  ${surfacePro7({ width: "100%", height: "100%" })};
  ${iphoneXr({ width: "100%", height: "100%" })}
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bolder;
  color: #ffa200;
  margin-bottom: 6%;
  user-select: none;
  display: ${({ first, second }) => (first || second ? "none" : "block")};
  ${iphoneXr({ fontSize: "20px", marginBottom: "14%" })}
  ${glaxyFold({ fontSize: "12px" })}
  ${surfaceDuo({ fontSize: "16px" })}
`;

export const CloseContainer = styled.button`
  color: #ff9500;
  position: absolute;
  top: 5%;
  right: 2%;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  ${iphoneXr({ top: "2%" })}
`;

export const ButtonContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${iphoneXr({ width: "100%" })}
`;

export const HelpFirst = styled.button`
  height: 50px;
  border-radius: 20px;
  font-size: 16px;
  padding: 10px;
  background-color: ${({ first }) => (first ? "#ffd000" : "#ff7b00")};
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  ${iphoneXr({ fontSize: "10px" })}
  ${glaxyFold({ fontSize: "8px", height: "30px", padding: "10px" })}
  ${surfaceDuo({ fontSize: "12px", height: "50px", padding: "20px" })}
`;

export const HelpSecond = styled.button`
  height: 50px;
  border-radius: 20px;
  font-size: 16px;
  padding: 10px;
  background-color: ${({ second }) => (second ? "#ffd000" : "#ff7b00")};
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  ${iphoneXr({ fontSize: "10px" })}
  ${glaxyFold({ fontSize: "8px", height: "30px", padding: "10px" })}
  ${surfaceDuo({ fontSize: "12px", height: "50px", padding: "10px" })}
`;

export const First = styled.div`
  width: 60%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${iphoneXr({ width: "100%" })};
  animation: ${popUp} 0.5s ease-in-out;
`;

export const Warning = styled.div`
  font-size: 18px;
  color: #ff8800;
  ${iphoneXr({ fontSize: "12px" })}
  ${surfacePro7({ fontSize: "18px" })}
  ${glaxyFold({ fontSize: "10px" })}
  ${surfaceDuo({ fontSize: "14px" })}
`;

export const InputContainer = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  ${iphoneXr({ width: "100%" })}
  ${surfacePro7({ width: "100%" })}
  ${surfaceDuo({ width: "100%" })}
`;

export const InputLabel = styled.div`
  font-size: 12px;
  ${glaxyFold({ fontSize: "8px" })}
`;

export const Input = styled.input`
  flex: 1;
  background-color: transparent;
  border: 3px solid #ff9500;
  border-radius: 6px;
  height: 50px;
  &:focus {
    border: 3px solid #ffb700;
    outline: none;
  }
  ${iphoneXr({ height: "50px" })}
  ${surfacePro7({ height: "50px" })}
  ${glaxyFold({ width: "100%", height: "30px" })}
  ${surfaceDuo({ width: "100%", height: "40px" })}
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: #ff8800;
  border: none;
  outline: none;
  border-radius: 6px;
  height: 40px;
  margin-top: 20px;
  cursor: pointer;
  user-select: none;
  color: white;
  ${iphoneXr({ fontSize: "12px" })}
  ${surfacePro7({ width: "100px" })}
  ${glaxyFold({ fontSize: "10px" })}
`;

export const Text = styled.div`
  ${iphoneXr({ fontSize: "10px" })}
  ${glaxyFold({ fontSize: "8px" })}
  ${surfaceDuo({ fontSize: "10px" })}
`;

export const InputPhone = styled.div`
  height: 110px;
  display: flex;
  flex-direction: column;
  width: 100%;
  ${iphoneXr({ width: "100%" })}
  ${surfacePro7({ width: "100%" })}
  ${surfaceDuo({ width: "100%" })}
`;

export const Second = styled.div`
  animation: ${popUp} 0.5s ease-in-out;
`;

export const TitleSecond = styled.div`
  margin-top: 20%;
  font-size: 18px;
  font-weight: bold;
  color: #ffa200;
  user-select: none;
  ${iphoneXr({ fontSize: "12px" })}
`;

export const Error = styled.h6`
  font-size: 10px;
  width: 100%;
  height: 10px;
  color: #ee4266;
`;
