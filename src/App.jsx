// Enhanced App component with updated styles and layout
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavbarCard from './Components/NavbarCard';
import Navigation from './Components/Navigation';
import Events from './Components/Events';
import StudentManagement from './Components/Achievements';
import Projects from './Components/Projects';
import './App.css'
import Achievements from './Components/Achievements';
import PastProjects from './Components/PastProjects';
import UpcomingProjects from './Components/UpcomingProjects';
import VerticalTimeline from './Components/Timeline';
import Carousel from './Components/Carousel';
import Hero from './Components/Hero';
import Footer from "./Components/Footer"


const Homepage = () => {
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

      <div>
        <Carousel />
      </div>
    </div>
  );
};




function App() {
  return (
    <div className='bgC'>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/past-projects" element={<PastProjects />} />
        <Route path="/upcoming-projects" element={<UpcomingProjects />} />
        {/* <Route path="/time" element={<VerticalTimeline />} /> */}

        {/* <Route path="/" element={<OrderManagement />} /> */}
      </Routes>
      <Footer />
    </Router>
    <div>
    </div>
    </div>
  );
}

export default App;

{/* <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div></div> */ }