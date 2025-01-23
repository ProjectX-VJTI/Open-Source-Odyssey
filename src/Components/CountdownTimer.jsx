import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    console.log(timeLeft); // Debugging: Check the value of timeLeft
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="text-2xl font-bold mx-2 text-white bg-gray-800/50 p-2 rounded-lg">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="text-center my-8">
        (
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              The event Open-Source Odyssey has been started!
            </h3>
            <p className="text-xl text-gray-200">
              Join us now and be part of this exciting journey!
            </p>
          </div>
        )
      <h2 className="text-3xl font-bold mb-4 text-white">Time Remaining</h2>
      <div className="flex justify-center">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;

