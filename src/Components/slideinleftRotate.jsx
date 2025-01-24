import React from "react";
import { motion } from "framer-motion";

const slideRotateVariants = {
  initial: { opacity: 0, x: -100, rotate: -10 },
  animate: { opacity: 1, x: 0, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 25 } },
  exit: { opacity: 0, x: 100, rotate: 10 },
};

const SlideRotatePageWrapper = ({ children }) => {
  return (
    <motion.div
      variants={slideRotateVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideRotatePageWrapper;
