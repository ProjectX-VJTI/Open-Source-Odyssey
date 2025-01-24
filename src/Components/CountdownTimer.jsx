import React, { useEffect, useState } from 'react';
import myHook from "./Context"
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const targetDate = new Date("2025-01-25T14:00:00"); 

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const { siteMode }=myHook()

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    
      <div className={`${siteMode === 'dark' ? 'text-white':'text-black'} max-w-4xl mx-auto text-center`}>
        
        <p className="text-xl mt-5 pb-5">
           DEBUG-A-THON starts in
           </p>
        
        <div className="flex justify-center space-x-4 md:space-x-8">
          <div className={`countdown-item border p-2 rounded-md ${siteMode === 'dark' ? 'bg-black':'bg-white'} `}>
            <motion.div 
              className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {String(timeLeft.days).padStart(2, '0')}
            </motion.div>
            <p className="text-sm md:text-base uppercase tracking-wider mt-2">Days</p>
          </div>

          <div className={`countdown-item border p-2 rounded-md ${siteMode === 'dark' ? 'bg-black':'bg-white'} `}>
            <motion.div 
              className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {String(timeLeft.hours).padStart(2, '0')}
            </motion.div>
            <p className="text-sm md:text-base uppercase tracking-wider mt-2">Hours</p>
          </div>

          <div className={`countdown-item border p-2 rounded-md ${siteMode === 'dark' ? 'bg-black':'bg-white'} `}>
            <motion.div 
              className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {String(timeLeft.minutes).padStart(2, '0')}
            </motion.div>
            <p className="text-sm md:text-base uppercase tracking-wider mt-2">Minutes</p>
          </div>

          <div className={`countdown-item border p-2 rounded-md ${siteMode === 'dark' ? 'bg-black':'bg-white'} `}>
            <motion.div 
              className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {String(timeLeft.seconds).padStart(2, '0')}
            </motion.div>
            <p className="text-sm md:text-base uppercase tracking-wider mt-2">Seconds</p>
          </div>
        </div>
    </div>
  );
};



export default CountdownTimer;