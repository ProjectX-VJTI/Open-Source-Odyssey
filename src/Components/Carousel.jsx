import React, { useEffect, useState } from 'react';

const Typewriter = ({ texts, delay = 100 }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(delay);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex];
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, prev.length - 1));
        setTypingSpeed(delay / 2);
      } else {
        setDisplayText((prev) => currentText.slice(0, prev.length + 1));
        setTypingSpeed(delay);
      }

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed, textIndex, texts, delay]);

  return <div className="text-white text-3xl">{displayText}</div>;
};

const Carousel = () => {
  const images = [
    "src/assets/OpenCV.jpg",
    "src/assets/Image2.jpg",
    "src/assets/Image1.jpg",
    "src/assets/Image3.jpg",
    "src/assets/Image4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex h-[80vh]">
      <div className="w-full relative">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-lg transition-all duration-1000 ease-in-out shadow-lg"
        />
        {/* <div className="absolute inset-0 flex items-end justify-center p-8 bg-gray-900 bg-opacity-50">
          <div className="text-white text-3xl p-4 rounded-lg">
            <Typewriter
              texts={[
                "Project X is an exclusive club at Veermata Jijabai Technological Institute, Mumbai, meant to serve as a healthy environment for students to learn from each other and grow together.",
                "The heart of Project X is a mentorship programme organised for juniors, by seniors, where juniors take up a variety of challenging projects across many domains. Through the guidance of their mentors, these students are able to complete daunting tasks in a relatively short timeframe, gaining significant exposure and knowledge in their domain of choice."
              ]}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;
