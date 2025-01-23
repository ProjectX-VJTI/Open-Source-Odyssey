import React from "react";
import { Chrono } from "react-chrono";
import '../App.css'

const Events = () => {
  const darkMode = localStorage.getItem('theme') === 'dark';
  const items = [
    {
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
    <div className="bg-light-gradient dark:bg-dark-gradient relative h-[91.1vh] w-full ">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(79,79,79,0.2)_1px,transparent_1px),radial-gradient(rgba(79,79,79,0.2)_1px,transparent_1px)] bg-[length:20px_20px]">
        <div style={{ width: "100%", height: "90vh", padding: "2rem" }}>

          {darkMode ? <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            disableToolbar={true}
            theme={

              {
                primary: "#fff",
                secondary: "#e2e8f0",
                cardBgColor: "rgba(30, 41, 59, 1)",
                cardDetailsColor: "#e2e8f0",
                cardSubtitleColor: "#a0aec0",
                cardForeColor: "#fff",
                titleColor: "#fff",
                lineColor: "#4a5568",
                cardText: "#e2e8f0",
                dotColor: "#0b228c",
              }
            }
            className={{
              card: "rounded-lg shadow-lg",
              cardMedia: "rounded-t-lg",
              cardSubTitle: "text-sm font-medium",
              cardTitle: "text-lg font-bold",
              controls: "my-controls",
              title: "text-2xl font-bold mb-4",
            }}
            cardHeight={180
            }
          />
            : <Chrono
              items={items}
              mode="VERTICAL_ALTERNATING"
              disableToolbar={true}
              theme={

                {
                  primary: "#0b228c",
                  secondary: "#cbd5e1",
                  cardBgColor: "#ffffff",
                  cardDetailsColor: "#1a202c",
                  cardSubtitleColor: "#4a5568",
                  cardForeColor: "#000",
                  titleColor: "#000",
                  lineColor: "#0b228c",
                  cardText: "#1a202c",
                  dotColor: "#0b228c",
                }
              }
              className={{
                card: "rounded-lg shadow-lg",
                cardMedia: "rounded-t-lg",
                cardSubTitle: "text-sm font-medium",
                cardTitle: "text-lg font-bold",
                controls: "my-controls",
                title: "text-2xl font-bold mb-4",
              }}
              cardHeight={180
              }
            />
          }



        </div>
      </div>
    </div>
  )
}

export default Events;


