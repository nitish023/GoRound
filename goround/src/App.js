import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Goals from './pages/Goals';
import Profile from './pages/Profile';
import './App.css';
// import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      {/* <Sidebar /> */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
