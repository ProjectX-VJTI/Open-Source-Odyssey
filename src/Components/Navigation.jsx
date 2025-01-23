import logo from '../assets/X_Logo.png';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r bg-white dark:bg-gray-800 border-b-2 border-gray-300 dark:border-gray-700">
      <div className="flex items-center justify-center">
        <img src={logo} alt="Logo" className="h-12 w-12 mr-3 rounded-full" />
        {!isOpen && 
        <span className="text-3xl font-mono font-bold text-gray-900 dark:text-white ">ProjectX</span>
        }
      </div>
      <div className="flex items-center space-x-4">
        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 dark:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`flex-col items-center justify-center md:flex md:flex-row font-mono space-y-4 md:space-y-0 md:space-x-6 ${isOpen ? 'flex' : 'hidden'}`}>
      <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="p-2 border rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white">
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
        <Link to="/" className="text-xl text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-300">Home</Link>
        <Link to="/events" className="text-xl text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-300">Events</Link>
        <Link to="/projects" className="text-xl text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-300">Projects</Link>
        <Link to="/achievements" className="text-xl text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-300">Achievements</Link>
      </div>
    </nav>
  );
};

export default Navigation;