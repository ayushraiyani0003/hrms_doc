import React, { useState } from 'react';
import { 
  Home, 
  Download, 
  Code, 
  HelpCircle, 
  ChevronDown, 
  ChevronRight,
  Sun,
  Moon,
} from 'lucide-react';

const Sidebar = ({ isDarkMode , menuItems, activePage, setActivePage }) => {
  const [setActiveSection] = useState('');
  
  const [expandedSections, setExpandedSections] = useState({
    'getting-started': true,
    'installation': false,
    'api-reference': false,
    'help': false
  });

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleItemClick = (pageId, sectionId) => {
    setActivePage(pageId);
    setActiveSection(sectionId);
    console.log(`Navigating to: ${pageId}`);
  };

  

  return (
    <div className={`flex h-screen transition-colors duration-300 w-fit ${
      isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      {/* Sidebar */}
      <div className={`w-80 shadow-lg transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-800 border-r border-gray-700' 
          : 'bg-white border-r border-gray-200'
      }`}>
        <div className={`p-6 border-b transition-colors duration-300 ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="flex items-center justify-between">
            <h2 className={`text-xl font-semibold ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Documentation
            </h2>
            {/* Dark Mode Toggle in Sidebar Header */}
          </div>
        </div>
        
        <nav className="p-4">
          {menuItems.map((section) => {
            const IconComponent = section.icon;
            const isExpanded = expandedSections[section.id];
            
            return (
              <div key={section.id} className="mb-2">
                <button
                  onClick={() => toggleSection(section.id)}
                  className={`w-full flex items-center justify-between p-3 text-left rounded-lg transition-colors duration-200 ${
                    isDarkMode
                      ? 'hover:bg-gray-700 text-gray-200'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <IconComponent size={20} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
                    <span className="font-medium">{section.title}</span>
                  </div>
                  {isExpanded ? (
                    <ChevronDown size={16} className={isDarkMode ? 'text-gray-500' : 'text-gray-400'} />
                  ) : (
                    <ChevronRight size={16} className={isDarkMode ? 'text-gray-500' : 'text-gray-400'} />
                  )}
                </button>
                
                {isExpanded && (
                  <div className="ml-6 mt-1 space-y-1">
                    {section.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item.id, section.id)}
                        className={`w-full text-left p-2 pl-6 rounded-md text-sm transition-colors duration-200 ${
                          activePage === item.id
                            ? isDarkMode
                              ? 'bg-gray-500/30 border-gray-400 text-blue-300 border-r-3'
                              : 'bg-blue-100 text-blue-700 border-r-3 border-blue-500'
                            : isDarkMode
                            ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                        }`}
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;