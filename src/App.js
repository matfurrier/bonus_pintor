import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Profile from './pages/Profile';
import OwnerDashboard from './pages/OwnerDashboard';
import ClienteDashboard from './pages/Client';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/owner" element={<OwnerDashboard />} />
          <Route path="/client" element={<ClienteDashboard />} />
          <Route path="/" element={<Login />} /> {/* Defina o componente inicial */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
