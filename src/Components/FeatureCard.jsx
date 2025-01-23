import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import { motion, easeInOut } from "framer-motion";

const FeatureCard = ({
  title,
  tag,
  info,
  buttontext,
  style,
  tagStyle,
  page,
}) => {
  const handleButtonClick = () => {
    window.open(page, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 2,
        type: "spring",
        stiffness: 150,
        damping: 15,
      },
    },
  };

  const taglineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: easeInOut,
      },
    },
  };

  const infoVariants = {
    hidden: { opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: easeInOut,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="w-10/12 mx-auto border-2 backdrop-blur-sm shadow-gradient border-gray-700 p-3 flex flex-col bg-clip-border rounded-xl shadow-md overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={titleVariants} className="w-full mb-3">
        <h3 className={`text-3xl font-semibold ${tagStyle} bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-purple-400 duration-1000 ease-in-out`}>
          {title}
        </h3>
      </motion.div>

      <motion.div variants={taglineVariants} className="mb-1">
        <p className={`text-[0.8rem] text-gray-100 ${tagStyle}`}>{tag}</p>
      </motion.div>

      <motion.div variants={infoVariants} className="mb-[4rem] md:h-[100px]">
        <p className="text-[1.1rem] text-gray-300">{info}</p>
      </motion.div>

      <motion.div variants={buttonVariants}>
        <button
          className={`mx-auto relative bg-gradient-to-br px-5 from-blue-800 via-blue-600 to-blue-800 inline-flex items-center justify-center p-0.5 mb-3 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-white dark:bg-gray-900`}
          onClick={handleButtonClick}
        >
          <span className="relative text-white px-3 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
            {buttontext}
          </span>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;