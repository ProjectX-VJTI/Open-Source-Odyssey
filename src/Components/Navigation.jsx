// Enhanced Navigation component with updated styles
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/X_Logo.png';

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center p-3 bg-[var(--vanilla)]">
      <div className="flex items-center">
        <span className="text-3xl font-tech font-semibold text-[var(--rich-black)]">ProjectX</span>
      </div>
      <div className="flex font-poppins font-med space-x-6 text-[var(--rich-black)] text-xl">
        <Link to="/" className="hover:text-gray-200 transition-colors duration-300">Home</Link>
        <a href="/#events" className="text-xl hover:text-gray-200 transition-colors duration-300">Events</a>
        <a href="/#projects" className="text-xl hover:text-gray-200 transition-colors duration-300">Projects</a>
        {/* <Link to="/staff" className="text-xl text-white hover:text-gray-200 transition-colors duration-300">Staff</Link> */}
      </div>
    </nav>
  );
};

export default Navigation;
