import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataEntryPage from './components/dataEntryPage';
import ProtectedRoute from './components/ProtectedRoute';
import ManagePage from './components/ManagePage'; // 👈 New import
import MainProtect from './components/mainProtect'; // 👈 New import

function App() {
  return (
    <Router basename="/cfproject">
      <Routes>
        <Route path="/" element={<MainProtect element={<DataEntryPage />} />} />
        <Route path="/admin" element={<ProtectedRoute element={<ManagePage />} />} />
      </Routes>
    </Router>
  );
}

export default App;
