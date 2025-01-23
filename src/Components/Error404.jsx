import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web"
import Error404 from "../assets/Error_404.json"


const NotFoundPage = () => {
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: document.getElementById('lottie-container'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: Error404, 
    });
    return () => anim.destroy(); 
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-transparent text-gray-800 text-center ">
       <h1 className="text-[3rem] text-center font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Oops!
        </h1>
      <div className=" h-80" id="lottie-container">
      </div>
        <p className="text-center text-lg mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          This page doesn't exist!
        </p>
        <Link to="/">
          <button className="px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:bg-gradient-to-l  transition duration-300">
            Go Back to Homepage
          </button>
        </Link>
    </div>
  );
};

export default NotFoundPage;
