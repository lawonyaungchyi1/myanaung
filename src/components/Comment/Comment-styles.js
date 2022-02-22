import styled from "styled-components";
import { iphoneXr } from "../Responsive/responsive";

export const Container = styled.div``;

export const CommentTextAreaContainer = styled.div`
  padding: 10px;
`;

export const CommentContainer = styled.div`
  max-height: 400px;
  padding: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
  scrollbar-width: none;
`;
export const CommentInfo = styled.div`
  margin: 10px auto;
  display: flex;
  justify-content: center;
  border: 2px solid #ff8800;
  border-radius: 10px;
  position: relative;
`;
export const Right = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;
export const Left = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Photo = styled.img`
  width: 50%;
  border-radius: 50%;
`;
export const Name = styled.span`
  font-size: 14px;
  font-weight: bold;
  text-transform: capitalize;
  ${iphoneXr({ fontSize: "12px" })}
`;
export const TextOfComment = styled.span`
  font-size: 14px;
`;

export const CommentTextArea = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 70%;
  background-color: transparent;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
`;

export const PostButtonContainer = styled.div`
  height: 30%;
  display: flex;
  justify-content: flex-end;
`;

export const PostButton = styled.button`
  height: 100%;
  width: 80px;
  border: none;
  outline: none;
  border-radius: 6px;
  background-color: #ff7b00;
  cursor: pointer;
  color: #fff;
`;

export const DeleteContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;
