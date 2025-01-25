import React from 'react';
import { Link } from 'react-router-dom';

const CardRow = () => {
  const descriptions = [
    {
      desc: "Click "
    },
    {
      desc: ""
    }
  ]

  return (
    <div className="relative h-[90vh] w-full bg-transparent">
      <div className="h-[90vh] bg-gradient-to-b from-[var(--vanilla)] to-[#d7824a]">
        <div className="flex flex-row w-4/5 mx-auto">
          <div className="w-1/2 m-6 flex justify-center items-center p-4">
            <Card title="Upcoming Project 2k24" link="/upcoming-projects" />
          </div>
          <div className="w-1/2 m-6 flex justify-center items-center p-4">
            <Card title="Past Projects" link="/past-projects" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, link, desc }) => {
  return (
    <div className="w-full rounded-lg p-3 backdrop-blur-sm overflow-hidden flex-col justify-between transform hover:scale-105 transition duration-500 ease-in-out shadow-lg">
      <div className="bg-glass">
        <div>
          <h5 className=" text-center font-bold text-3xl font-poppins text-[var(--rich-black)]">{title}</h5>
        </div>
        <p className="text-[var(--rich-black)] pt-3 font-monts">

          {desc}

        </p>
      </div>
      <Link to={link} className="block rounded-lg text-center font-poppins border-2 border-[var(--rich-black)] py-3">
        Read more
      </Link>
    </div>
  );
};

export default CardRow;
