import React from 'react';

function Main({ renderContent, isDarkMode }) {
  return (
    <div
      className={`flex-1 overflow-auto transition-colors duration-400 ${
        isDarkMode ? 'bg-[rgba(38,52,71)]' : 'bg-gray-50 bg-opacity-80'
      }`}
    >
      {renderContent()}
    </div>
  );
}

export default Main;
