import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPageWithButton = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-12 px-6 py-4 overflow-hidden">
            <h1 className="text-[12rem] sm:text-[8rem] md:text-[8rem] leading-none tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] animate-pulse">
                404!
            </h1>
            <h2 className="text-3xl sm:text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] tracking-wide animate-wiggle">
                Oops, Page Not Found!
            </h2>
            <button
                className="mt-8 font-bold tracking-widest text-[#00FFFF] border-2 border-[#00FFFF] px-6 py-3 rounded-lg hover:bg-[#00FFFF]/20 hover:text-[#FF00FF] transition duration-500 ease-in-out transform hover:-translate-y-4 hover:scale-110 animate-bounce"
                onClick={() => navigate('/')}
                aria-label="Return to homepage"
            >
                Return to Home
            </button>
        </div>
    );
};

export default ErrorPageWithButton;
