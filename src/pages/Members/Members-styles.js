import styled from "styled-components";
import {
  glaxyFold,
  iphoneXr,
  surfacePro7,
  surfaceDuo,
} from "../../components/Responsive/responsive";
import { stretchWidth } from "./Members-keyframe";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  margin-top: 8%;
  ${iphoneXr({ marginTop: "18%" })}
`;

export const Title = styled.div`
  font-size: 28px;
  color: #ff8800;
  font-weight: bolder;
  padding: 10px;
  text-align: center;
  ${iphoneXr({ fontSize: "18px" })}
  ${glaxyFold({ fontSize: "14px" })}
  ${surfacePro7({ fontSize: "20px" })}
  ${surfaceDuo({ fontSize: "18px" })}
`;

export const MemberContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${iphoneXr({ width: "100%" })}
  ${surfacePro7({ width: "100%" })}
`;

export const MemberCard = styled.div`
  width: 30%;
  height: 400px;
  border: 4px solid #ffa200;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  margin: 6px;
  color: #ff9500;
  &:hover {
    background-color: #ff8800;
    color: white;
  }
  ${iphoneXr({ height: "180px", width: "48%", margin: "10px auto" })}
  ${surfacePro7({ height: "360px", width: "32%", margin: "10px auto" })}
  ${surfaceDuo({ height: "360px", width: "48%", margin: "10px auto" })}
`;

export const MemberImage = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 50%;
  object-fit: cover;
  ${iphoneXr({ padding: "10px" })}
  ${glaxyFold({ borderRadius: "20px" })}
  ${surfacePro7({ borderRadius: "10px" })}
  ${surfaceDuo({ borderRadius: "10px" })}
`;

export const MemberName = styled.div`
  font-size: 20px;
  font-weight: bold;
  ${iphoneXr({ fontSize: "12px" })}
  ${glaxyFold({ fontSize: "10px" })}
  ${surfacePro7({ fontSize: "16px" })}
  ${surfaceDuo({ fontSize: "14px" })}
`;

export const MemberFbAccount = styled.a`
  color: #1976d2;
  cursor: pointer;
`;

export const MemberRank = styled.div`
  font-size: 18px;
  font-weight: bold;
  ${surfacePro7({ fontSize: "16px" })}
  ${glaxyFold({ fontSize: "10px" })}
  ${iphoneXr({ fontSize: "10px" })}
  ${surfaceDuo({ fontSize: "14px" })}
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AnimateRectangle = styled.div`
  width: 200px;
  height: 10px;
  background-color: #ff8800;
  border-radius: 10px;
  animation: ${stretchWidth} 1s ease-in;
  ${iphoneXr({ height: "5px" })}
`;
