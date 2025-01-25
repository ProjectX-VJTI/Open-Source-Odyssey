// Enhanced App component with updated styles and layout
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavbarCard from './Components/NavbarCard';
import Navigation from './Components/Navigation';
import StudentManagement from './Components/Achievements';
import './App.css';
import PastProjects from './Components/PastProjects';
import UpcomingProjects from './Components/UpcomingProjects';
import HeroN from './Components/HeroN';
import Footer from "./Components/Footer"
import About from './ComponentsN/About';
import Projects from "./ComponentsN/Projects";
import Events from "./ComponentsN/Events";

const Homepage = () => {
  return (
    <div>
      <HeroN />
      {/* Text Section between Hero and Carousel */}
      <About />
      <Events />
      <Projects />
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