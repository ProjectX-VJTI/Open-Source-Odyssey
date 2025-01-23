import React from 'react';
import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 text-gray-900 dark:text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4 mt-5">
          <a href="https://www.instagram.com/x_vjti/" target="_blank" rel="noopener noreferrer" className="no-underline mr-6 text-gray-900 dark:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="https://github.com/ProjectX-VJTI" target="_blank" rel="noopener noreferrer" className="no-underline mr-6 text-gray-900 dark:text-white">
            <FaGithub size={24} />
          </a>
          <a href="mailto:projectxvjti@gmail.com" target="_blank" rel="noopener noreferrer" className="no-underline text-gray-900 dark:text-white">
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} ProjectX</p>
      </div>
    </footer>
  );
};

export default Footer;