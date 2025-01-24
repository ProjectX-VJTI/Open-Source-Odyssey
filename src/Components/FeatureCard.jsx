import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import myHook from './Context';
const FeatureCard = ({
  title,
  tag,
  info,
  buttontext,
  style,
  tagStyle,
  page,
}) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    window.open(page, '_blank');
  };
  const {siteMode}=myHook()

  return (
    <div className={` w-10/12 mx-auto border-2  backdrop-blur-sm shadow-gradient ${siteMode === "dark" ? "border-gray-700" : "border-gray-200"}  p-3 flex flex-col bg-clip-border rounded-xl shadow-md h-max`}>
      <div className="w-full mb-3">
      <h3 className={`aanimate-bounce-less text-3xl font-semibold ${tagStyle} bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-purple-400 duration-1000 ease-in-out`}>
      {title}
    </h3>
    </div>
      <div className="mb-1">
        <p className={`text-[0.8rem] ${siteMode === "dark" ? "text-gray-100" : "text-gray-800"}  ${tagStyle}`}>{tag}</p>
      </div>
      <div className="mb-[4rem] md:h-[100px]">
        <p className={`text-[1.1rem] ${siteMode === "dark" ? "text-gray-100" : "text-gray-800"}`}>{info}</p>
      </div>
      <div className="mt-8">
        <button
          className={`mx-auto  bg-gradient-to-br px-5 from-blue-800 via-blue-600 to-blue-800 inline-flex items-center justify-center p-0.5 mb-3 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-white dark:bg-gray-900`}
          onClick={handleButtonClick}
        >
          <span className=" text-white px-3 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
            {buttontext}
          </span>
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
