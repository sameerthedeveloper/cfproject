import React from 'react';

function DispayData({ data }) {
  if (!data) return null;

  const { surroundType, brand, selections } = data;

  const renderSelection = () => {
    return Object.entries(selections).map(([label, value], index) => (
      <div key={label + '-' + index} className="m-4 p-3 border border-gray-300 rounded shadow">
        <p className="font-semibold">{label}:</p>
        <p>{value || 'Not selected'}</p>
      </div>
    ));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Selected Configuration</h2>

      <div className="m-4 p-3 border border-gray-300 rounded shadow">
        <p className="font-semibold">Surround Type:</p>
        <p>{surroundType || 'Not selected'}</p>
      </div>

      <div className="m-4 p-3 border border-gray-300 rounded shadow">
        <p className="font-semibold">Brand:</p>
        <p>{brand || 'Not selected'}</p>
      </div>

      {renderSelection()}
    </div>
  );
}

export default DispayData;
