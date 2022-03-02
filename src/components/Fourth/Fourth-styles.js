import { motion } from "framer-motion";
import styled from "styled-components";
import { iphoneXr, surfacePro7, surfaceDuo } from "../Responsive/responsive";

export const Container = styled.div`
  background-color: #f3e4d5;
  width: 90%;
  margin: 0 auto;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled(motion.div)``;

export const Title = styled.h3`
  font-size: 40px;
  padding: 20px;
  color: #ffcc00;
  ${iphoneXr({ fontSize: "14px" })}
  ${surfacePro7({ fontSize: "24px" })}
  ${surfaceDuo({ fontSize: "22px" })}
`;

export const SliderContainer = styled(motion.div)`
  border-radius: 30px;
  margin: 0 auto;
  padding-bottom: 20px;
`;
