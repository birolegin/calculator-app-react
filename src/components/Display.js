import React from 'react';

function Display({ history, result }) {
  return (
    <div className="display">
      <div className="history">{history}</div>
      <div className="result">{result}</div>
    </div>
  );
}

export default Display;