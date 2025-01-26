import React from "react";
import { Link } from "react-router-dom";

const CardRow = () => {
  return (
    <div className="relative h-[91.5vh] w-full bg-gradient-to-b from-gray-900 via-gray-800 to-purple-900 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-50"></div>

      <div className="flex flex-col items-center justify-start w-full h-full p-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 text-center mb-8 leading-tight overflow-visible">
          PROJECTS
        </h1>

        <div className="flex flex-row w-full items-center justify-center">
          <div className="w-96 h-96 m-4 flex justify-center items-center">
            <Card title="Upcoming Project 2k24" link="/upcoming-projects" />
          </div>

          <div className="w-96 h-96 m-4 flex justify-center items-center">
            <Card title="Past Projects" link="/past-projects" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, link }) => {
  return (
    <div className="rounded-lg backdrop-blur-sm overflow-hidden w-full h-full flex flex-col justify-between transform hover:scale-105 transition duration-500 ease-in-out shadow-2xl border-2 border-purple-600/50 bg-gradient-to-b from-gray-800/70 to-purple-900/70">
      <div className="p-6">
        <div className="animate-float">
          <h5 className="text-center my-8 font-bold text-3xl font-mono tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-blue-400 to-purple-300">
            {title}
          </h5>
        </div>

        <p className="text-gray-300 pt-3 font-mono text-center">
          Press on The Read More Button to know more!!!
        </p>
      </div>

      <Link
        to={link}
        className="block text-center text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-b-lg text-lg px-5 py-3 transition-all duration-300"
      >
        Read more
      </Link>
    </div>
  );
};

export default CardRow;
