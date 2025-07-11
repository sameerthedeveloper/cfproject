import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataEntryPage from './components/mainCompnonents/dataEntryPage';
import ProtectedRoute from './components/SupportComponents/ProtectedRoute';
import ManagePage from './components/adminCompnonents/ManagePage';
import MainProtect from './components/SupportComponents/mainProtect';
import StatusWrapper from './components/SupportComponents/StatusWrapper'; // ✅ NEW
// import UnderDevelopment from './components/UnderDevelopment';

function App() {
  return (
    <Router basename="/cfproject">
      <Routes>
        {/* ✅ Use wrapper that decides online/offline */}
        <Route path="/" element={<MainProtect element={<StatusWrapper />} />} />
        <Route path="/admin" element={<ProtectedRoute element={<ManagePage />} />} />
      </Routes>
    </Router>
  );
}

export default App;
