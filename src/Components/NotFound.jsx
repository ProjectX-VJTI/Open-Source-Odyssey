import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-900">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 mb-4">404</h1>
          <p className="text-2xl text-white mb-8">Oops, this page doesn't exist!</p>
          <Link to="/" className="text-lg text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 duration-100 ease-in hover:text-white">Go back to Home</Link>
        </div>
      </div>
    );
  };

export default NotFound;