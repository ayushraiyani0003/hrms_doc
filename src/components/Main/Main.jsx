import React from 'react';

function Main({ renderContent, isDarkMode }) {
  return (
    <div
      className={`flex-1 overflow-auto transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800 bg-opacity-80' : 'bg-gray-50 bg-opacity-80'
      }`}
    >
      {renderContent()}
    </div>
  );
}

export default Main;
