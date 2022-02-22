import styled from "styled-components";
import { iphoneXr, surfaceDuo, surfacePro7 } from "./../Responsive/responsive";

export const Container = styled.div`
  width: 28%;
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
  ${iphoneXr({ display: "none" })}
  ${surfacePro7({ display: "none" })}
  ${surfaceDuo({ display: "none" })}
`;

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 100%;
`;

export const TextContainer = styled.div``;

export const VideoContainer = styled.div`
  width: 90%;
  height: 260px;
  margin: 0 auto;
`;
export const Video = styled.iframe`
  width: 100%;
  height: 260px;
  overflow: hidden;
  border: none;
  outline: none;
`;
