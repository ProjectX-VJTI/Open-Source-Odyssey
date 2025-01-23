import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css';

const NotFound = () => {
    const navigate = useNavigate();
    console.log('Not Found Button!');
    return (
        <motion.div
            variants={{
                initial: { opacity: 0, x: -100 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: 100 },
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            <div className="relative h-screen w-full">
                <div className="absolute inset-0 bg-[radial-gradient(rgba(79,79,79,0.2)_1px,transparent_1px),radial-gradient(rgba(79,79,79,0.2)_1px,transparent_1px)] bg-[length:20px_20px]">
                    <div className="font-tech text-purple-blue text-lg text-center py-10 px-4 md:px-12 flex flex-col items-center justify-center gap-10">
                        <div className="text-5xl leading-relaxed font-mono tracking-wide text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mt-5">
                            Oops, this page doesn't exist!
                        </div>
                        <div>
                            <button
                                className="block text-center text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-b-lg text-sm px-5 py-3"
                                onClick={() => navigate('/')}
                            >
                                Go to Home Page
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default NotFound;
