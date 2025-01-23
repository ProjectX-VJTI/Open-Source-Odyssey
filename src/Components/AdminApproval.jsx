import React, { useContext } from 'react';
import { AchievementContext } from './AchievementContext';

const AdminApproval = ({ onClose }) => {
  const { submittedAchievements, approveAchievement, rejectAchievement } =
    useContext(AchievementContext);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-4xl border border-white/20">
        <h2 className="text-3xl font-bold text-purple-200 mb-8">Admin Approval</h2>
        {submittedAchievements.length === 0 ? (
          <p className="text-purple-200">No achievements to approve.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {submittedAchievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-white/20"
              >
                <h3 className="text-xl font-bold text-purple-200 mb-2">
                  {achievement.name}
                </h3>
                <p className="text-purple-200 mb-2">
                  <strong>Category:</strong> {achievement.category}
                </p>
                <p className="text-purple-200 mb-2">
                  <strong>Details:</strong> {achievement.achievementDetails}
                </p>
                <img
                  src={achievement.image}
                  alt={achievement.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => approveAchievement(achievement)}
                    className="px-4 py-2 bg-green-600 text-white font-mono font-bold rounded-lg hover:bg-green-700 transition-all duration-200"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => rejectAchievement(achievement)}
                    className="px-4 py-2 bg-red-600 text-white font-mono font-bold rounded-lg hover:bg-red-700 transition-all duration-200"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-mono font-bold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminApproval;