import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
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
          className="text-[10rem] text-bounce leading-none font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
        >
          ProjectX
        </motion.h1>

        <motion.p
          variants={textVariants}
          className="text-5xl text-bounce leading-relaxed font-mono tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mt-5"
        >
          Innovating the future
        </motion.p>
      </motion.div>
      <svg
          className="absolute bottom-0 left-0 right-0 z-10 opacity-100"
          viewBox="0 0 1440 320"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)' }}
      >
          <use href="src/assets/wordcloud.svg" />
      </svg>
    </div>
  );
};

export default Hero;
