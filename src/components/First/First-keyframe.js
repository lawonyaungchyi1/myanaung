import { keyframes } from "styled-components";

export const moveToLeft = keyframes`
    0% {
        transform: translateX(100px);
        opacity: 0.1;
    }
    25% {
        opacity: 0.25;
    }
    75% {
        transform : translateX(-20px)
    }
`;

export const upTitle = keyframes`
0% {
    transform: translateY(-10px);
    opacity: 0;
}
25% {
    opacity: 0.25;
}
`;

export const moveParaRight = keyframes`
0% {
    transform : translateX(-20px)
}`;
export const moveParaLeft = keyframes`
0% {
    transform : translateX(20px)
}`;

export const openCommaRotate = keyframes`
0% {
    transform : rotate(-360deg)
}`;

export const closeCommaRotate = keyframes`
0% {
    transform : rotate(-360deg)
}`;

export const imageVariants = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
    },
  },
};

export const commaRotateVariants = {
  hidden: {
    opacity: 0,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 1.6 },
  },
};
