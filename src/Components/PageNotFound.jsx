import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Neural Network Pattern Background */}
      <div className="absolute inset-0 bg-no-repeat bg-cover" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"20\" cy=\"20\" r=\"5\" fill=\"%236366f1\"/><circle cx=\"50\" cy=\"20\" r=\"5\" fill=\"%236366f1\"/><circle cx=\"80\" cy=\"20\" r=\"5\" fill=\"%236366f1\"/><circle cx=\"20\" cy=\"50\" r=\"5\" fill=\"%236366f1\"/><circle cx=\"50\" cy=\"50\" r=\"5\" fill=\"%236366f1\"/><circle cx=\"80\" cy=\"50\" r=\"5\" fill=\"%236366f1\"/><circle cx=\"20\" cy=\"80\" r=\"5\" fill=\"%236366f1\"/><circle cx=\"50\" cy=\"80\" r=\"5\" fill=\"%236366f1\"/><circle cx=\"80\" cy=\"80\" r=\"5\" fill=\"%236366f1\"/><line x1=\"20\" y1=\"20\" x2=\"50\" y2=\"50\" stroke=\"%236366f1\" stroke-width=\"2\"/><line x1=\"50\" y1=\"20\" x2=\"80\" y2=\"50\" stroke=\"%236366f1\" stroke-width=\"2\"/><line x1=\"20\" y1=\"50\" x2=\"50\" y2=\"80\" stroke=\"%236366f1\" stroke-width=\"2\"/><line x1=\"50\" y1=\"50\" x2=\"80\" y2=\"80\" stroke=\"%236366f1\" stroke-width=\"2\"/></svg>')", opacity: 0.2 }}></div>

      {/* Glowing Elements */}
      <div className="absolute top-10 left-10 w-10 h-10 bg-blue-600 rounded-full animate-float-glow delay-100"></div>
      <div className="absolute top-20 right-20 w-12 h-12 bg-purple-500 rounded-full animate-float-glow delay-200"></div>
      <div className="absolute bottom-10 left-20 w-8 h-8 bg-blue-700 rounded-full animate-float-glow delay-300"></div>
      <div className="absolute bottom-20 right-10 w-14 h-14 bg-purple-600 rounded-full animate-float-glow delay-400"></div>

      <div className="text-center p-8 rounded-xl shadow-2xl bg-gray-900/75 backdrop-blur-lg border border-gray-700">
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 mb-6 animate-pulse-glow">
          404
        </h1>
        <p className="text-3xl text-gray-200 mb-8 font-semibold tracking-wide">
          Oops! Page Lost in the Digital Void
        </p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 text-lg text-white 
          bg-blue-600 hover:bg-blue-700 
          transition duration-300 ease-in-out 
          transform hover:-translate-y-1 
          rounded-full 
          shadow-lg 
          hover:shadow-xl 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-500 
          focus:ring-opacity-50
          relative overflow-hidden group"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative z-10">Return to Safety</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;

// Add custom CSS for animations and styles
const styles = `
@keyframes float-glow {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.8; }
  50% { transform: translateY(-10px) scale(1.1); opacity: 1; }
}

.animate-float-glow {
  animation: float-glow 3s infinite ease-in-out;
}

@keyframes pulse-glow {
  0%, 100% { text-shadow: 0 0 3px #6366f1, 0 0 6px #6366f1, 0 0 9px #6366f1; }
  50% { text-shadow: 0 0 0px #6366f1, 0 0 2px #6366f1, 0 0 4px #6366f1; }
}

.animate-pulse-glow {
  animation: pulse-glow 2s infinite;
}
`;

document.head.appendChild(document.createElement("style")).innerHTML = styles;