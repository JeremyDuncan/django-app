// src/App.js
import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomeContent from './components/Home/HomeContent';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setDarkMode(localStorage.getItem('darkMode') === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const customTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Router>
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <Routes>
          <Route path="/" element={<HomeContent />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
