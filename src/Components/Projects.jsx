import React from 'react';
import { Link } from 'react-router-dom';
import myHook from './Context';
const CardRow = () => {
  
  return (
    <div className="relative h-[91.5vh] w-full bg-transparent flex ">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
    <div className="flex flex-row max-md:flex-col w-full h-[90vh] items-stretch">
      <div className="md:w-1/2 m-6 flex justify-center items-center p-4">
        <Card title="Upcoming Project 2k24" link="/upcoming-projects" />
      </div>
      <div className="md:w-1/2 m-6 flex justify-center items-center p-4">
        <Card title="Past Projects" link="/past-projects" />
      </div>
    </div>
    </div>
    </div>
  );
};

const Card = ({ title, link }) => {
  const {siteMode} = myHook();
  return (
    
    <div className={`rounded-lg  backdrop-blur-sm overflow-hidden w-full h-full flex flex-col justify-between transform hover:scale-105 transition duration-500 ease-in-out shadow-gradient ${siteMode === 'dark' ? 'border border-gray-700':'border border-gray-200'}  `}>
      <div className="bg-glass p-5">
        <div className="animate-bounce">
          <h5 className=" text-center my-8 font-bold text-3xl font-mono tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-blue-400 to-purple-300">{title}</h5>
        </div>
        <p className={`${siteMode === 'dark' ? 'text-gray-300':'text-gray-500'}  pt-3 font-mono`}>

          Press on The Read More Button to know more!!! 

        </p>
      </div>
      <Link to={link} className="block text-center text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-b-lg text-sm px-5 py-3">
        Read more
      </Link>
    </div>
  );
};

export default CardRow;
