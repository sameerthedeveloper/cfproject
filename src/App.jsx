import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataEntryPage from './components/mainCompnonents/dataEntryPage';
import ProtectedRoute from './components/SupportComponents/ProtectedRoute';
import ManagePage from './components/adminCompnonents/ManagePage'; // 👈 New import
import MainProtect from './components/SupportComponents/mainProtect'; // 👈 New import
import SpeakersList from './components/mainCompnonents/SpeakersList'
// import UnderDevelopment from './components/UnderDevelopment';

function App() {
  return (
    <Router basename="/cfproject">
      <Routes>
        <Route path='/main' element={<SpeakersList/>}/>
        {/* <Route path="/" element={<UnderDevelopment />} /> */}
        <Route path="/" element={<MainProtect element={<DataEntryPage />} />} />
        <Route path="/admin" element={<ProtectedRoute element={<ManagePage />} />} />
      </Routes>
    </Router>
  );
}

export default App;
