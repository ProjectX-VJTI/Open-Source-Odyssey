import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; 

const PageNotFound = () => {
  return (
    <div className="relative bg-transparent min-h-screen w-full flex flex-col items-center justify-center text-center px-4">
      {/* Main Message */}
      <div className="mb-12">
        <h1 className="text glitch" data-text="404">
          404
        </h1>
        <p className="text glitch" data-text="Code Not Found!">
          Code Not Found!
        </p>
        <p className="text-lg text-gray-500 mt-3 max-w-lg mx-auto">
          This page isn’t in the code.<br />Let’s head back to the main branch!
        </p>
      </div>

      {/* Go Back Button */}
      <div className="mt-8">
        <Link 
          to="/" 
          className="block text-center text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-8 py-4 transition duration-300"
        >
          Return to Homepage
        </Link>
      </div>

      {/* SVG for styling */}
      <svg
        className="absolute bottom-0 left-0 right-0 z-10 opacity-100"
        viewBox="0 0 1440 320"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)' }}
      >
        <use href="src/assets/wordcloud.svg" />
      </svg>
    </div>
  );
};

export default PageNotFound;
