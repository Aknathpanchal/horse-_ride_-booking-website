import React from 'react';
import { motion } from 'framer-motion';

const ConfirmationPopup = ({ bookingDetails, onClose }) => {
  return (
    <motion.div
      className="min-h-screen bg-gray-900 bg-opacity-75 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 space-y-4 w-full max-w-md mx-auto bg-opacity-90 backdrop-blur"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        <h2 className="text-3xl font-bold text-center text-green-600">Booking Confirmed!</h2>
        <p className="text-lg text-gray-700">Thank you for booking a ride with us!</p>
        <p className="text-lg text-gray-700">Horse: <span className="font-bold">{bookingDetails.horse}</span></p>
        <p className="text-lg text-gray-700">Date: <span className="font-bold">{bookingDetails.date}</span></p>
        <p className="text-lg text-gray-700">Time: <span className="font-bold">{bookingDetails.time}</span></p>
        <p className="text-lg text-gray-700">We have sent a calendar invite to <span className="font-bold">{bookingDetails.email}</span>.</p>
        <button
          onClick={onClose}
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ConfirmationPopup;
