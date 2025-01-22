import React from 'react';

const Card = ({ image, text }) => {
  return (
    <div className="flex items-center justify-center w-full bg-gray-100 shadow-lg rounded-lg p-4">
      <img className="w-full md:w-1/2 object-cover rounded-lg" src={image} alt="Card image" />
      <div className="w-full md:w-1/2 text-left p-4 md:p-8">
        <p className="text-gray-800">{text}</p>
      </div>
    </div>
  );
};

export default Card;
