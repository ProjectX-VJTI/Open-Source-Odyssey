import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import logo from '../assets/X_Logo.png';
import myHook from './Context';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { siteMode,setSiteMode}=myHook()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    console.log(siteMode)
        setSiteMode(siteMode === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/events', label: 'Events' },
    { to: '/projects', label: 'Projects' },
    { to: '/achievements', label: 'Achievements' }
  ];

  return (
    <nav className={`
      flex justify-between items-center p-4 
      ${siteMode === 'dark' ? 'bg-slate-900 text-white border-gray-700' : 'bg-white text-black'}
      border-b-2 border-gray-300 
    `}>
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-12 mr-3 rounded-full" />
        <span className="text-3xl font-mono font-bold">ProjectX</span>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center space-x-4">
        <button onClick={toggleTheme} className="text-2xl">
          {siteMode === 'light' ?  <MdDarkMode />:<MdLightMode />}
        </button>
        <button onClick={toggleMenu} className="text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <div className="flex font-mono space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              className="text-xl hover:text-gray-500 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button onClick={toggleTheme} className="text-2xl ml-4">
          {siteMode === 'dark' ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className={`
          md:hidden absolute top-20 left-0 w-full 
           ${siteMode === 'dark' ? 'bg-slate-900':'bg-white'} z-20 border-t 
          shadow-lg py-4
      `}>
          {navLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              className="
                block px-4 py-2 text-xl 
                hover:bg-gray-100 dark:hover:bg-slate-700
              "
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;