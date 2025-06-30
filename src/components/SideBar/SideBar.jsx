import React, { useState, useEffect } from "react";
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

const Sidebar = ({ isDarkMode, menuItems, activePage, setActivePage }) => {
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedSubSections, setExpandedSubSections] = useState({});

  // Initialize expanded sections based on menuItems
  useEffect(() => {
    const initialExpanded = {};
    const initialSubExpanded = {};

    menuItems.forEach((section, sectionIndex) => {
      // Expand first section by default for better UX
      initialExpanded[section.id] = sectionIndex === 0;

      section.items.forEach((subSection, subIndex) => {
        if (subSection.items && subSection.items.length > 0) {
          // Expand first sub-section of first section by default
          initialSubExpanded[subSection.id] =
            sectionIndex === 0 && subIndex === 0;
        }
      });
    });

    // Auto-expand sections based on active page
    menuItems.forEach((section) => {
      section.items.forEach((subSection) => {
        if (subSection.items && subSection.items.length > 0) {
          // Check if any sub-sub item matches the active page
          const hasActivePage = subSection.items.some(
            (item) => item.id === activePage
          );
          if (hasActivePage) {
            initialExpanded[section.id] = true;
            initialSubExpanded[subSection.id] = true;
          }
        } else if (subSection.id === activePage) {
          // Direct sub-section match
          initialExpanded[section.id] = true;
        }
      });
    });

    // console.log('Initial Expanded Sections:', initialExpanded);
    // console.log('Initial Sub Expanded Sections:', initialSubExpanded);
    // console.log('Active Page:', activePage);
    // console.log('Menu Items:', menuItems);

    setExpandedSections(initialExpanded);
    setExpandedSubSections(initialSubExpanded);
  }, [menuItems, activePage]);

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const toggleSubSection = (subSectionId) => {
    setExpandedSubSections((prev) => ({
      ...prev,
      [subSectionId]: !prev[subSectionId],
    }));
  };

  const handleItemClick = (pageId) => {
    setActivePage(pageId);
    //console.log(`Navigating to: ${pageId}`);
  };

  const renderSubItems = (subSection, sectionId) => {
    //console.log('Rendering sub-section:', subSection.id, 'Has items:', subSection.items?.length);

    // if (!subSection.items || subSection.items.length === 0) {
    //   // Single item without sub-items
    //   return (
    //     <button
    //       key={subSection.id}
    //       onClick={() => handleItemClick(subSection.id, sectionId)}
    //       className={`w-full text-left p-2 pl-6 rounded-md text-sm transition-colors duration-400 ${
    //         activePage === subSection.id
    //           ? isDarkMode
    //             ? "bg-gray-500/30 border-gray-400 text-blue-300 border-r-4 border-blue-400"
    //             : "bg-blue-100 text-blue-700 border-r-4 border-blue-500"
    //           : isDarkMode
    //           ? "text-gray-300 hover:bg-gray-700 hover:text-white"
    //           : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
    //       }`}
    //     >
    //       {subSection.title}
    //     </button>
    //   );
    // }

    // Sub-section with nested items
    const isSubExpanded = expandedSubSections[subSection.id];
    //console.log('Sub-section expanded state:', subSection.id, isSubExpanded);

    return (
      <div key={subSection.id}>
        <button
          onClick={() => toggleSubSection(subSection.id)}
          className={`w-full flex items-center justify-between p-2 pl-6 text-left rounded-md text-sm transition-colors duration-400 ${
            isDarkMode
              ? "hover:bg-gray-700 text-gray-300"
              : "hover:bg-gray-100 text-gray-600"
          }`}
        >
          <span className="font-medium">{subSection.title}</span>
          {isSubExpanded ? (
            <ChevronDown
              size={14}
              className={isDarkMode ? "text-gray-500" : "text-gray-400"}
            />
          ) : (
            <ChevronRight
              size={14}
              className={isDarkMode ? "text-gray-500" : "text-gray-400"}
            />
          )}
        </button>

        {isSubExpanded && (
          <div className="ml-4 mt-1 space-y-1">
            {subSection.items.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id, sectionId)}
                className={`w-full text-left p-2 pl-8 rounded-md text-sm transition-colors duration-400 ${
                  activePage === item.id
                    ? isDarkMode
                      ? "bg-gray-500/30 border-gray-400 text-blue-300 border-r-4 border-blue-400"
                      : "bg-blue-100 text-blue-700 border-r-4 border-blue-500"
                    : isDarkMode
                    ? "text-gray-400 hover:bg-gray-700 hover:text-white"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                }`}
              >
                <span className="block truncate" title={item.title}>
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Add dynamic styles for sidebar scrollbar */}
      <style jsx>{`
        /* Custom scrollbar styles for sidebar */
        .sidebar-scroll-${isDarkMode ? "dark" : "light"} {
          scrollbar-width: thin;
          scrollbar-color: ${isDarkMode
            ? "#4B5563 #1F2937"
            : "#D1D5DB #F9FAFB"};
        }

        .sidebar-scroll-${isDarkMode ? "dark" : "light"}::-webkit-scrollbar {
          width: 6px;
        }

        .sidebar-scroll-${isDarkMode
            ? "dark"
            : "light"}::-webkit-scrollbar-track {
          background: ${isDarkMode ? "#1F2937" : "#F9FAFB"};
          border-radius: 3px;
        }

        .sidebar-scroll-${isDarkMode
            ? "dark"
            : "light"}::-webkit-scrollbar-thumb {
          background: ${isDarkMode ? "#4B5563" : "#D1D5DB"};
          border-radius: 3px;
          border: 1px solid ${isDarkMode ? "#374151" : "#E5E7EB"};
        }

        .sidebar-scroll-${isDarkMode
            ? "dark"
            : "light"}::-webkit-scrollbar-thumb:hover {
          background: ${isDarkMode ? "#6B7280" : "#9CA3AF"};
        }
      `}</style>

      <div
        className={`fixed left-0 top-[64px] h-[calc(100vh-64px)] w-80 shadow-lg z-40 transition-colors duration-400 ${
          isDarkMode ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        {/* Sidebar */}
        <div
          className={`fixed left-0 top-[64px] h-[calc(100vh-64px)] w-80 shadow-lg z-40 transition-colors duration-400 ${
            isDarkMode
              ? "bg-gray-800 border-r border-gray-700"
              : "bg-white border-r border-gray-200"
          }`}
        >
          <nav
            className={`p-4 pb-8 overflow-y-auto h-full sidebar-scroll-${
              isDarkMode ? "dark" : "light"
            }`}
          >
            {menuItems.map((section) => {
              const IconComponent = section.icon;
              //const isExpanded = expandedSections[section.id];

              return (
                <div
                  className={`fixed left-0 top-0 h-screen w-80 shadow-lg z-40 transition-colors duration-400 ${
                    isDarkMode
                      ? "bg-gray-800 border-r border-gray-700"
                      : "bg-white border-r border-gray-200"
                  }`}
                >
                  <nav
                    className={`p-4 pb-8 overflow-y-auto h-full sidebar-scroll-${
                      isDarkMode ? "dark" : "light"
                    }`}
                  >
                    {menuItems.map((section) => {
                      const IconComponent = section.icon;
                      const isExpanded = expandedSections[section.id];

                      return (
                        <div
                          key={section.id}
                          className="mb-2 relative top-[64px]"
                        >
                          <button
                            onClick={() => toggleSection(section.id)}
                            className={`w-full flex items-center justify-between p-3 text-left rounded-lg transition-colors duration-400 ${
                              isDarkMode
                                ? "hover:bg-gray-700 text-gray-200"
                                : "hover:bg-gray-100 text-gray-700"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <IconComponent
                                size={20}
                                className={
                                  isDarkMode ? "text-gray-400" : "text-gray-600"
                                }
                              />
                              <span className="font-semibold">
                                {section.title}
                              </span>
                            </div>
                            {isExpanded ? (
                              <ChevronDown
                                size={16}
                                className={
                                  isDarkMode ? "text-gray-500" : "text-gray-400"
                                }
                              />
                            ) : (
                              <ChevronRight
                                size={16}
                                className={
                                  isDarkMode ? "text-gray-500" : "text-gray-400"
                                }
                              />
                            )}
                          </button>

                          {isExpanded && (
                            <div className="ml-6 mt-2 space-y-1">
                              {section.items.map((subSection) =>
                                renderSubItems(subSection, section.id)
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </nav>
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
