import React, { useState } from "react";
import { motion } from "framer-motion";
import { generateCalendarInvite } from "../utils/calendar";
import { horses } from "../Data/horseData";

const BookingForm = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    horse: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateCalendarInvite(formData);
    onSubmit(formData);
  };

  const handleBack = () => {
    onBack();
  };

  const timeslots = [
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
  ];

  const getAvailableTimeSlots = () => {
    const selectedDate = new Date(formData.date);
    const dayOfWeek = selectedDate.getUTCDay(); // 0 is Sunday, 6 is Saturday

    // Allow time slots only on weekdays and Saturdays between 3 PM - 12 AM
    if (dayOfWeek >= 1 && dayOfWeek <= 6) {
      return timeslots;
    }
    return [];
  };

  const isSunday = new Date(formData.date).getUTCDay() === 0;

  return (
    <motion.div
      className="min-h-screen bg-gray-900 bg-opacity-75 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-6 w-full lg:max-w-[60%] md:max-w-[75%] sm:max-w-[90%] mx-auto overflow-y-auto max-h-screen bg-opacity-90 backdrop-blur">
        <label
          htmlFor="my-modal-3"
          onClick={handleBack}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>
        <h2 className="text-3xl font-bold text-center">Book Your Ride</h2>
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-lg">Name</label>
            <input
              className="w-full border rounded-lg p-2"
              value={formData.name}
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="enter name here..."
              required
            />
          </div>

          <div className="col-span-1">
            <label className="block mb-2 text-lg">Email</label>
            <input
              type="email"
              name="email"
              placeholder="enter email here..."
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          <div className="col-span-1">
            <label className="block mb-2 text-lg">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="enter mobile number here..."
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-lg">Selected Horse</label>
            <select
              name="horse"
              value={formData.horse}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              required
            >
              <option value="">Choose A Horse...</option>
              {horses.map((slot, index) => (
                <option key={index} value={slot.name}>
                  {slot.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 text-lg">Select Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border-blue-300 rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-lg">Select Time</label>
            {isSunday ? (
              <p className="text-red-600">Booking is not available on Sundays.</p>
            ) : (
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
                required
              >
                <option value="">Select a time</option>
                {getAvailableTimeSlots().map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 transition lg:col-start-2"
            disabled={isSunday}
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default BookingForm;
