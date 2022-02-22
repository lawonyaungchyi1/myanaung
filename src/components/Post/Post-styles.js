import styled from "styled-components";
import { iphoneXr } from "./../Responsive/responsive";

export const Container = styled.div`
  width: 80%;
  margin: 10px auto;
  background-color: #ffcb69;
  border-radius: 6px;
  ${iphoneXr({ width: "96%" })}
`;

export const UserInfoDiv = styled.div`
  display: flex;
  padding: 10px;
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameAndDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

export const DeleteContainer = styled.div`
  position: absolute;
  right: 10%;
  top: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Name = styled.div`
  font-size: 16px;
  ${iphoneXr({ fontSize: "10px" })}
`;

export const Date = styled.div`
  font-size: 12px;
  ${iphoneXr({ fontSize: "8px" })}
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  ${iphoneXr({ width: "35px", height: "35px" })}
`;

export const PostBody = styled.div``;

export const LineBreak = styled.hr`
  background-color: #ffc300;
  height: 2px;
  width: 90%;
  margin: 0 auto;
`;

export const DescContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  min-height: 50px;
  padding: 10px;
  ${iphoneXr({ minHeight: "30px", width: "100%" })}
`;

export const PostImageContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 auto;
  display: ${({ image }) => (!image ? "none" : "flex")};
  justify-content: center;
  align-items: center;
`;

export const PostImage = styled.img`
  width: 80%;
  height: 90%;
  object-fit: cover;
  margin: 0 auto;
  ${iphoneXr({ width: "94%" })}
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 40px;
`;

export const LikeContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffb700;
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
  color: white;
  user-select: none;
  ${iphoneXr({ fontSize: "10px" })}
`;

export const HeartContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffb700;
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
  color: white;
  ${iphoneXr({ fontSize: "10px" })}
`;

export const CountNumberContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

export const Count = styled.div`
  ${iphoneXr({ fontSize: "10px" })}
`;

export const CommentCountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;
export const CommentCount = styled.span`
  ${iphoneXr({ fontSize: "10px" })}
`;

export const Text = styled.div`
  margin-left: 6px;
`;

export const CommentContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffb700;
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
  color: white;
  ${iphoneXr({ fontSize: "10px" })}
`;
