import styled from "styled-components";
import {
  surfacePro7,
  iphoneXr,
} from "./../../components/Responsive/responsive";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  margin-top: 8%;
  height: 80vh;
  ${iphoneXr({ height: "100%" })}
  ${surfacePro7({ height: "100%" })}
`;
