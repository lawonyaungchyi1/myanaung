import styled from "styled-components";
import {
  iphoneXr,
  surfacePro7,
  surfaceDuo,
  glaxyFold,
} from "../Responsive/responsive";
import {
  moveToLeft,
  upTitle,
  moveParaRight,
  moveParaLeft,
  openCommaRotate,
  closeCommaRotate,
} from "./First-keyframe";

export const Container = styled.div`
  width: 90%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
  margin-bottom: 150px;
  ${glaxyFold({ height: "100%" })}
  ${iphoneXr({ display: "flex", flexDirection: "column", marginTop: "20%" })}
  ${surfacePro7({
    height: "50vh",
    width: "90%",
  })}
  ${surfaceDuo({
    display: "flex",
    flexDirection: "column",
    marginTop: "10%",
    width: "100vw",
    height: "100vh",
  })}
`;
export const PoemContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  ${surfacePro7({ width: "100%" })}
  ${surfaceDuo({ width: "100%" })}
`;

export const Poem = styled.div`
  ${iphoneXr({ display: "flex", flexDirection: "column", width: "100%" })}
  ${surfaceDuo({
    display: "flex",
    flexDirection: "column",
    width: "100%",
  })}
`;

export const OpenComma = styled.img`
  position: absolute;
  left: -44%;
  top: -44%;
  animation: ${openCommaRotate} 0.5s ease-in;
  ${iphoneXr({
    width: "50px",
    left: "-14%",
    top: "-14%",
    position: "absolute",
  })};
  ${surfacePro7({
    width: "38px",
    left: "-14%",
    top: "-10%",
    position: "absolute",
  })}
  ${surfaceDuo({
    position: "absolute",
    width: "32px",
    left: "22%",
    top: "-6%",
  })}
`;
export const CloseComma = styled.img`
  position: absolute;
  right: -45%;
  bottom: 0;
  animation: ${closeCommaRotate} 0.5s ease-in;
  ${iphoneXr({
    position: "absolute",
    width: "50px",
    right: "0",
    bottom: "10%",
  })};
  ${glaxyFold({
    position: "absolute",
    width: "50px",
    right: "-10%",
    bottom: "10%",
  })}
  ${surfacePro7({
    position: "absolute",
    width: "32px",
    right: "-12%",
    bottom: "12%",
  })}
  ${surfaceDuo({
    width: "26px",
    right: "24%",
    bottom: "14%",
  })}
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #ffb300;
  text-align: center;
  animation: ${upTitle} 0.5s ease-in-out;
  ${iphoneXr({ fontSize: "24px", display: "block" })};
  ${glaxyFold({ fontSize: "16px", display: "block" })}
  ${surfacePro7({ fontSize: "26px", display: "block" })}
  ${surfaceDuo({ fontSize: "20px", display: "block" })}
`;

export const Body = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-evenly;
  line-height: 40px;
  ${iphoneXr({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  })};
  ${surfaceDuo({
    width: "100%",
    display: "flex",
    flexDirection: "column",
  })}
`;

export const Left = styled.div`
  position: relative;
  font-size: 14px;
  animation: ${moveParaRight} 0.5s ease-in-out;
  ${iphoneXr({
    display: "block",
    width: "84%",
  })}
  ${glaxyFold({ fontSize: "12px", display: "block" })}
  ${surfaceDuo({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })}
`;

export const Right = styled.div`
  position: relative;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${moveParaLeft} 0.5s ease-in-out;
  ${iphoneXr({ display: "block", width: "84%" })}
  ${glaxyFold({ fontSize: "12px", display: "block" })}
  ${surfaceDuo({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })}
`;

export const Img = styled.img`
  width: 400px;
  animation: ${moveToLeft} 1s ease-in-out;
  ${iphoneXr({ width: "100%" })};
  ${surfacePro7({ width: "100%" })}
  ${surfaceDuo({ width: "50%" })}
`;

export const PersonContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${surfacePro7({ width: "20%" })}
  ${surfaceDuo({ width: "100%" })}
`;
