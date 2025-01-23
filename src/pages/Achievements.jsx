import React from 'react';
import CircularCard from '../components/CircularCard';
import { motion } from 'framer-motion';

let time = 0.1;
let delta = 0.02;
const AnimatedCircularCard = (props) => {
    time += delta;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: time }}
        >
            <CircularCard {...props}></CircularCard>
        </motion.div>
    );
};

const Achievements = () => {
    return (
        <div className="min-h-screen">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.22 }} // matches the initial delay of the component card
            >
                <h1 className="text-center mx-auto text-5xl font-mono py-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-red-300">
                    GSoC Contributors
                </h1>
            </motion.div>
            <div className="grid grid-cols-6 px-3 gap-12 justify-center">
                <div></div>
                <AnimatedCircularCard
                    image="https://i.ibb.co/jJyjcvZ/Kshitij-Shah-photoaidcom-cropped.png"
                    name="Kshitij Shah"
                    organization="Sugarlabs"
                    link="https://github.com/kshitijdshah99/Pippy_Activity"
                />
                <AnimatedCircularCard
                    image="https://i.ibb.co/Z6fgX5F/IMG-20231110-003535-01-01-photoaidcom-cropped.png"
                    name="Vedant Mehra"
                    organization="CERN"
                    link="https://hepsoftwarefoundation.org/gsoc/blogs/2024/blog_SOFIE_VedantMehra.html"
                />
                <AnimatedCircularCard
                    image="https://i.ibb.co/Sm9FtJ2/1714656497995-photoaidcom-cropped.png"
                    name="Mayank Palan"
                    organization="Red Hen Lab"
                    link="https://medium.com/@mayankpalan066/gsoc24-with-red-hen-lab-modeling-wayfinding-cfb0131b71d1"
                />
                <AnimatedCircularCard
                    image="https://i.ibb.co/C640S72/Scanned-20240502-1627-1-page-0001-photoaidcom-cropped.png"
                    name="Sharan Poojari"
                    organization="NumFOCUS"
                    link="https://github.com/aiidateam/aiida-explorer/blob/gsoc/gsoc/README.md"
                />
                <div></div>
            </div>
            <div className="grid grid-cols-7 px-6 justify-center gap-12">
                <div></div>
                <div></div>
                <AnimatedCircularCard
                    image="https://i.ibb.co/T4D9vMh/IMG-20240502-172654-photoaidcom-cropped.png"
                    name="Warren Jacinto"
                    organization="Open Astronomy"
                    link="https://deadspheroid.github.io/my-blog/"
                />
                <AnimatedCircularCard
                    image="https://i.ibb.co/t3vy9D9/IMG-20240502-WA0043-2-photoaidcom-cropped.png"
                    name="Tvisha Vedant"
                    organization="INCF"
                    link="https://tvilight4.github.io/MyBlog/"
                />
                <AnimatedCircularCard
                    image="https://i.ibb.co/9WSz3ss/photo-photoaidcom-cropped.png"
                    name="Raya Chakravarthy"
                    organization="INCF"
                    link="https://raya679.github.io/gsoc/"
                />
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Achievements;
