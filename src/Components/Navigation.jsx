// Enhanced Navigation component with updated styles
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/X_Logo.png';


const Navigation = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r bg-slate-900 border-b-2 border-gray-700">
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


