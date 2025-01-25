import React from 'react';

const Hero = () => {
    return (
        <div className="relative bg-transparent min-h-screen w-full flex">
            <div className="flex-1 bg-transparent flex items-center justify-center">
                <div className="gp-10 rounded-lg text-left">
                    {/* Updated h1 tag with adjusted line height and padding */}
                    <h1 className="text-bounce text-[10rem] leading-[0.9] font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 pb-4">
                        ProjectX
                    </h1>
                    <p className="text-bounce text-5xl leading-relaxed font-mono tracking-wide text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mt-5">
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
}

export default Hero;