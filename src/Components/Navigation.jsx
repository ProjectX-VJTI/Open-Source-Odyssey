// Enhanced Navigation component with updated styles
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/X_Logo.png';

const Navigation = () => {

  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const eventDate = new Date('2025-01-25T23:59:59').getTime();
    const countdownInterval = setInterval(() =>{
      const now = new Date().getTime();
      const distance = eventDate - now;

      if(distance< 0 ){
        clearInterval(countdownInterval);
        setTimeRemaining('Event has started :)');
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);

    },1000);

    return () => clearInterval(countdownInterval);

  }, []);
  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r bg-slate-900 border-b-2 border-gray-700">
      <div className='text-xl text-white font-mono'>
        Time left: 
        <span className='ml-2'>{timeRemaining}</span>
      </div>

      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-12 mr-3 rounded-full" />
        <span className="text-3xl font-mono font-bold text-white shadow-md">ProjectX</span>
      </div>
      
      <div className="flex font-mono space-x-6">
        
        <Link to="/" className="text-xl text-white hover:text-gray-200 transition-colors duration-300">Home</Link>
        <Link to="/events" className="text-xl text-white hover:text-gray-200 transition-colors duration-300">Events</Link>
        <Link to="/projects" className="text-xl text-white hover:text-gray-200 transition-colors duration-300">Projects</Link>
        <Link to="/achievements" className="text-xl text-white hover:text-gray-200 transition-colors duration-300">Achievements</Link>
        {/* <Link to="/staff" className="text-xl text-white hover:text-gray-200 transition-colors duration-300">Staff</Link> */}
      </div>
      
    </nav>
  );
};

export default Navigation;
