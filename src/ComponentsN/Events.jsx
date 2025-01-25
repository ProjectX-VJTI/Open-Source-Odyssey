const EventCard = ({ color, title, desc, date}) => {
    return (
        <div className="w-full rounded-xl mt-5 shadow-md text-neutral-50 min-h-[15rem] p-3 flex flex-col justify-between" style={{backgroundColor: color}}>
            <div>
                <div className="font-poppins text-2xl font-semibold mb-2">{title}</div>
                <div className="font-monts font-medium w-3/4">{desc}</div>
            </div>
            <div className="flex items-center justify-between">
                <button className="border-2 font-semibold border-neutral-50 font-poppins px-6 py-2 font-poppins rounded-full">Learn More</button>
                <div className="font-monts font-medium">{date}</div>
            </div>
        </div>
    );
};

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

const colors = ["var(--pastel-blue)", "var(--pastel-pink)", "var(--flame)", "var(--pastel-yellow)", "var(--green)"]

const Events = () => {
    return (
        <div className="bg-[var(--platinum)]" id="events">
            <div className="bg-[url('./assets/wave-haikei.svg')] no-repeat bg-top bg-cover pt-10">
                <div className="w-3/4 mx-auto">
                    <p className="font-poppins text-4xl mb-1 font-bold">Connect with our <span className="text-[var(--chilli-red)]">mentors</span> in multiple events</p>
                    {(items.map(item =>
                        <EventCard key={item.id} title={item.cardTitle} desc={item.cardDetailedText} color={colors[item.id]} date={item.title} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;