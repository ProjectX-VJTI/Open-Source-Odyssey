import React, { createContext, useState } from 'react';

export const AchievementContext = createContext();

export const AchievementProvider = ({ children }) => {
  const [submittedAchievements, setSubmittedAchievements] = useState([]);
  const [approvedAchievements, setApprovedAchievements] = useState([
    {
      name: 'Kshitij Shah',
      category: 'GSOC',
      image: 'https://i.ibb.co/jJyjcvZ/Kshitij-Shah-photoaidcom-cropped.png',
      achievementDetails: 'Sugarlabs',
      link: 'https://github.com/kshitijdshah99/Pippy_Activity',
    },
    {
      name: 'Vedant Mehra',
      category: 'GSOC',
      image: 'https://i.ibb.co/Z6fgX5F/IMG-20231110-003535-01-01-photoaidcom-cropped.png',
      achievementDetails: 'CERN',
      link: 'https://hepsoftwarefoundation.org/gsoc/blogs/2024/blog_SOFIE_VedantMehra.html',
    },
    {
      name: 'Mayank Palan',
      category: 'GSOC',
      image: 'https://i.ibb.co/Sm9FtJ2/1714656497995-photoaidcom-cropped.png',
      achievementDetails: 'Red Hen Lab',
      link: 'https://medium.com/@mayankpalan066/gsoc24-with-red-hen-lab-modeling-wayfinding-cfb0131b71d1',
    },
    {
      name: 'Sharan Poojari',
      category: 'GSOC',
      image: 'https://i.ibb.co/C640S72/Scanned-20240502-1627-1-page-0001-photoaidcom-cropped.png',
      achievementDetails: 'NumFOCUS',
      link: 'https://github.com/aiidateam/aiida-explorer/blob/gsoc/gsoc/README.md',
    },
    {
      name: 'Warren Jacinto',
      category: 'GSOC',
      image: 'https://i.ibb.co/T4D9vMh/IMG-20240502-172654-photoaidcom-cropped.png',
      achievementDetails: 'Open Astronomy',
      link: 'https://deadspheroid.github.io/my-blog/',
    },
    {
      name: 'Tvisha Vedant',
      category: 'GSOC',
      image: 'https://i.ibb.co/t3vy9D9/IMG-20240502-WA0043-2-photoaidcom-cropped.png',
      achievementDetails: 'INCF',
      link: 'https://tvilight4.github.io/MyBlog/',
    },
    {
      name: 'Raya Chakravarthy',
      category: 'GSOC',
      image: 'https://i.ibb.co/9WSz3ss/photo-photoaidcom-cropped.png',
      achievementDetails: 'INCF',
      link: 'https://raya679.github.io/gsoc/',
    },
  ]);

  const submitAchievement = (achievement) => {
    setSubmittedAchievements((prev) => [...prev, achievement]);
  };

  const approveAchievement = (achievement) => {
    setApprovedAchievements((prev) => [...prev, achievement]); // Add to approvedAchievements
    setSubmittedAchievements((prev) =>
      prev.filter((item) => item !== achievement) // Remove from submittedAchievements
    );
  };

  const rejectAchievement = (achievement) => {
    setSubmittedAchievements((prev) =>
      prev.filter((item) => item !== achievement) // Remove from submittedAchievements
    );
  };

  return (
    <AchievementContext.Provider
      value={{
        submittedAchievements,
        approvedAchievements,
        submitAchievement,
        approveAchievement,
        rejectAchievement,
      }}
    >
      {children}
    </AchievementContext.Provider>
  );
};
