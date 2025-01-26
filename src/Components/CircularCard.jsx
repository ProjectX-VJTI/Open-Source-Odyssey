import React from "react";
import { useSpring, animated } from "react-spring";

const CircularCard = ({ image, name, organization, link }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline"
    >
      <animated.div
        style={props}
        className="flex text-center w-64 font-mono flex-col items-center p-6 shadow-2xl max-w-xs bg-gradient-to-b from-gray-800/50 to-purple-900/50 backdrop-blur-sm border-2 border-purple-600/50 rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-purple-500/50 hover:border-purple-400"
      >
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-lg">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        <h3 className="mt-4 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
          {name}
        </h3>

        <p className="mt-2 text-sm text-gray-300">{organization}</p>
      </animated.div>
    </a>
  );
};

export default CircularCard;
