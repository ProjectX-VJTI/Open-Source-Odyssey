// --------
import React from "react";
import { Chrono } from "react-chrono";
import myHook from "./Context"; // Import the custom hook for context
import "../App.css";

const Events = () => {
  const { siteMode } = myHook(); // Get the current theme from context

  const items = [
    {
      title: "March 19 2024",
      cardTitle: "Open Source Introduction",
      cardDetailedText: "Open source software is software with source code that anyone can inspect, modify, and enhance",
      media: {
        type: "IMAGE",
        source: {
          url: "src/assets/Xplore_1.jpg",
        },
      },
    },
    {
      title: "April 24 2024",
      cardTitle: "OpenCV Workshop",
      cardDetailedText: "OpenCV is a library of programming functions mainly for real-time computer vision",
      media: {
        type: "IMAGE",
        source: {
          url: "src/assets/OpenCV.jpg",
        },
      },
    },
    {
      title: "June - July 2024",
      cardTitle: "Selection Phase for batch of 2027",
      cardDetailedText: "An exhaustive process involving tasks, proposal preparations, and interviews was carried out to shortlist Sys for the mentorship program.",
      media: {
        type: "IMAGE",
        source: {
          url: "src/assets/selection_phase.png",
        },
      },
    },
    {
      title: "July - October",
      cardTitle: "Weekly Meets and Project Development Phase",
      cardDetailedText: "Sys developed their respective projects under the mentorship of Tys, which was continuously monitored by Lys via weekly presentations.",
      media: {
        type: "IMAGE",
        source: {
          url: "src/assets/Weekly_meet.JPG",
        },
      },
    },
    {
      title: "October 19 2024",
      cardTitle: "Final Presentation",
      cardDetailedText: "The project development phase was wrapped up, and the Sys presented their work and answered the questions posed to them.",
      media: {
        type: "IMAGE",
        source: {
          url: "src/assets/final_presentation.jpeg",
        },
      },
    },
  ];

  // Theme configurations for light and dark modes
  const theme = siteMode === "dark" ? {
    primary: "#fff",
    secondary: "#e2e8f0",
    cardBgColor: "rgba(30, 41, 59, 0.8)",
    cardDetailsColor: "#e2e8f0",
    cardSubtitleColor: "#a0aec0",
    cardForeColor: "#fff",
    titleColor: "#fff",
    cardText: "#e2e8f0",
    lineColor: "#4a5568",
    dotColor: "#0b228c",
  } : {
    primary: "#1a202c",
    secondary: "#718096",
    cardBgColor: "rgba(255, 255, 255, 0.9)",
    cardDetailsColor: "#2d3748",
    cardSubtitleColor: "#4a5568",
    cardForeColor: "#1a202c",
    titleColor: "#1a202c",
    cardText:"white",
    lineColor: "#a0aec0",
    dotColor: "#2b6cb0",
  };

  return (
    <div className="relative h-[91.1vh] w-full">
      <div
        className={`absolute inset-0 ${
          siteMode === "dark"
            ? "bg-[radial-gradient(rgba(79,79,79,0.2)_1px,transparent_1px),radial-gradient(rgba(79,79,79,0.2)_1px,transparent_1px)]"
            : "bg-[radial-gradient(rgba(200,200,200,0.2)_1px,transparent_1px),radial-gradient(rgba(200,200,200,0.2)_1px,transparent_1px)]"
        } bg-[length:20px_20px]`}
      >
        <div style={{ width: "100%", height: "90vh" }} className="py-2">
          <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            disableToolbar={true}
            theme={theme}
            cardHeight={180}
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
