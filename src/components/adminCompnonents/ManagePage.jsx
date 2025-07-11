import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import UploadScreen from "./UploadScreen";
import UploadProjector from "./UploadProjector";
import UploadSurround from "./UploadSurround";
import UploadAmplifiers from "./UploadAmplifiers";
import AddTerms from "./AddTerms";
import ManageUsers from "./ManageUsers";
import Settings from "./Settings";

const tabs = [
  { name: "Screen Sizes", component: <UploadScreen /> },
  { name: "Projectors", component: <UploadProjector /> },
  { name: "Speakers", component: <UploadSurround /> },
  { name: "Amplifiers", component: <UploadAmplifiers /> },
  { name: "Terms & Conditions", component: <AddTerms /> },
  { name: "Manage Users", component: <ManageUsers /> },
  { name: "Site Settings", component: <Settings /> },
];

const ManagePage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const currentUser = sessionStorage.getItem("cf_user");

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <h1 className="text-xl sm:text-2xl font-bold">
          Welcome, {currentUser}
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800 w-full sm:w-auto"
        >
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto space-x-2 mb-6 pb-2 scrollbar-thin scrollbar-thumb-gray-300">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`flex-shrink-0 px-4 py-2 rounded whitespace-nowrap ${
              activeTab === i
                ? "bg-amber-400 text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white border rounded shadow p-4 max-h-[75vh] overflow-y-auto">
        {tabs[activeTab].component}
      </div>
    </div>
  );
};

export default ManagePage;
