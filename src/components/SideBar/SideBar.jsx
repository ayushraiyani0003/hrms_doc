import React, { useState } from 'react';
import { 
  Home, 
  Download, 
  Code, 
  HelpCircle, 
  ChevronDown, 
  ChevronRight,
  Play,
  FileText,
  Settings,
  Layers,
  Link,
  Database,
  Globe,
  MessageCircle,
  LifeBuoy
} from 'lucide-react';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [activePage, setActivePage] = useState('introduction');
  const [expandedSections, setExpandedSections] = useState({
    'getting-started': true,
    'installation': false,
    'api-reference': false,
    'help': false
  });

  const menuItems = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Home,
      items: [
        { id: 'introduction', title: 'Introduction' },
        { id: 'whats-new', title: "What's new?" }
      ]
    },
    {
      id: 'installation',
      title: 'Installation',
      icon: Download,
      items: [
        { id: 'editor-setup', title: 'Editor Setup' },
        { id: 'start-project', title: 'Start a new Project' }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: Code,
      items: [
        { id: 'components', title: 'Components' },
        { id: 'connectors', title: 'Connectors' },
        { id: 'information-architecture', title: 'Information architecture' },
        { id: 'internationalization', title: 'Internationalization' }
      ]
    },
    {
      id: 'help',
      title: 'Help',
      icon: HelpCircle,
      items: [
        { id: 'faq', title: 'FAQ' },
        { id: 'support', title: 'Support' }
      ]
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleItemClick = (pageId, sectionId) => {
    setActivePage(pageId);
    setActiveSection(sectionId);
    // Here you would typically handle routing
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
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{current.title}</h1>
        <div className="text-gray-600 leading-relaxed">
          <p>{current.content}</p>
          <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-blue-700">
              This is a dynamic content area. The content changes based on your sidebar selection without page reload.
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Documentation</h2>
        </div>
        
        <nav className="p-4">
          {menuItems.map((section) => {
            const IconComponent = section.icon;
            const isExpanded = expandedSections[section.id];
            
            return (
              <div key={section.id} className="mb-2">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-3 text-left rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <IconComponent size={20} className="text-gray-600" />
                    <span className="font-medium text-gray-700">{section.title}</span>
                  </div>
                  {isExpanded ? (
                    <ChevronDown size={16} className="text-gray-400" />
                  ) : (
                    <ChevronRight size={16} className="text-gray-400" />
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
                            ? 'bg-blue-100 text-blue-700 border-r-3 border-blue-500'
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
      <div className="flex-1 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default Sidebar;