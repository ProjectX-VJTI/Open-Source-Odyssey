import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Search, X } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const LeaderboardComponent = () => {
  const [participants, setParticipants] = useState([
    { id: 1, name: 'Shivraj kolwankar', score: 1200, team: 'Code Crusaders' },
    { id: 2, name: 'Dipesh chavan', score: 1150, team: 'Tech Titans' },
    { id: 3, name: 'Nishank kalbande', score: 1100, team: 'Innovators Unite' },
    { id: 4, name: 'Uday', score: 1075, team: 'Digital Dynamos' },
    { id: 5, name: 'vedant shetye', score: 1050, team: 'Pixel Perfectors' },
    { id: 6, name: 'parmod', score: 1025, team: 'Code Breakers' },
    { id: 7, name: 'uday2.0', score: 1000, team: 'Tech Explorers' },
    { id: 8, name: 'Aayush', score: 975, team: 'Data Dynamos' },
    { id: 9, name: 'Aditya', score: 950, team: 'Innovate Inc' },
    { id: 10, name: 'Ms_7', score: 925, team: 'Pixel Pioneers' },
  ]);

  const [archivedLeaderboards, setArchivedLeaderboards] = useState([]);
  const [isLive, setIsLive] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedLeaderboards = localStorage.getItem('archivedLeaderboards');
    setArchivedLeaderboards(storedLeaderboards ? JSON.parse(storedLeaderboards) : []);
  }, []);

  const archiveCurrentLeaderboard = () => {
    const currentLeaderboard = {
      timestamp: new Date().toISOString(),
      participants: [...participants],
      eventName: 'Project X Workshop Competition',
    };

    const updatedArchives = [currentLeaderboard, ...archivedLeaderboards];
    setArchivedLeaderboards(updatedArchives);
    localStorage.setItem('archivedLeaderboards', JSON.stringify(updatedArchives));
    toast.success('Leaderboard archived successfully!');
  };

  const renderRankDisplay = (index) => {
    switch (index) {
      case 0:
        return <Trophy color="gold" size={24} />;
      case 1:
        return <Medal color="silver" size={24} />;
      default:
        return <span className="text-gray-300 ml-1 font-bold">{index + 1}</span>;
    }
  };

  const highlightText = (text, term) => {
    if (!term) return text;

    const regex = new RegExp(`(${term})`, 'gi');
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-yellow-800 font-bold ">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        background: 'linear-gradient(to bottom, #0f0e17, #232946)',
        color: '#eebbc3',
      }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      <h1
        className="text-4xl font-bold mb-6"
        style={{
          background: 'linear-gradient(90deg, #537fe7, #9a4ef9)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Project X Leaderboard
      </h1>
      <div className="w-full max-w-4xl p-6 bg-[#232946] rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search participants or teams..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 bg-[#0f0e17] text-white rounded border focus:outline-none focus:ring-2 focus:ring-[#537fe7]"
            />
            {searchTerm ? (
              <X
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                size={20}
              />
            ) : (
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            )}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsLive(true)}
              className={`px-4 py-2 rounded ${
                isLive ? 'bg-[#537fe7] text-white' : 'bg-[#9a4ef9]'
              }`}
            >
              Live Updates
            </button>
            <button
              onClick={() => setIsLive(false)}
              className={`px-4 py-2 rounded ${
                !isLive ? 'bg-[#537fe7] text-white' : 'bg-[#9a4ef9]'
              }`}
            >
              Archived Results
            </button>
            <button
              onClick={archiveCurrentLeaderboard}
              className="bg-[#eebbc3] text-[#0f0e17] px-4 py-2 rounded"
            >
              Archive
            </button>
          </div>
        </div>
        {isLive ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="overflow-auto max-h-96"
          >
            <div className="grid grid-cols-4 font-semibold bg-[#0f0e17] text-white p-2 rounded">
              <div>Rank</div>
              <div>Participant</div>
              <div>Team</div>
              <div>Score</div>
            </div>
            {participants.map((participant, index) => (
              <motion.div
                key={participant.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="grid grid-cols-4 items-center p-2 border-b border-gray-700 hover:bg-[#1e1e28]"
              >
                <div>{renderRankDisplay(index)}</div>
                <div>{highlightText(participant.name, searchTerm)}</div>
                <div>{highlightText(participant.team, searchTerm)}</div>
                <div>{highlightText(participant.score.toString(), searchTerm)}</div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div
            className="overflow-y-auto max-h-[500px] bg-[#1e1e28] p-4 rounded-lg"
            style={{ border: '1px solid #2c2c38' }}
          >
            {archivedLeaderboards.length === 0 ? (
              <div className="text-center text-gray-400">No archived leaderboards available</div>
            ) : (
              archivedLeaderboards.map((archive, index) => (
                <motion.div
                  key={index}
                  className="bg-[#232946] text-white rounded p-4 mb-4 shadow-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold">
                      {archive.eventName} - {new Date(archive.timestamp).toLocaleString()}
                    </h3>
                  </div>
                  <div className="overflow-auto max-h-60">
                    <div className="grid grid-cols-4 font-semibold bg-[#0f0e17] p-2 rounded">
                      <div>Rank</div>
                      <div>Participant</div>
                      <div>Team</div>
                      <div>Score</div>
                    </div>
                    {archive.participants.map((participant, idx) => (
                      <div
                        key={participant.id}
                        className="grid grid-cols-4 items-center p-2 border-b border-gray-700"
                      >
                        <div>{idx + 1}</div>
                        <div>{highlightText(participant.name, searchTerm)}</div>
                        <div>{highlightText(participant.team, searchTerm)}</div>
                        <div>{highlightText(participant.score.toString(), searchTerm)}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderboardComponent;
