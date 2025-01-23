import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useHighlight } from '../context/HighlightContext';

const Search = ({ searchQuery, setSearchQuery, searchResults }) => {
  const navigate = useNavigate();
  const { setHighlightTerm } = useHighlight();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setHighlightTerm(value);
  };

  const handleSearchClick = (path) => {
    setSearchQuery('');
    setHighlightTerm('');
    navigate(path);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="px-4 py-2 rounded-lg bg-gray-700 text-white w-64"
      />
      {searchQuery && searchResults.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-gray-800 rounded-lg shadow-lg z-50">
          {searchResults.map((result, index) => (
            <div
              key={index}
              onClick={() => handleSearchClick(result.path)}
              className="p-3 hover:bg-gray-700 cursor-pointer"
            >
              <div className="text-white font-medium">{result.title}</div>
              <div className="text-gray-400 text-sm">{result.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
