import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Events from './Components/Events';
import Projects from './Components/Projects';
import Achievements from './Components/Achievements';
import PastProjects from './Components/PastProjects';
import UpcomingProjects from './Components/UpcomingProjects';
import Carousel from './Components/Carousel';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import CountdownTimer from './Components/CountdownTimer'; // Imported the CountdownTimer component here
import './App.css';

const Homepage = () => {
  const targetDate = '2025-01-25T00:00:00';

  return (
    <div>
      <Hero />
      {/* Text Section between Hero and Carousel */}
      <div className="text-center py-8 px-4 md:px-12 bg-opacity-10 text-white">
        <h2 className="text-4xl font-semibold mb-4">Welcome to Project X</h2>
        <p className="text-xl">
          We are an exclusive club at Veermata Jijabai Technological Institute, Mumbai. We provide a collaborative environment for students to learn, grow, and build projects together under mentorship. Explore our achievements, past projects, and upcoming events!
        </p>
      </div>

      {/* Countdown Timer Section */}
      <div className="my-8">
        <CountdownTimer targetDate={targetDate} />
      </div>

      {/* Carousel Section */}
      <div>
        <Carousel />
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