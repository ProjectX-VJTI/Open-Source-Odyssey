import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';

const Homepage = () => {
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
            <Hero />
            {/* Text Section between Hero and Carousel */}
            <div className="text-center py-8 px-4 md:px-12 bg-opacity-10 text-white">
                <h2 className="text-4xl font-semibold mb-4">
                    Welcome to Project X
                </h2>
                <p className="text-xl">
                    We are an exclusive club at Veermata Jijabai Technological
                    Institute, Mumbai. We provide a collaborative environment
                    for students to learn, grow, and build projects together
                    under mentorship. Explore our achievements, past projects,
                    and upcoming events!
                </p>
            </div>

            <div>
                <Carousel />
            </div>
        </motion.div>
    );
};

export default Homepage;
