import React, { useState } from 'react';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? '🌞' : '🌜'}
      </button>
      <Calculator />
    </div>
  );
}

export default App;