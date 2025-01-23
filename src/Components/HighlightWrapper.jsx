import React from 'react';
import { useHighlight } from '../context/HighlightContext';

const HighlightWrapper = ({ children }) => {
  const { highlightTerm } = useHighlight();
  // console.log("HighlightWrapper", highlightTerm);
  // console.log(children);

  if (!highlightTerm || typeof children !== 'string') {
    return children;
  }

  const parts = children.split(new RegExp(`(${highlightTerm})`, 'gi'));

  return (
    <>
      {parts.map((part, i) => 
        part.toLowerCase() === highlightTerm.toLowerCase() ?
        (
          <mark key={i} className="bg-yellow-300 bg-opacity-50 text-white rounded px-1">
            {part}
          </mark>
        ) : part
      )}
    </>
  );
};

export default HighlightWrapper;
