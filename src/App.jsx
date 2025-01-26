import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Events from "./Components/Events";
import Projects from "./Components/Projects";
import Achievements from "./Components/Achievements";
import PastProjects from "./Components/PastProjects";
import UpcomingProjects from "./Components/UpcomingProjects";
import Carousel from "./Components/Carousel";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

const Homepage = () => {
  return (
    <div>
      <Hero />

      <div className="relative py-16 px-4 md:px-12 bg-gradient-to-b from-[#5720A8] to-[#111827] text-white">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Welcome to Project X
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed animate-fadeIn delay-200 mx-auto max-w-3xl">
            <span className="block font-semibold text-gray-300 mb-2">
              We are an exclusive club at Veermata Jijabai Technological
              Institute, Mumbai.
            </span>
            <span className="block text-gray-200">
              We provide a collaborative environment for students to learn,
              grow, and build projects together under mentorship. Explore our
              achievements, past projects, and upcoming events!
            </span>
          </p>
        </div>
      </div>

      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 animate-fadeIn">
            Our Highlights
          </h2>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="bgC">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/past-projects" element={<PastProjects />} />
          <Route path="/upcoming-projects" element={<UpcomingProjects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
