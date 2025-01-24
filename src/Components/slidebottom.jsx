import React from "react";
import { motion } from "framer-motion";

const slideBottomVariants = {
  initial: { opacity: 0, y: 200 },
  animate: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 25 } },
  exit: { opacity: 0, y: 200 },
};

const SlideBottomPageWrapper = ({ children }) => {
  return (
    <motion.div
      variants={slideBottomVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideBottomPageWrapper;
