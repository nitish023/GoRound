import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Home from './pages/Home.jsx';
import Goals from './pages/Goals.jsx';
import Profile from './pages/Profile.jsx';
import friends from './pages/Friends.jsx';

function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#FFF7E8] ">
      <Sidebar />
      <div className="flex-1 p-5 overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/friends" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
