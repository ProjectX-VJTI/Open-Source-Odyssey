import React, { createContext, useState, useContext } from 'react';

const HighlightContext = createContext();

export const HighlightProvider = ({ children }) => {
  const [highlightTerm, setHighlightTerm] = useState('');

  return (
    <HighlightContext.Provider value={{ highlightTerm, setHighlightTerm }}>
      {children}
    </HighlightContext.Provider>
  );
};

export const useHighlight = () => useContext(HighlightContext);
