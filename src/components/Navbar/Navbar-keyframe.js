import { keyframes } from "styled-components";

// NavBar Animation

export const smallToLarge = keyframes`
0% {
  transform: scale(0);
}
100% {
  transform: scale(1);
}`;

export const topToBottom = keyframes`
    0% {
    transform: translateY(-100px);
    }
`;

export const opacityOfLink = keyframes`
50% {
    opacity: 0.5;
}
`;
