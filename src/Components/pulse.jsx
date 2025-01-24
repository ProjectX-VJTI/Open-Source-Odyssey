import React from "react";
import { motion } from "framer-motion";

const pulseVariants = {
  initial: { opacity: 0, scale: 0.6 },
  animate: { opacity: 1, scale: 1.1, transition: { duration: 0.6, yoyo: Infinity, repeatDelay: 0.2 } },
  exit: { opacity: 0, scale: 0.6 },
};

const PulsePageWrapper = ({ children }) => {
  return (
    <motion.div
      variants={pulseVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default PulsePageWrapper;
