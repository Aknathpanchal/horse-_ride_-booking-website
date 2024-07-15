import React from 'react';
import { horses } from '../Data/horseData';

const LandingPage = ({ onBookNow }) => {

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg text-center min-w-[80%]">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Horse Ride Booking</h1>
        <p className="text-lg text-gray-300 mb-8">
          Experience the thrill of horse riding. Book your ride now!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {horses.map((horse, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-lg text-center">
            <img src={horse.image} alt={horse.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-4">{horse.name}</h3>
          </div>
        ))}
      </div>
        <br/>
        
        <button
      onClick={onBookNow}
      className="bg-blue-500 text-white w-full lg:w-auto py-2 px-6 rounded-lg hover:bg-blue-700 transition"
    >
     Book Now
    </button>
      </div>
    </div>
  );
};

export default LandingPage;
