import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Routes
import Events from './pages/Events';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import PastProjects from './pages/PastProjects';
import UpcomingProjects from './pages/UpcomingProjects';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// CSS
import './App.css';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Homepage />} />
                <Route path="/events" element={<Events />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/past-projects" element={<PastProjects />} />
                <Route
                    path="/upcoming-projects"
                    element={<UpcomingProjects />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <div className="bgC">
            <Router>
                <Navigation />
                <AnimatedRoutes />
                <Footer />
            </Router>
        </div>
    );
}

export default App;
