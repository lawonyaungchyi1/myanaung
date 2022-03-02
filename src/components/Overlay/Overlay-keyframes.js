export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 2,
    },
  },
};

export const linkVariants = {
  hidden: {
    y: -30,
    opacity: 0.2,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.7,
    },
  },
};
