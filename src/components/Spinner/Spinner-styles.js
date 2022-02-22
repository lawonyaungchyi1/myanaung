import styled from "styled-components";
import { spin } from "./Spinner-keyframes";
export const LoadingSpinnerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoadingSpinner = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 8px solid;
  border-color: #a74a2b transparent #2e84a9 transparent;
  animation: ${spin} 1.2s linear infinite;
`;
