import React from "react";
import { motion } from "framer-motion";

const slideUpVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -50 },
};

const SlideUpPageWrapper = ({ children }) => {
  return (
    <motion.div
      variants={slideUpVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUpPageWrapper;
