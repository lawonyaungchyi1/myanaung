import { keyframes } from "styled-components";

export const stretchWidth = keyframes`
0% {
    width: 100px;
}
50% {
    width: 240px;
}`;

export const memberContainerVariants = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};
