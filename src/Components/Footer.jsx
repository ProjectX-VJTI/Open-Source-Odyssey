import React from 'react';
import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t-2 border-gray-600 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex mb-4">
          <a href="https://www.instagram.com/x_vjti/" target="_blank" rel="noopener noreferrer" className="no-underline mr-6">
            <FaInstagram size={24} />
          </a>
          <a href="https://github.com/ProjectX-VJTI" target="_blank" rel="noopener noreferrer" className="no-underline mr-6">
            <FaGithub size={24} />
          </a>
          <a href="mailto:projectxvjti@gmail.com" target="_blank" rel="noopener noreferrer" className="no-underline">
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} ProjectX</p>
      </div>
    </footer>
  );
};

export default Footer;