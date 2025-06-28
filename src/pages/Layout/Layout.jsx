import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import Main from "../../components/Main/Main";
import {
  Home,
  Download,
  Code,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  Sun,
  Moon,
  Users,
  UserCheck,
  Settings,
  Briefcase,
  FileText,
  Image,
  Video,
  CheckSquare,
  FormInput,
} from "lucide-react";
import HRMSDoc from "../../utils/documentation_data";

const Layout = () => {
  const [activePage, setActivePage] = useState("recruitment-setup-banklist");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Generate menu items dynamically from HRMSDoc
  const generateMenuItems = () => {
    const iconMap = {
      Recruitment: Users,
      "Employee Management": UserCheck,
      Setup: Settings,
      Process: Briefcase,
      Onboarding: UserCheck,
      Performance: Users,
    };

    return HRMSDoc.map((mainCategory) => ({
      id: mainCategory.id,
      title: mainCategory.name,
      icon: iconMap[mainCategory.name] || Home,
      items: mainCategory.subCategory.map((subCat) => ({
        id: `${mainCategory.name
          .toLowerCase()
          .replace(/\s+/g, "-")}-${subCat.name.toLowerCase()}`,
        title: subCat.name,
        items: subCat.subSubCategory.map((subSubCat) => ({
          id: `${mainCategory.name
            .toLowerCase()
            .replace(
              /\s+/g,
              "-"
            )}-${subCat.name.toLowerCase()}-${subSubCat.title.toLowerCase()}`,
          title: subSubCat.title.replace(/_/g, " "),
        })),
      })),
    }));
  };

  const menuItems = generateMenuItems();

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Find content based on activePage
  const findContentByPageId = (pageId) => {
    for (const mainCategory of HRMSDoc) {
      for (const subCategory of mainCategory.subCategory) {
        for (const subSubCategory of subCategory.subSubCategory) {
          const expectedId = `${mainCategory.name
            .toLowerCase()
            .replace(
              /\s+/g,
              "-"
            )}-${subCategory.name.toLowerCase()}-${subSubCategory.title.toLowerCase()}`;
          if (expectedId === pageId) {
            return {
              mainCategory: mainCategory.name,
              subCategory: subCategory.name,
              title: subSubCategory.title.replace(/_/g, " "),
              subTitle: subSubCategory.subTitle,
              content: subSubCategory.content,
            };
          }
        }
      }
    }
    return null;
  };

  // Render different content types
  const renderContentItem = (item, index) => {
    const baseClasses = `mb-4 p-4 rounded-lg transition-colors duration-300 ${
      isDarkMode
        ? "bg-gray-700/50 border border-gray-600"
        : "bg-gray-50 border border-gray-200"
    }`;

    switch (item.type) {
      case "text":
        return (
          <div key={index} className="mb-4">
            <div className={isDarkMode ? "text-gray-200" : "text-gray-800"}>
              {item.data ? (
                <div dangerouslySetInnerHTML={{ __html: item.data }} />
              ) : (
                <p>No content available</p>
              )}
            </div>
          </div>
        );

      case "image":
        return (
          <div key={index} className="mb-4">
            <div className="max-h-[500px] flex items-center justify-center overflow-hidden">
              {item.data ? (
                <img
                  src={item.data}
                  alt="Item"
                  className="h-auto max-h-[500px] w-auto object-contain rounded-md"
                />
              ) : (
                <span
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  No image data
                </span>
              )}
            </div>
          </div>
        );

      case "infoBox": {
        const isInfo = item.data?.trim().toLowerCase().startsWith("info:");
        const isAlert = item.data?.trim().toLowerCase().startsWith("alert:");

        // Extract message without "info:" or "alert:"
        const message = item.data?.replace(/^(info:|alert:)/i, "").trim();

        return (
          <div
            className={`flex rounded-lg p-4 items-start space-x-4 transition-colors duration-400 ${
              isDarkMode
                ? "bg-gray-500/30 border-gray-400 text-blue-300 border-r-4 border-blue-400"
                : "bg-blue-100 text-blue-700 border-r-4 border-blue-500"
            }`}
          >
            {(isInfo || isAlert) && (
              <div
                className={`text-sm font-semibold ${
                  isInfo
                    ? isDarkMode
                      ? "text-blue-300"
                      : "text-blue-700"
                    : isDarkMode
                    ? "text-red-400"
                    : "text-red-600"
                }`}
              >
                {isInfo ? "Info" : "Alert"}
              </div>
            )}

            <div
              className={`text-sm ${
                isAlert
                  ? isDarkMode
                    ? "text-red-400"
                    : "text-red-600"
                  : isDarkMode
                  ? "text-blue-300"
                  : "text-blue-700"
              }`}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          </div>
        );
      }

      case "divider":
        return (
          // Simple horizontal divider
          <hr
            className={`my-4 border-t ${
              isDarkMode ? "border-gray-700" : "border-gray-300"
            }`}
          />
        );

      case "document":
        return (
          <div key={index} className={baseClasses}>
            <div className="flex items-center mb-2">
              <FileText
                className={`w-4 h-4 mr-2 ${
                  isDarkMode ? "text-purple-400" : "text-purple-600"
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Document
              </span>
            </div>
            <p className={isDarkMode ? "text-gray-200" : "text-gray-800"}>
              {item.data || "Document will be loaded here"}
            </p>
          </div>
        );

      case "video":
        return (
          <div key={index} className={baseClasses}>
            <div className="flex items-center mb-2">
              <Video
                className={`w-4 h-4 mr-2 ${
                  isDarkMode ? "text-red-400" : "text-red-600"
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Video Content
              </span>
            </div>
            <div
              className={`h-40 rounded border-2 border-dashed flex items-center justify-center ${
                isDarkMode
                  ? "border-gray-600 bg-gray-800"
                  : "border-gray-300 bg-gray-100"
              }`}
            >
              <span
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {item.data ? "Video player will load here" : "No video data"}
              </span>
            </div>
          </div>
        );

      case "checklist":
        return (
          <div key={index} className={baseClasses}>
            <div className="flex items-center mb-2">
              <CheckSquare
                className={`w-4 h-4 mr-2 ${
                  isDarkMode ? "text-yellow-400" : "text-yellow-600"
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Checklist
              </span>
            </div>
            <p className={isDarkMode ? "text-gray-200" : "text-gray-800"}>
              {item.data || "Checklist items will be displayed here"}
            </p>
          </div>
        );

      case "form":
        return (
          <div key={index} className={baseClasses}>
            <div className="flex items-center mb-2">
              <FormInput
                className={`w-4 h-4 mr-2 ${
                  isDarkMode ? "text-indigo-400" : "text-indigo-600"
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Form
              </span>
            </div>
            <p className={isDarkMode ? "text-gray-200" : "text-gray-800"}>
              {item.data || "Form elements will be rendered here"}
            </p>
          </div>
        );

      default:
        return (
          <div key={index} className={baseClasses}>
            <p className={isDarkMode ? "text-gray-200" : "text-gray-800"}>
              Unknown content type: {item.type}
            </p>
          </div>
        );
    }
  };

  const renderContent = () => {
    const contentData = findContentByPageId(activePage);

    if (!contentData) {
      return (
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h1
              className={`text-3xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Page Not Found
            </h1>
          </div>
          <div
            className={`leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <p>The requested page could not be found.</p>
          </div>
        </div>
      );
    }

    return (
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <nav
              className={`text-sm mb-2 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {contentData.mainCategory} → {contentData.subCategory} →{" "}
              {contentData.title}
            </nav>
            <h1
              className={`text-3xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {contentData.subTitle || contentData.title}
            </h1>
          </div>
        </div>

        <div
          className={`leading-relaxed ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <div className="space-y-4">
            {contentData.content && contentData.content.length > 0 ? (
              contentData.content.map((item, index) =>
                renderContentItem(item, index)
              )
            ) : (
              <p>No content available for this section.</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex">
        {/* Sidebar renders fixed, not inline here */}
        <Sidebar
          isDarkMode={isDarkMode}
          menuItems={menuItems}
          activePage={activePage}
          setActivePage={setActivePage}
        />
        <main className="flex-1 ml-80">
          <Main isDarkMode={isDarkMode} renderContent={renderContent} />
        </main>
      </div>
    </>
  );
};

export default Layout;
