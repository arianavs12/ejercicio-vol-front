import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import MovieDetail from './components/MovieDetail';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const label = { inputProps: { 'aria-label': 'Color switch demo' } };

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const changeTheme = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div style={{display: 'flex', flexDirection: 'row-reverse', paddingRight: '4rem', paddingTop:'1rem'}}>
          <Switch {...label} defaultChecked color="secondary" onClick={changeTheme} />
        </div>
        <div className="app-container">
          <div className="content">
            <Routes>
              <Route path="/" element={<Home darkMode={darkMode} />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
