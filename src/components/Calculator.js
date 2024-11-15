import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.css';

function Calculator() {
  const [history, setHistory] = useState('');
  const [result, setResult] = useState('');
  const [pastResults, setPastResults] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const handleButtonClick = (label) => {
    if (label === '=') {
      try {
        const evaluatedResult = eval(history.replace(/×/g, '*').replace(/÷/g, '/'));
        setResult(evaluatedResult);

        const newPastResults = [{ history, result: evaluatedResult }, ...pastResults];
        if (newPastResults.length > 3) newPastResults.pop();
        setPastResults(newPastResults);

      } catch {
        setResult('Error');
      }
    } else if (label === 'AC') {
      setHistory('');
      setResult('');
    } else if (label === '±') {
      setHistory(history ? `${-1 * parseFloat(history)}` : '');
    } else if (label === 'History') {
      setShowHistory(!showHistory);
    } else {
      setHistory(history + label);
    }
  };

  return (
    <div className={`calculator ${darkMode ? 'dark' : ''}`}>
      <div className="top-bar">
        <div className="mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          <span role="img" aria-label="light">🌞</span> / <span role="img" aria-label="dark">🌜</span>
        </div>
        <div className="history-icon" onClick={() => setShowHistory(!showHistory)}>🕒</div>
      </div>

      <Display history={history} result={result} />

      <div className="buttons">
        {['AC', '(', ')', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '00', '.', '='].map((btn) => (
          <Button key={btn} label={btn} onClick={handleButtonClick} />
        ))}
      </div>

      {showHistory && (
        <div className="past-results">
          <h4>History</h4>
          {pastResults.map((item, index) => (
            <div key={index}>
              <div>{item.history}</div>
              <div>= {item.result}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Calculator;