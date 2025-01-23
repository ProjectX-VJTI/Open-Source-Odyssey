import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, 
        delayChildren: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative bg-transparent min-h-screen w-full flex items-center justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center"
      >
        <motion.h1
          variants={textVariants}
          className="text-[10rem] leading-none font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
        >
          ProjectX
        </motion.h1>

        <motion.p
          variants={textVariants}
          className="text-5xl leading-relaxed font-mono tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mt-5"
        >
          Innovating the future
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Hero;
