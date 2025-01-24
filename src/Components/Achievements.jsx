import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import toast, { Toaster } from 'react-hot-toast';

const AchievementsPage = () => {
  const [showForm, setShowForm] = useState(false); // For toggling the modal form
  const [sections, setSections] = useState({}); // Dynamic sections

  // Load sections from localStorage on component mount
  useEffect(() => {
    const savedSections = localStorage.getItem('sections');
    if (savedSections) {
      setSections(JSON.parse(savedSections));
    }
  }, []);

  const handleAddEntry = (sectionName, newEntry) => {
    setSections((prevSections) => {
      const updatedSections = { ...prevSections };
      if (!updatedSections[sectionName]) {
        updatedSections[sectionName] = [];
      }
      updatedSections[sectionName].push(newEntry);
      localStorage.setItem('sections', JSON.stringify(updatedSections));
      return updatedSections;
    });

    setShowForm(false);
    // Show success toast
    toast.success('Achievement added successfully! 🎉');
  };

  return (
    <div className="relative bg-transparent min-h-screen w-full flex flex-col items-center">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Header Section */}
      <div className="w-full text-center py-16">
        <h1 className="text-bounce text-6xl font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          <Typewriter
            options={{
              strings: ['Achievements'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>

      {/* Add Button */}
      <button
        onClick={() => setShowForm(true)}
        className="absolute top-16 right-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-xl transform hover:scale-105 transition-transform"
      >
        + Add Achievement
      </button>

      {/* Achievements Sections */}
      <div className="w-full px-12 py-8 space-y-12">
        {Object.keys(sections).length > 0 ? (
          Object.entries(sections).map(([section, entries], index) => (
            <div key={index}>
              <div className="flex justify-center">
                <h2 className="inline-block text-5xl font-mono py-3 font-bold mb-6 text-pink-300 border-b-4 border-blue-600">
                  {section}
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {entries.map((entry, i) => (
                  <AchievementCard
                    key={i}
                    title={entry.title}
                    description={entry.description}
                    participants={entry.participants}
                    branch={entry.branch}
                    image={entry.image}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 text-xl font-mono">
            No entries yet. Add some achievements or competitions!
          </p>
        )}
      </div>

      {/* Form Modal */}
      {showForm && (
        <FormModal
          sections={Object.keys(sections)}
          onClose={() => setShowForm(false)}
          onSubmit={handleAddEntry}
        />
      )}
    </div>
  );
};

const AchievementCard = ({ title, description, participants, branch, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="ml-[15%] shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 border border-gray-200 w-80"
      style={{
        background: 'linear-gradient(to bottom, #0f0e17, #232946)',
        color: '#eebbc3',
      }}
    >
      {image && (
        <div className="relative">
          <img src={image} alt={title} className="w-full h-40 object-cover" />
        </div>
      )}
      <div className="p-4 bg-transparent">
        <h3 className="text-2xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-1">
          {title}
        </h3>
        <p className="text-md text-gray-350 font-semibold mb-2">
          Participants: {participants}
        </p>
        <p className="text-md text-gray-350 font-semibold mb-2">
          Branch: {branch}
        </p>
        <div className="text-md text-gray-350 font-semibold mb-2">
          <span className="font-bold">Description:</span>
          <p
            className={`${
              isExpanded ? 'whitespace-normal' : 'overflow-hidden text-ellipsis max-h-12'
            } break-words`}
          >
            {description}
          </p>
          <div className="text-right mt-2">
            <button
              onClick={toggleDescription}
              className="py-1 text-indigo-300 text-sm uppercase hover:underline"
            >
              {isExpanded ? 'Show Less' : 'Read More'} <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormModal = ({ sections, onClose, onSubmit }) => {
  const [isNewSection, setIsNewSection] = useState(true);
  const [sectionName, setSectionName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [participants, setParticipants] = useState('');
  const [branch, setBranch] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the description length (less than 30 words)
    const descriptionWordCount = description.trim().split(/\s+/).length;
    if (descriptionWordCount > 30) {
      alert('Description must be less than 30 words.');
      return;
    }

    const newEntry = { title, description, participants, branch, image };
    if (isNewSection) {
      onSubmit(sectionName, newEntry); // Add to new section
    } else {
      onSubmit(sectionName, newEntry); // Add to selected section
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-1/3">
        {/* Close button at the top-right */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg font-bold"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold text-center mb-4">
          {isNewSection ? 'Add New Section' : 'Add Entry to Section'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {isNewSection ? (
            <div>
              <label className="block font-semibold">Section Name</label>
              <input
                type="text"
                value={sectionName}
                onChange={(e) => setSectionName(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          ) : (
            <div>
              <label className="block font-semibold">Select Section</label>
              <select
                value={sectionName}
                onChange={(e) => setSectionName(e.target.value)}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">-- Select a Section --</option>
                {sections.map((section, index) => (
                  <option key={index} value={section}>
                    {section}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div>
            <label className="block font-semibold">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded"
              required
            ></textarea>
          </div>
          <div>
            <label className="block font-semibold">Participants</label>
            <input
              type="text"
              value={participants}
              onChange={(e) => setParticipants(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Branch</label>
            <input
              type="text"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter image URL"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => {
                setIsNewSection(!isNewSection);
                setSectionName('');
              }}
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
            >
              {isNewSection ? 'Add to Existing Section' : 'Create New Section'}
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Add Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AchievementsPage;
