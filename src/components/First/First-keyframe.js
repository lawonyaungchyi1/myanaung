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
