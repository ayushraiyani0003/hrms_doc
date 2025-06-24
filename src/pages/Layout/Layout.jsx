/*import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";

const Layout = ()=>{
return(
    
    <>
    <Header/>
    <Sidebar/>
    </>
)
}

export default Layout;*/

import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
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

const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  
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
  
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Sidebar isDarkMode={isDarkMode} menuItems={menuItems} />
    </>
  );
};

export default Layout;