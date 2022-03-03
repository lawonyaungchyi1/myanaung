import { keyframes } from "styled-components";

export const popUp = keyframes`
0% {
    transform: translateY(-60px);
    opacity: 0;
}
50% {
    opacity: 0.5;
}`;

export const modalContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};
