import React from 'react';
import { Link } from 'react-router-dom';
import { easeIn, easeInOut, motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
      ease: easeInOut,
      duration: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeInOut
    },
  },
};

const CardRow = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="relative h-[91.5vh] w-full bg-transparent"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="flex flex-row w-full h-[90vh] items-stretch">
          <motion.div className="w-1/2 m-6 flex justify-center items-center p-4">
            <Card title="Upcoming Project 2k24" link="/upcoming-projects" />
          </motion.div>
          <motion.div className="w-1/2 m-6 flex justify-center items-center p-4">
            <Card title="Past Projects" link="/past-projects" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Card = ({ title, link }) => {
  return (
      <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="rounded-lg backdrop-blur-sm overflow-hidden w-full h-full flex flex-col justify-between shadow-gradient border border-gray-700"
    >
      <motion.div className="bg-glass p-5">
        <motion.h5
          variants={textVariants}
          className="text-center my-8 font-bold text-3xl font-mono tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-blue-400 to-purple-300"
        >
          {title}
        </motion.h5>
        <motion.p variants={textVariants} className="text-gray-300 pt-3 font-mono">
          Press on The Read More Button to know more!!!
        </motion.p>
      </motion.div>
      <motion.div variants={textVariants} className="w-full">
        <Link
          to={link}
          className="block text-center text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-b-lg text-sm px-5 py-3"
        >
          Read more
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default CardRow;
