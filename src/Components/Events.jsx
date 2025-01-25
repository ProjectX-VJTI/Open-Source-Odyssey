import React from "react";
import "../App.css";

const Events = () => {
  const items = [
    {
      id: 0,
      title: "March 19 2024",
      cardTitle: "Open Source Introduction",
      // cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to...",
      cardDetailedText: "Open source software is software with source code that anyone can inspect, modify, and enhance",
      media: {
        type: "IMAGE",
        source: {
          url: "src/assets/Xplore_1.jpg"
        }
      }
    },
    {
      id: 1,
      title: "April 24 2024",
      cardTitle: "OpenCV Workshop",
      // cardSubtitle: "OpenCV is a library of programming functions mainly for real-time computer vision..",
      cardDetailedText: "OpenCV is a library of programming functions mainly for real-time computer vision",
      media: {
        type: "IMAGE",
        source: {
          url: "src/assets/OpenCV.jpg"
        }
      }
    },
    {
      id: 2,
      title: "June - July 2024",
      cardTitle: "Selection Phase for batch of 2027",
      // cardSubtitle: "A surprise military strike by the Imperial Japanese Navy Air Service...",
      cardDetailedText: "An exhuastive process involving tasks, proposal preparations and interviews was carried out to shortlists sys for the mentorship program.",
      media: {
        type: "IMAGE",
        source: {
          url: "src/assets/selection_phase.png"
        }
      }
    },
    {
      id: 3,
      title: "July - October",
      cardTitle: "Weekly Meets and project development phase",
      // cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to...",
      cardDetailedText: "Sys developed their respective projects under the mentorship of Tys which was continuosly monitored by Lys via weekly presentations.",
      media: {
        type: "IMAGE",
        source: {
          url: "src/assets/Weekly_meet.JPG"
        }
      }
    },
    {
      id: 4,
      title: "October 19 2024",
      cardTitle: "Final Presentation",
      // cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to...",
      cardDetailedText: "The project development phase was wrapped up , here the Sys presented their work and answered the questions posed to them.",
      media: {
        type: "IMAGE",
        source: {
          url: "src/assets/final_presentation.jpeg"
        }
      }
    }
  ];

  return (
    <div className="relative h-[90vh] bg-gradient-to-b from-[var(--vanilla)] to-[#d7824a] content-center">
      <div className="p-3 max-w-full">
        
      </div>
    </div>
  )
}

export default Events;