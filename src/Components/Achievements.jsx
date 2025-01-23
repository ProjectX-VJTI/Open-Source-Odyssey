import React, { useState, useEffect } from 'react';
import { PlusCircle, PartyPopper } from 'lucide-react';
import CircularCard from './CircularCard';

const Achievements = () => {
  const [activeSection, setActiveSection] = useState('GSOC');
  const [showForm, setShowForm] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [achievementsData, setAchievementsData] = useState({
    GSOC: [
      { 
        image: 'https://i.ibb.co/jJyjcvZ/Kshitij-Shah-photoaidcom-cropped.png', 
        name: 'Kshitij Shah', 
        organization: 'Sugarlabs', 
        link: "https://github.com/kshitijdshah99/Pippy_Activity" 
      },
      { 
        image: 'https://i.ibb.co/Z6fgX5F/IMG-20231110-003535-01-01-photoaidcom-cropped.png', 
        name: 'Vedant Mehra', 
        organization: 'CERN', 
        link: "https://hepsoftwarefoundation.org/gsoc/blogs/2024/blog_SOFIE_VedantMehra.html" 
      },
      { 
        image: 'https://i.ibb.co/Sm9FtJ2/1714656497995-photoaidcom-cropped.png', 
        name: 'Mayank Palan', 
        organization: 'Red Hen Lab', 
        link: "https://medium.com/@mayankpalan066/gsoc24-with-red-hen-lab-modeling-wayfinding-cfb0131b71d1" 
      },
      { 
        image: 'https://i.ibb.co/C640S72/Scanned-20240502-1627-1-page-0001-photoaidcom-cropped.png', 
        name: 'Sharan Poojari', 
        organization: 'NumFOCUS', 
        link: "https://github.com/aiidateam/aiida-explorer/blob/gsoc/gsoc/README.md" 
      },
      { 
        image: 'https://i.ibb.co/T4D9vMh/IMG-20240502-172654-photoaidcom-cropped.png', 
        name: 'Warren Jacinto', 
        organization: 'Open Astronomy', 
        link: "https://deadspheroid.github.io/my-blog/" 
      },
      { 
        image: 'https://i.ibb.co/t3vy9D9/IMG-20240502-WA0043-2-photoaidcom-cropped.png', 
        name: 'Tvisha Vedant', 
        organization: 'INCF', 
        link: "https://tvilight4.github.io/MyBlog/" 
      },
      { 
        image: 'https://i.ibb.co/9WSz3ss/photo-photoaidcom-cropped.png', 
        name: 'Raya Chakravarthy', 
        organization: 'INCF', 
        link: "https://raya679.github.io/gsoc/" 
      }
    ],
    Hackathons: [],
    Competitions: [],
    Miscellaneous: []
  });

  const sections = [
    'GSOC',
    'Hackathons',
    'Competitions',
    'Miscellaneous'
  ];

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('achievementsData');
    if (savedData) {
      setAchievementsData(JSON.parse(savedData));
    }
  }, []);

  const handleAddAchievement = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newAchievement = {
      image: formData.get('image'),
      name: formData.get('name'),
      organization: formData.get('organization'),
      link: formData.get('link')
    };

    // Save the new achievement to localStorage without updating the state
    const savedData = localStorage.getItem('achievementsData');
    const existingData = savedData ? JSON.parse(savedData) : achievementsData;
    const updatedData = {
      ...existingData,
      [activeSection]: [...existingData[activeSection], newAchievement]
    };

    localStorage.setItem('achievementsData', JSON.stringify(updatedData));

    setSubmissionMessage('Achievement sent for review');
    setShowForm(false);
  };

  return (
    <div 
      className="min-h-screen bg-gray-900 text-gray-100 py-12"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23444444' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12 space-x-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`
                px-6 py-2 rounded-full transition-all duration-300 
                ${activeSection === section 
                  ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white shadow-lg' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 shadow-md'}
              `}
            >
              {section}
            </button>
          ))}
        </div>
        <div className="flex justify-center mb-8">
          <button 
            onClick={handleAddAchievement}
            className="
              flex items-center space-x-2 
              px-6 py-3 
              bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 
              text-white 
              rounded-full 
              hover:scale-105 
              transition-transform 
              shadow-md
            "
          >
            <PlusCircle className="mr-2" />
            Add Your Achievement
          </button>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <form 
              onSubmit={handleSubmit}
              className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
            >
              <h2 className="text-2xl mb-6 text-center">Add New Achievement</h2>
              <div className="space-y-4">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name" 
                  className="w-full p-2 bg-gray-700 rounded text-white placeholder-gray-400"
                  required
                />
                <input 
                  type="text" 
                  name="organization"
                  placeholder="Achievement" 
                  className="w-full p-2 bg-gray-700 rounded text-white placeholder-gray-400"
                  required
                />
                <input 
                  type="url" 
                  name="image"
                  placeholder="Image URL" 
                  className="w-full p-2 bg-gray-700 rounded text-white placeholder-gray-400"
                  required
                />
                <input 
                  type="url" 
                  name="link"
                  placeholder="Certificate Link" 
                  className="w-full p-2 bg-gray-700 rounded text-white placeholder-gray-400"
                  required
                />
                <button 
                  type="submit"
                  className="w-full py-2 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 text-white rounded hover:scale-105 transition-transform"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}

        {submissionMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl mb-6 flex items-center justify-center">
                {submissionMessage} <PartyPopper className="ml-2" size={24} />
              </h2>
              <button 
                onClick={() => setSubmissionMessage('')}
                className="py-2 px-6 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 text-white rounded hover:scale-105 transition-transform"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-6 px-3 gap-12 justify-center">
          <div></div>
          {achievementsData[activeSection].slice(0, 4).map((achievement, index) => (
            <CircularCard 
              key={index}
              image={achievement.image}
              name={achievement.name}
              organization={achievement.organization}
              link={achievement.link}
            />
          ))}
          <div></div>
        </div>
        <div className="grid grid-cols-7 px-6 justify-center gap-12">
          <div></div>
          <div></div>
          {achievementsData[activeSection].slice(4).map((achievement, index) => (
            <CircularCard 
              key={index}
              image={achievement.image}
              name={achievement.name}
              organization={achievement.organization}
              link={achievement.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;