import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import Main from "../../components/Main/Main"
import {
  Home,
  Download,
  Code,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  Sun,
  Moon,
} from "lucide-react";

const Layout = () => {
  const [activePage, setActivePage] = useState('introduction');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const menuItems = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: Home,
      items: [
        { id: "introduction", title: "Introduction" },
        { id: "whats-new", title: "What's new?" },
      ],
    },
    {
      id: "installation",
      title: "Installation",
      icon: Download,
      items: [
        { id: "editor-setup", title: "Editor Setup" },
        { id: "start-project", title: "Start a new Project" },
      ],
    },
    {
      id: "api-reference",
      title: "API Reference",
      icon: Code,
      items: [
        { id: "components", title: "Components" },
        { id: "connectors", title: "Connectors" },
        { id: "information-architecture", title: "Information architecture" },
        { id: "internationalization", title: "Internationalization" },
      ],
    },
    {
      id: "help",
      title: "Help",
      icon: HelpCircle,
      items: [
        { id: "faq", title: "FAQ" },
        { id: "support", title: "Support" },
      ],
    },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
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
          {/* Print Button */}
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
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex flex-row" >
        <Sidebar isDarkMode={isDarkMode} menuItems={menuItems} activePage={activePage} setActivePage={setActivePage}/>
        <Main isDarkMode={isDarkMode} renderContent={renderContent} />
      </div>
    </>
  );
};

export default Layout;
