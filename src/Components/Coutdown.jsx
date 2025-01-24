import { color } from "framer-motion";
import CircularProgress from "./circle";

import React, { useState, useEffect } from "react";


const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const distance = new Date(targetDate).getTime() - now;

    if (distance > 0) {
      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    } else {
      return null;
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <p style={{ color: "white" }}>Time's up!</p>;
  }

  return (
    <div style={styles.container} >
      <p style={styles.timer} className="flex justify-center items-center">
      <CircularProgress value={timeLeft.hours} sym="h"/>
      <CircularProgress value={timeLeft.minutes}  sym="m"/>
      <CircularProgress value={timeLeft.seconds} sym="s" />
      </p>
     <p className = "text-2xl" style={{color: "white"}}>Hurry up! Only Limited Time Left</p>
    </div>
    
  );
};

const styles = {
  container: {
    textAlign: "center",
    background: "transparent",
    padding: "20px",
    borderRadius: "10px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "white",
  },
  timer: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
  },
};

export default Countdown;
