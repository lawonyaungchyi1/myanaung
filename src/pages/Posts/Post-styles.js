import styled from "styled-components";
import {
  surfacePro7,
  iphoneXr,
} from "./../../components/Responsive/responsive";

export const Container = styled.div`
  display: flex;
  margin-top: 8%;
  height: 80vh;
  ${iphoneXr({ height: "100%" })}
  ${surfacePro7({ height: "100%" })}
`;
