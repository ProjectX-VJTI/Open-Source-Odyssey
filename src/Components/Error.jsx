import React from 'react';
import { NavLink } from 'react-router-dom';

export const Error = () => {
    return (
        <div className='relative bg-transparent min-h-screen w-full flex justify-center items-center'>
            <div className='mt-20 p-8 w-11/12 md:w-7/12 sm:w-7/12 border-blue-600 border-4 rounded-3xl backdrop-blur-lg mb-28 shadow-lg bg-[rgba(15,15,40,0.85)]'>
                <div className="w-full h-max flex flex-col items-center">
                    <h1 className='text-4xl font-extrabold mt-4 text-rose-600 font-mono'>🚫 Oops, Page Not Found!</h1>
                    <p className='text-xl mt-4 text-center text-[#5C9BF4] font-mono'>
                        We're sorry, the page you are looking for might have been removed, its name
                        changed, or is temporarily unavailable. 😔
                    </p>
                    <NavLink
                        to="/"
                        className="py-2 px-4 mt-6 rounded bg-transparent transition-all duration-300">
                        <button className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group">
                            <div className="relative overflow-hidden">
                                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                                    Return to Home
                                </p>
                                <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                                    Return to Home
                                </p>
                            </div>
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
