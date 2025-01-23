import React from 'react';
import { easeIn, easeOut, motion } from 'framer-motion';
import CircularCard from './CircularCard';

const Achievements = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
        ease: easeOut,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
      }
    }
  };

  return (
    <div className='min-h-screen'>
      <motion.h1 
        initial="hidden"
        animate="visible"
        variants={headingVariants}
        className="text-center mx-auto text-5xl font-mono py-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-red-300 "
      >
        GSoC Contributors
      </motion.h1>
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={gridVariants}
        className="grid grid-cols-6 px-3 gap-12 justify-center"
      >
        <div></div>
        <motion.div variants={cardVariants}>
          <CircularCard 
            image='https://i.ibb.co/jJyjcvZ/Kshitij-Shah-photoaidcom-cropped.png' 
            name='Kshitij Shah' 
            organization='Sugarlabs' 
            link="https://github.com/kshitijdshah99/Pippy_Activity" 
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <CircularCard 
            image='https://i.ibb.co/Z6fgX5F/IMG-20231110-003535-01-01-photoaidcom-cropped.png' 
            name='Vedant Mehra' 
            organization='CERN' 
            link="https://hepsoftwarefoundation.org/gsoc/blogs/2024/blog_SOFIE_VedantMehra.html" 
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <CircularCard 
            image='https://i.ibb.co/Sm9FtJ2/1714656497995-photoaidcom-cropped.png' 
            name='Mayank Palan' 
            organization='Red Hen Lab' 
            link="https://medium.com/@mayankpalan066/gsoc24-with-red-hen-lab-modeling-wayfinding-cfb0131b71d1" 
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <CircularCard 
            image='https://i.ibb.co/C640S72/Scanned-20240502-1627-1-page-0001-photoaidcom-cropped.png' 
            name='Sharan Poojari' 
            organization='NumFOCUS' 
            link="https://github.com/aiidateam/aiida-explorer/blob/gsoc/gsoc/README.md" 
          />
        </motion.div>
        <div></div>
      </motion.div>
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={gridVariants}
        className="grid grid-cols-7 px-6 justify-center gap-12"
      >
        <div></div>
        <div></div>
        <motion.div variants={cardVariants}>
          <CircularCard 
            image='https://i.ibb.co/T4D9vMh/IMG-20240502-172654-photoaidcom-cropped.png' 
            name='Warren Jacinto' 
            organization='Open Astronomy' 
            link="https://deadspheroid.github.io/my-blog/" 
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <CircularCard 
            image='https://i.ibb.co/t3vy9D9/IMG-20240502-WA0043-2-photoaidcom-cropped.png' 
            name='Tvisha Vedant' 
            organization='INCF' 
            link="https://tvilight4.github.io/MyBlog/" 
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <CircularCard 
            image='https://i.ibb.co/9WSz3ss/photo-photoaidcom-cropped.png' 
            name='Raya Chakravarty' 
            organization='INCF' 
            link="https://raya679.github.io/gsoc/" 
          />
        </motion.div>
        <div></div>
        <div></div>
      </motion.div>
    </div>
  );
}

export default Achievements;