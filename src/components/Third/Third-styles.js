import styled from "styled-components";
import { iphoneXr, surfacePro7, surfaceDuo } from "./../Responsive/responsive";

export const Container = styled.div`
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  ${iphoneXr({ display: "flex", flexDirection: "column" })};
  ${surfacePro7({ height: "50vh" })}
  ${surfaceDuo({ flexDirection: "column" })}
`;

export const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${iphoneXr({ width: "100%", height: "100%" })}
  ${surfaceDuo({ width: "100%" })}
`;
export const VolunteerLogo = styled.img`
  ${iphoneXr({ width: "100%" })};
  ${surfacePro7({ width: "50%", flex: "1" })}
  ${surfaceDuo({ width: "100%" })}
`;

export const TextContainer = styled.div`
  width: 50%;
  position: relative;
  ${iphoneXr({
    width: "100%",
    position: "relative",
    height: "50%",
  })}
  ${surfaceDuo({
    width: "100%",
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
  ${iphoneXr({ fontSize: "14px", top: "0" })};
  ${surfacePro7({ fontSize: "22px", top: "26%" })}
  ${surfaceDuo({ fontSize: "20px", top: "10%" })}
`;

export const TextSub = styled.div`
  width: 70%;
  position: absolute;
  top: 54%;
  right: 0;
  font-weight: bold;
  word-wrap: break-word;
  ${iphoneXr({ fontSize: "10px", width: "90%", top: "25%" })};
  ${surfacePro7({ fontSize: "18px", width: "90%", top: "40%" })}
  ${surfaceDuo({ fontSize: "16px", width: "90%", top: "50%" })}
`;

export const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #ffcc00;
  padding: 10px;
  border-radius: 20px;
  position: absolute;
  bottom: 25%;
  &:hover {
    background-color: #ffd000;
  }
  ${iphoneXr({ bottom: "40%", fontSize: "10px", left: "20%" })};
  ${surfacePro7({ bottom: "30%", fontSize: "14px", left: "10%" })}
  ${surfaceDuo({ bottom: "20%" })}
`;
