import React from 'react';

function UnderDevelopment({ message }) {
  return (
    <div className="h-screen flex items-center justify-center bg-yellow-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold">🚧 Under Development</h1>
        <p className="mt-4 text-lg text-gray-600">{message}</p>
      </div>
    </div>
  );
}




export default UnderDevelopment;
