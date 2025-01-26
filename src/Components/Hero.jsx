import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-purple-900 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="text-center px-4 sm:px-8 md:px-16 lg:px-24">
        <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 animate-float">
          Project X
        </h1>

        <p className="mt-6 text-lg md:text-xl lg:text-2xl font-medium text-blue-200 tracking-wide animate-fadeIn delay-500">
          Innovating the Future
        </p>

        <Link to="/events">
          <button className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:scale-105 transform transition duration-300 shadow-lg hover:shadow-xl">
            Learn More
          </button>
        </Link>
      </div>

      <svg
        className="absolute bottom-0 left-0 right-0 z-10 opacity-80"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,133.3C672,149,768,203,864,213.3C960,224,1056,192,1152,160C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="url(#gradient)"
        ></path>
        <defs>
          <linearGradient
            id="gradient"
            x1="0"
            x2="1"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#3730A3" /> 
            <stop offset="100%" stopColor="#5720A8" /> 
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Hero;
