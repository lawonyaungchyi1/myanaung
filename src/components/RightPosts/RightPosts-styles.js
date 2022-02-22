import styled from "styled-components";
import { iphoneXr, surfaceDuo, surfacePro7 } from "./../Responsive/responsive";

export const Container = styled.div`
  width: 30%;
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

export const AwardContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Covid19Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;
