import styled from "styled-components";
import { iphoneXr, surfacePro7, surfaceDuo } from "./../Responsive/responsive";

export const Container = styled.div`
  width: 40%;
  height: 100%;
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
  ${iphoneXr({ width: "100%", height: "96vh", marginTop: "36px" })}
  ${surfacePro7({ width: "100%" })}
  ${surfaceDuo({ width: "100%", height: "100vh", marginTop: "20px" })}
`;

export const Posts = styled.div``;

export const Title = styled.h3`
  width: 100%;
  font-size: 28px;
  text-align: center;
  color: #ff9500;
  font-weight: bolder;
  ${iphoneXr({ fontSize: "16px" })}
`;

export const SyncLoaderContainer = styled.div`
  display: ${({ loading }) => (loading === "true" ? "flex" : "none")};
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const WarnTextContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WarnText = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: #ffaa00;
  ${iphoneXr({ fontSize: "16px" })}
`;
