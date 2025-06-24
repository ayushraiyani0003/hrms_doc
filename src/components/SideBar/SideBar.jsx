import React, { useState } from 'react';
import { 
  Home, 
  Download, 
  Code, 
  HelpCircle, 
  ChevronDown, 
  ChevronRight,
  Sun,
  Moon
} from 'lucide-react';

const Sidebar = ({ isDarkMode , menuItems }) => {
  const [setActiveSection] = useState('');
  const [activePage, setActivePage] = useState('introduction');
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

  const renderContent = () => {
    const contentMap = {
      'introduction': {
        title: 'Introduction',
        content: 'Welcome to our documentation! This is the introduction page where you can learn about the basics of our platform.'
      },
      'whats-new': {
        title: "What's New?",
        content: 'Check out the latest features and updates in our recent releases.'
      },
      'editor-setup': {
        title: 'Editor Setup',
        content: 'Learn how to set up your development environment and configure your editor.'
      },
      'start-project': {
        title: 'Start a New Project',
        content: 'Step-by-step guide to creating your first project with our platform.'
      },
      'components': {
        title: 'Components',
        content: 'Explore our comprehensive library of reusable components.'
      },
      'connectors': {
        title: 'Connectors',
        content: 'Learn about various connectors available for integrating with external services.'
      },
      'information-architecture': {
        title: 'Information Architecture',
        content: 'Understand how to structure and organize your application data.'
      },
      'internationalization': {
        title: 'Internationalization',
        content: 'Implement multi-language support in your applications.'
      },
      'faq': {
        title: 'FAQ',
        content: 'Find answers to frequently asked questions.'
      },
      'support': {
        title: 'Support',
        content: 'Get help and contact our support team.'
      }
    };

    const current = contentMap[activePage] || contentMap['introduction'];
    
    return (
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            {current.title}
          </h1>
          {/* Dark Mode Toggle in Content Area, Main reader part*/}
        </div>
        <div className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <p>{current.content}</p>
          <div className={`mt-8 p-6 rounded-lg border-l-4 ${
            isDarkMode 
              ? 'bg-gray-500/30 border-gray-400 text-blue-300'
              : 'bg-blue-50 border-blue-500 text-blue-700'
          }`}>
            <p className="text-sm">
              This is a dynamic content area. The content changes based on your sidebar selection without page reload.
              Dark mode is now synchronized across Header and Sidebar components using props!
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`flex h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
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
      
      {/* Main Content */}
      <div className={`flex-1 overflow-auto transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Sidebar;