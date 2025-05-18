import { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

export const slideUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: (custom = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: custom * 0.1
    }
  })
};

export const slideIn: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: { 
    x: 0,
    opacity: 1,
    transition: { 
      duration: 0.5
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const scaleUp: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};