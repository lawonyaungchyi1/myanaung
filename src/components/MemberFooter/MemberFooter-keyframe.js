import { keyframes } from "styled-components";

export const moveToRight = keyframes`
0% {
    width: 0;
} 
`;

export const moveToTop = keyframes`
0% {
   transform: translateY(200px);
   opacity: 0;
   height: 0;
}
25% {
    height: 0;
}
50% {
    height: 90px;
    opacity: 0.5;
}`;

export const moveToBottom = keyframes`
    0% {
   transform: translateY(-40px);
   opacity: 0;
   display: none;
}
25% {
    height: 0;
    opacity: 0;
}
50% {
    height: 20px;
    opacity: 0.5;
}`;

export const stretchWidth = keyframes`
0% {
    width: 100px;
}
50% {
    width: 240px;
}`;
