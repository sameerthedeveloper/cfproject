// components/ManagePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import UploadScreen from './UploadScreen';
import UploadProjector from './UploadProjector';
import UploadSurround from './UploadSurround';
import UploadAmplifiers from './UploadAmplifiers'; // ✅ Correct import
import AddTerms from './AddTerms';
import ManageUsers from './ManageUsers';

const tabs = [
  { name: 'Screen Sizes', component: <UploadScreen /> },
  { name: 'Projectors', component: <UploadProjector /> },
  { name: 'Speakers', component: <UploadSurround /> },
  { name: 'Amplifiers', component: <UploadAmplifiers /> },
  { name: 'Terms & Conditions', component: <AddTerms /> },
  { name: 'Manage Users', component: <ManageUsers/>}, // Placeholder for ManageUsers component
];

const ManagePage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const currentUser = sessionStorage.getItem('cf_user');

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <div className="p-4 mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Welcome, {currentUser}</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800"
        >
          Logout
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 rounded ${
              activeTab === i
                ? 'bg-amber-400 text-white'
                : 'bg-gray-200 text-black hover:bg-gray-300'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="bg-white border rounded shadow p-4 overflow-y-auto h-[80vh]">
        {tabs[activeTab].component}
      </div>
    </div>
  );
};

export default ManagePage;
