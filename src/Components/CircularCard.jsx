import React from 'react';
import { useSpring, animated } from 'react-spring';

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
                className="flex text-center font-mono flex-col items-center p-6 shadow-lg max-w-xs bg-transparent rounded-lg transform hover:scale-105 transition-transform duration-200 ease-in-out"
            >
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <h3 className="mt-4 text-xl font-bold text-purple-200">
                    {name}
                </h3>
                <p className="mt-2 text-cyan-200">{organization}</p>
            </animated.div>
        </a>
    );
};

export default CircularCard;
