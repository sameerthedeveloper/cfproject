import React from 'react';

const UnderDevelopment = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md">
        <div className="text-5xl mb-4 text-yellow-500">🚧</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Site Under Development</h1>
        <p className="text-gray-600 mb-6">
          We’re working hard to launch our new website. Stay tuned!
        </p>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300">
          Notify Me
        </button>
      </div>
    </div>
  );
};

export default UnderDevelopment;
