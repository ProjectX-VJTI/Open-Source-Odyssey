import React from 'react';
import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[var(--vanilla)] border-t-2 border-[var(--rich-black)] text-white py-4">
      <div className="container mx-auto flex flex-row-reverse items-center justify-between">
        <div className="flex">
          <a href="https://www.instagram.com/x_vjti/" target="_blank" rel="noopener noreferrer" className="no-underline mr-6">
            <FaInstagram size={24} className="text-[var(--rich-black)]"/>
          </a>
          <a href="https://github.com/ProjectX-VJTI" target="_blank" rel="noopener noreferrer" className="no-underline mr-6">
            <FaGithub size={24} className="text-[var(--rich-black)]"/>
          </a>
          <a href="mailto:projectxvjti@gmail.com" target="_blank" rel="noopener noreferrer" className="no-underline">
            <FaEnvelope size={24} className="text-[var(--rich-black)]"/>
          </a>
        </div>
        <p className="text-md font-poppins text-[var(--rich-black)]">&copy; {new Date().getFullYear()} ProjectX</p>
      </div>
    </footer>
  );
};

export default Footer;