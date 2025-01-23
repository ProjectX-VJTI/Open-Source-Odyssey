import React from 'react';
import HighlightWrapper from './HighlightWrapper';

const UpcomingProjects = () => {
    // Custom styles for gradient text
    const gradientTextStyle = {
        background: 'linear-gradient(45deg, #6a5acd, #7f00ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'bounce 2s infinite',
        fontFamily: "'Roboto Mono', monospace"
    };

    return (
        <div className="h-[91.1vh] w-full font-monoS flex flex-col items-center justify-center bg-slate-900">
            <div className="text-center">
                <h1 style={gradientTextStyle} className="text-7xl font-mono mb-6 font-bold mt-8">
                    <HighlightWrapper>Upcoming Projects</HighlightWrapper>
                </h1>
                <h2 className="text-xl text-gray-300 mt-4 font-mono animate-pulse">
                    <HighlightWrapper>Coming Soon</HighlightWrapper>
                </h2>
            </div>
        </div>
    );
}

export default UpcomingProjects;
