import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/X_Logo.png';

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#1E293B] shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-12 rounded-full shadow-md border-2 border-blue-400"
        />
        <span className="text-2xl md:text-3xl font-bold text-white bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
          Project X
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <Link
          to="/"
          className="text-lg font-medium text-gray-200 hover:text-white hover:underline transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/events"
          className="text-lg font-medium text-gray-200 hover:text-white hover:underline transition duration-300"
        >
          Events
        </Link>
        <Link
          to="/projects"
          className="text-lg font-medium text-gray-200 hover:text-white hover:underline transition duration-300"
        >
          Projects
        </Link>
        <Link
          to="/achievements"
          className="text-lg font-medium text-gray-200 hover:text-white hover:underline transition duration-300"
        >
          Achievements
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
