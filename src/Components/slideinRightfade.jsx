// SlideInFromRight.js
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const SlideInFromRight = ({ children, duration = 0.7 }) => {
  const controls = useAnimation();

  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  };

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('slide-right');
      if (isInViewport(el)) {
        controls.start({ opacity: 1, x: 0, transition: { duration } });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls, duration]);

  return (
    <motion.div
      id="slide-right"
      initial={{ opacity: 0, x: 100 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default SlideInFromRight;
