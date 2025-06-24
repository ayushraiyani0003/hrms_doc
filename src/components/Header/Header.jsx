import React, { useState } from 'react';
import { Search, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Searching for:', searchQuery);
  };

  const navigateToCompany = () => {
    // Navigate to company site
    window.open('https://sunchaser.com', '_blank');
  };

  return (
    <header className={`w-full px-6 py-3 shadow-lg transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gray-800 text-white border-b border-gray-700' 
        : 'bg-white text-gray-900 border-b border-gray-200'
    }`}>
      <div className="mx-5 flex items-center justify-between">
        {/* Site Logo */}
        <img
          className={`h-[35px] transition 
            ${isDarkMode 
              ? 'filter invert brightness-0 ' 
              : ''
            }`} 
          src="https://sunchaser.in/images/logo.png"
        />

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <div className={`relative rounded-full border-2 transition-colors duration-350 ${
              isDarkMode 
                ? 'border-gray-600 bg-gray-800 focus-within:border-orange-400' 
                : 'border-gray-300 bg-gray-50 focus-within:border-orange-400'
            }`}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch(e);
                  }
                }}
                placeholder="Search projects, services..."
                className={`w-full py-1 px-5 pr-12 rounded-full focus:outline-none transition-colors duration-350 ${
                  isDarkMode 
                    ? 'bg-gray-700 text-white placeholder-gray-400' 
                    : 'bg-gray-100 text-gray-900 placeholder-gray-500'
                }`}
              />
              <button
                onClick={handleSearch}
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-colors duration-300 hover:scale-110 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-orange-400 hover:bg-gray-700' 
                    : 'text-gray-500 hover:text-orange-500 hover:bg-gray-200'
                }`}
              >
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
              isDarkMode 
                ? 'bg-gray-700 text-orange-400 hover:bg-gray-700 cursor-pointer' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer'
            }`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Company Site Button */}
          <button
            onClick={navigateToCompany}
            className="px-4 py-2 bg-orange-400 text-[13px] text-white font-semibold rounded-full hover:bg-orange-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Visit Site
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;