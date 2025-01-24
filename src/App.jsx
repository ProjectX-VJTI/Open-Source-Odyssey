import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navigation from './Components/Navigation';
import Events from './Components/Events';
import Achievements from './Components/Achievements';
import Projects from './Components/Projects';
import PastProjects from './Components/PastProjects';
import UpcomingProjects from './Components/UpcomingProjects';
import Hero from './Components/Hero';
import Footer from "./Components/Footer";
import ProposalForm from './Components/Proposal';
import './App.css';
import Carousel from './Components/Carousel';

const Homepage = () => {
  return (
    <div>
      <Hero />
      <div className="text-center py-8 px-4 md:px-12 bg-opacity-10 text-white">
        <h2 className="text-4xl font-semibold mb-4">Welcome to Project X</h2>
        <p className="text-xl">
          We are an exclusive club at Veermata Jijabai Technological Institute, Mumbai. We provide a collaborative environment for students to learn, grow, and build projects together under mentorship. Explore our achievements, past projects, and upcoming events!
        </p>
      </div>

      <div>
        <Carousel />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="bgC">
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/past-projects" element={<PastProjects />} />
          <Route path="/upcoming-projects" element={<UpcomingProjects />} />
          <Route path="/proposal" element={<ProposalForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
