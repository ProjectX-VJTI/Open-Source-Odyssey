import React, { useState, useContext } from 'react';
import { AchievementContext } from './AchievementContext';
import AchievementForm from './AchievementForm';
import AdminApproval from './AdminApproval';
import CircularCard from './CircularCard';
import { FaPlus, FaUserCog } from 'react-icons/fa';

const Achievements = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('GSOC');
  const { approvedAchievements } = useContext(AchievementContext); // Access approvedAchievements

  const sections = ['GSOC', 'Hackathons', 'Competitions', 'Miscellaneous'];

  const handleSectionClick = (section) => {
    setSelectedCategory(section);
  };

  const handleAddAchievementClick = () => {
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  const handleAdminButtonClick = () => {
    setIsAdminModalOpen(true);
  };

  const handleAdminModalClose = () => {
    setIsAdminModalOpen(false);
  };

  // Filter approved achievements by the selected category
  const filteredAchievements = selectedCategory
    ? approvedAchievements.filter(
        (achievement) => achievement.category === selectedCategory
      )
    : [];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-12 relative">
      {/* Add your achievement button */}
      <div className="absolute top-4 left-4 group">
        <button
          onClick={handleAddAchievementClick}
          className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 ease-in-out"
        >
          <FaPlus className="text-white text-2xl" />
        </button>
        <div className="absolute top-14 left-0 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Add your achievement
        </div>
      </div>

      {/* Admin button */}
      <div className="absolute top-4 right-4 group">
        <button
          onClick={handleAdminButtonClick}
          className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 ease-in-out"
        >
          <FaUserCog className="text-white text-2xl" />
        </button>
        <div className="absolute top-14 right-0 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Admin Approval
        </div>
      </div>

      <h1 className="text-center mx-auto text-5xl font-mono py-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-red-300">
        Achievements
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-64 px-6 justify-items-center w-full max-w-6xl">
        {sections.map((section) => (
          <div
            key={section}
            onClick={() => handleSectionClick(section)}
            className={`flex text-center font-mono flex-col items-center p-4 shadow-[0_4px_14px_0_rgba(96,165,250,0.5)] w-72 bg-transparent rounded-lg transform hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer ${
              selectedCategory === section
                ? 'border-2 border-purple-400'
                : 'border-2 border-transparent'
            }`}
          >
            <h3 className="text-2xl font-bold text-purple-200">{section}</h3>
          </div>
        ))}
      </div>

      {/* Display filtered achievements */}
      {selectedCategory && (
        <div className="mt-12 w-full max-w-6xl">
          <h2 className="text-3xl font-bold text-purple-200 mb-6 text-center">
            {selectedCategory} Achievers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6 justify-items-center">
            {filteredAchievements.length > 0 ? (
              filteredAchievements.map((achievement, index) => (
                <CircularCard
                  key={index}
                  image={achievement.image}
                  name={achievement.name}
                  organization={achievement.achievementDetails}
                  link={achievement.link || '#'}
                />
              ))
            ) : (
              <p className="text-purple-200">No achievers found for this category.</p>
            )}
          </div>
        </div>
      )}

      {/* Achievement form */}
      {isFormOpen && <AchievementForm onClose={handleFormClose} />}

      {/* Admin approval modal */}
      {isAdminModalOpen && <AdminApproval onClose={handleAdminModalClose} />}
    </div>
  );
};

export default Achievements;