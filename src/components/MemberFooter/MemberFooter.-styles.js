import styled from "styled-components";
import {
  glaxyFold,
  iphoneXr,
  surfaceDuo,
  surfacePro7,
} from "../Responsive/responsive";
import {
  moveToRight,
  moveToTop,
  moveToBottom,
  stretchWidth,
} from "./MemberFooter-keyframe";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: #f8efe5;
  border-radius: 10px;
  position: relative;
`;

export const Title = styled.div`
  font-size: 26px;
  text-align: center;
  color: #ff9500;
  margin-top: 40px;
  padding: 20px;
  font-weight: bolder;
  overflow-wrap: break-word;
  ${iphoneXr({ fontSize: "18px", width: "100%" })}
  ${glaxyFold({ fontSize: "12px" })}
  ${surfacePro7({ fontSize: "20px" })}
  ${surfaceDuo({ fontSize: "16px" })}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Underline = styled.div`
  width: 200px;
  height: 20px;
  background-color: #ff9500;
  border-radius: 10px;
  animation: ${stretchWidth} 1s ease-in-out;
  ${iphoneXr({ width: "40%", height: "10px" })}
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 50px;
  height: 500px;
  ${iphoneXr({ width: "100%", marginTop: "10px" })}
`;

export const Text = styled.div`
  background: white;
  width: 50%;
  padding: 10px;
  border-radius: 20px;
  color: #ff9500;
  font-size: 18px;
  overflow-wrap: break-word;
  ${iphoneXr({ width: "90%", fontSize: "12px" })}
  ${glaxyFold({ fontSize: "10px" })}
  ${surfacePro7({ fontSize: "18px" })}
  ${surfaceDuo({ fontSize: "14px" })}
`;

export const Square = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

export const SquareOne = styled.div`
  width: 200px;
  position: absolute;
  top: 0;
  height: 40px;
  background-color: #ff8800;
  border-radius: 4px;
  animation: ${moveToRight} 3s 2 ease-in-out;
`;
export const SquareTwo = styled.div`
  width: 40px;
  height: 200px;
  background-color: #ff8800;
  border-radius: 4px;
  position: absolute;
  left: 0;
  animation: ${moveToTop} 3s 2 ease-in-out 3s;
`;
export const SquareThree = styled.div`
  width: 200px;
  position: absolute;
  bottom: 0;
  height: 40px;
  background-color: #ff8800;
  border-radius: 4px;
  animation: ${moveToRight} 3s ease-in-out 2;
`;

export const SquareFour = styled.div`
  width: 40px;
  height: 200px;
  background-color: #ff8800;
  border-radius: 4px;
  position: absolute;
  right: 0;
  animation: ${moveToBottom} 3s 2 ease-in-out 6s;
`;

export const BottomContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid whitesmoke;
  ${iphoneXr({ height: "40px" })}
`;

export const TextFooter = styled.div`
  ${iphoneXr({ fontSize: "8px" })}
  ${surfaceDuo({ fontSize: "10px" })}
`;

export const NameLink = styled.a`
  font-size: 20px;
  color: #ffc300;
  margin-left: 10px;
  ${iphoneXr({ fontSize: "8px" })}
  ${surfaceDuo({ fontSize: "10px" })}
`;
