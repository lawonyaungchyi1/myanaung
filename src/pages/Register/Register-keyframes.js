export const buttonVariants = {
  hover: {
    scale: 1.01,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};
export const titleVariants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const item = {
  hidden: {
    y: "200%",
    color: "#fff",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.1 },
  },
  visible: {
    y: 0,
    color: "#ff9e00",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.1 },
  },
};

export const logoContainerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 2.2,
      staggerChildren: 2.4,
    },
  },
};

export const logoVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
    },
  },
};

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    transition: { ease: "easeInOut" },
  },
};

export const formVariants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    transition: { ease: "easeInOut" },
  },
};
