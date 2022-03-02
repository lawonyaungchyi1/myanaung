import styled from "styled-components";

export const ToTopButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;
export const ToTopButton = styled.button`
  background-color: #ff8800;
  cursor: pointer;
  outline: none;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
`;

export const expandLessZIndex = {
  zIndex: 1000,
};
