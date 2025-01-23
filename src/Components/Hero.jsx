import React from "react";
// import ThreeJSComponent from './ThreeJSComponent';
// import Sphere from "./icons";
const Hero = () => {
  return (
    <div className="relative bg-transparent min-h-screen w-full flex">
      <div className="flex-1 bg-transparent flex items-center justify-center">
        <div className="gp-10 rounded-lg lg:text-left">
          <h1 className="text-bounce text-6xl md:text-[6rem] text-center lg:text-[10rem] leading-none font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            ProjectX
          </h1>
          <p className="text-bounce text-3xl lg:text-5xl leading-relaxed font-mono tracking-wide text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mt-5">
            Innovating the future
          </p>
        </div>
      </div>
      <svg
        className="absolute bottom-0 left-0 right-0 z-10 opacity-100"
        viewBox="0 0 1440 320"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)" }}
      >
        <use href="src/assets/wordcloud.svg" />
      </svg>
    </div>
  );
};

export default Hero;


