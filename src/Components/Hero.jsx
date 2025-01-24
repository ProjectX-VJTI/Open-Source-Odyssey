import React from 'react';

const Hero = () => {
    return (
        <div className="relative min-h-screen w-full flex flex-col md:flex-row transition-colors duration-500">
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="gp-10 rounded-lg text-center">
                    <h1 className="text-bounce text-5xl sm:text-7xl md:text-[7rem] leading-none font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                        ProjectX
                    </h1>
                    <p className="text-bounce text-2xl sm:text-4xl md:text-5xl leading-relaxed font-mono tracking-wide text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mt-5">
                        Innovating the future
                    </p>
                </div>
            </div>
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

export default Hero;
