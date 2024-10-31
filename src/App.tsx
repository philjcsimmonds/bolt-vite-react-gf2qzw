import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Employees from './components/Employees';
import Recruitment from './components/Recruitment';
import Performance from './components/Performance';
import Training from './components/Training';

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/training" element={<Training />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;