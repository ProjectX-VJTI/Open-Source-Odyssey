import React from "react";
import { motion } from "framer-motion";

const bounceVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
  exit: { opacity: 0, y: -100 },
};

const BouncePageWrapper = ({ children }) => {
  return (
    <motion.div
      variants={bounceVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default BouncePageWrapper;
