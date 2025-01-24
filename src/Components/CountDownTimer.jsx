import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const targetDate = new Date('2025-01-25T23:59:59').getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const calculateProgress = (value, max) => {
    return (value / max) * 100;
  };

  return (
    <div className="flex items-center justify-center bg-transparent font-sans text-white">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4 pb-2">Event Ends In</h3> {/* Larger text */}
        <div className="flex justify-center space-x-6"> {/* Increased spacing */}
          {/* Days */}
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24"> {/* Larger circle */}
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-gray-800 stroke-current" // Dark background
                  strokeWidth="4" // Increased thickness
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-blue-400 stroke-current" // Progress color
                  strokeWidth="4" // Increased thickness
                  strokeDasharray={`${calculateProgress(timeLeft.days, 365)}, 100`}
                  strokeLinecap="round"
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold"> {/* Larger text */}
                {timeLeft.days}
              </span>
            </div>
            <span className="text-lg mt-2 text-gray-300">Days</span> {/* Larger label */}
          </div>
          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24"> {/* Larger circle */}
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-gray-800 stroke-current" // Dark background
                  strokeWidth="4" // Increased thickness
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-blue-500 stroke-current" // Progress color
                  strokeWidth="4" // Increased thickness
                  strokeDasharray={`${calculateProgress(timeLeft.hours, 24)}, 100`}
                  strokeLinecap="round"
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold"> {/* Larger text */}
                {timeLeft.hours}
              </span>
            </div>
            <span className="text-lg mt-2 text-gray-300">Hours</span> {/* Larger label */}
          </div>
          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24"> {/* Larger circle */}
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-gray-800 stroke-current" // Dark background
                  strokeWidth="4" // Increased thickness
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-blue-600 stroke-current" // Progress color
                  strokeWidth="4" // Increased thickness
                  strokeDasharray={`${calculateProgress(timeLeft.minutes, 60)}, 100`}
                  strokeLinecap="round"
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold"> {/* Larger text */}
                {timeLeft.minutes}
              </span>
            </div>
            <span className="text-lg mt-2 text-gray-300">Minutes</span> {/* Larger label */}
          </div>
          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24"> {/* Larger circle */}
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-gray-800 stroke-current" // Dark background
                  strokeWidth="4" // Increased thickness
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-blue-700 stroke-current" // Progress color
                  strokeWidth="4" // Increased thickness
                  strokeDasharray={`${calculateProgress(timeLeft.seconds, 60)}, 100`}
                  strokeLinecap="round"
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold"> {/* Larger text */}
                {timeLeft.seconds}
              </span>
            </div>
            <span className="text-lg mt-2 text-gray-300">Seconds</span> {/* Larger label */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;