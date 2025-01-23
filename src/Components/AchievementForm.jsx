import React, { useState, useContext } from 'react';
import { AchievementContext } from './AchievementContext';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import { FaTimes } from 'react-icons/fa'; // Import close icon

const AchievementForm = ({ onClose }) => {
  const { submitAchievement } = useContext(AchievementContext);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    image: '',
    achievementDetails: '',
    link: '',
  });

  const categories = ['GSOC', 'Hackathons', 'Competitions', 'Miscellaneous'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting achievement:', formData);
    submitAchievement(formData); // Submit the achievement

    // Custom dark blue toast
    toast.info('Your application will be reviewed.', {
      position: 'bottom-right',
      autoClose: 5000, // Close the toast after 5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        background: '#1e3a8a', // Dark blue background
        color: '#ffffff', // White text
      },
      progressStyle: {
        background: '#3b82f6', // Blue progress bar
      },
    });

    onClose(); // Close the form
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md border border-white/20 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-purple-200 hover:text-purple-400 transition-colors duration-200"
        >
          <FaTimes className="text-2xl" />
        </button>

        <h2 className="text-2xl font-bold text-purple-200 mb-6">Add Achievement</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-purple-200 font-mono font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/10 text-purple-200 placeholder-purple-300"
              required
              placeholder="Enter name"
            />
          </div>

          {/* Category Field */}
          <div className="mb-4">
            <label className="block text-purple-200 font-mono font-bold mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-700 text-purple-200"
              required
            >
              <option value="" disabled className="bg-gray-700 text-purple-200">
                Select category
              </option>
              {categories.map((category) => (
                <option key={category} value={category} className="bg-gray-700 text-purple-200">
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Image URL Field */}
          <div className="mb-4">
            <label className="block text-purple-200 font-mono font-bold mb-2">Image URL</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/10 text-purple-200 placeholder-purple-300"
              required
              placeholder="Enter image URL"
            />
          </div>

          {/* Achievement Details Field */}
          <div className="mb-4">
            <label className="block text-purple-200 font-mono font-bold mb-2">
              Achievement Details
            </label>
            <input
              type="text"
              name="achievementDetails"
              value={formData.achievementDetails}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/10 text-purple-200 placeholder-purple-300"
              required
              placeholder="Enter achievement details"
            />
          </div>

          {/* Achievement Link Field */}
          <div className="mb-6">
            <label className="block text-purple-200 font-mono font-bold mb-2">
              Achievement Link
            </label>
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/10 text-purple-200 placeholder-purple-300"
              required
              placeholder="Enter achievement link"
            />
          </div>

          {/* Form Buttons */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 px-4 py-2 text-purple-200 font-mono font-bold rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-mono font-bold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AchievementForm;