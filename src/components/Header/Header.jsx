import React, { useState, useRef, useEffect } from "react";
import { Search, Sun, Moon, ChevronRight } from "lucide-react";

const Header = ({ isDarkMode, toggleDarkMode, menuItems, setActivePage }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Generate search suggestions from menuItems with proper nested structure
  const generateSuggestionData = () => {
    if (!menuItems || menuItems.length === 0) return {};

    const suggestionData = {};

    menuItems.forEach((mainCategory) => {
      const categoryItems = [];

      mainCategory.items.forEach((subCategory) => {
        if (subCategory.items && subCategory.items.length > 0) {
          // Has sub-items (subSubCategory level)
          subCategory.items.forEach((subSubItem) => {
            categoryItems.push({
              name: subSubItem.title,
              category: `${mainCategory.title} → ${subCategory.title}`,
              id: subSubItem.id,
              image: null,
              path: [mainCategory.title, subCategory.title, subSubItem.title],
              searchTerms: [
                subSubItem.title.toLowerCase(),
                subCategory.title.toLowerCase(),
                mainCategory.title.toLowerCase(),
                // Add individual words for better matching
                ...subSubItem.title.toLowerCase().split(/\s+/),
                ...subCategory.title.toLowerCase().split(/\s+/),
                ...mainCategory.title.toLowerCase().split(/\s+/),
              ],
            });
          });
        } else {
          // Direct item without sub-items
          categoryItems.push({
            name: subCategory.title,
            category: mainCategory.title,
            id: subCategory.id,
            image: null,
            path: [mainCategory.title, subCategory.title],
            searchTerms: [
              subCategory.title.toLowerCase(),
              mainCategory.title.toLowerCase(),
              // Add individual words for better matching
              ...subCategory.title.toLowerCase().split(/\s+/),
              ...mainCategory.title.toLowerCase().split(/\s+/),
            ],
          });
        }
      });

      if (categoryItems.length > 0) {
        suggestionData[mainCategory.title] = {
          items: categoryItems,
        };
      }
    });

    return suggestionData;
  };

  const suggestionData = generateSuggestionData();

  // Improved filter function with better search logic
  const getFilteredSuggestions = () => {
    if (!searchQuery.trim()) return suggestionData;

    const searchLower = searchQuery.toLowerCase().trim();
    const searchWords = searchLower
      .split(/\s+/)
      .filter((word) => word.length > 0);

    const filtered = {};

    Object.keys(suggestionData).forEach((category) => {
      const filteredItems = suggestionData[category].items.filter((item) => {
        // Check if any search word matches any of the item's search terms
        return (
          searchWords.some((searchWord) =>
            item.searchTerms.some(
              (term) => term.includes(searchWord) || searchWord.includes(term)
            )
          ) ||
          // Also check for exact phrase matches
          item.searchTerms.some((term) => term.includes(searchLower)) ||
          // Check if the search query matches the beginning of any term
          item.searchTerms.some((term) => term.startsWith(searchLower))
        );
      });

      if (filteredItems.length > 0) {
        filtered[category] = {
          ...suggestionData[category],
          items: filteredItems,
        };
      }
    });

    return filtered;
  };

  const filteredSuggestions = getFilteredSuggestions();
  const allSuggestions = Object.values(filteredSuggestions).flatMap(
    (cat) => cat.items
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setShowSuggestions(false);
    // If there are suggestions and no specific selection, navigate to first result
    if (allSuggestions.length > 0 && setActivePage) {
      setActivePage(allSuggestions[0].id);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(true);
    setSelectedIndex(-1);
  };

  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < allSuggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0) {
          selectSuggestion(allSuggestions[selectedIndex]);
        } else {
          handleSearch(e);
        }
        break;
      case "Escape":
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const selectSuggestion = (suggestion) => {
    setSearchQuery(suggestion.name);
    setShowSuggestions(false);
    if (setActivePage) {
      setActivePage(suggestion.id);
    }
  };

  const navigateToCompany = () => {
    window.open("http://192.168.10.132:3001/", "_blank");
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full px-6 py-3 shadow-lg transition-colors duration-400  ${
        isDarkMode
          ? "bg-gray-800 text-white border-b border-gray-700"
          : "bg-white text-gray-900 border-b border-gray-200"
      }`}
    >
      <div className="mx-5 flex items-center justify-between">
        {/* Site Logo */}
        <img
          className={`h-[40px] transition ${
            isDarkMode ? "filter invert brightness-0" : ""
          }`}
          src="https://sunchaser.in/images/logo.png"
          alt="Logo"
        />

        {/* Search Bar with Suggestions */}
        <div className="flex-1 max-w-md mx-8 relative" ref={searchRef}>
          <div className="relative">
            <div
              className={`relative rounded-full border-2 transition-colors duration-400 ${
                isDarkMode
                  ? "border-gray-600 bg-gray-800 focus-within:border-orange-400"
                  : "border-gray-300 bg-gray-50 focus-within:border-orange-400"
              }`}
            >
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onKeyDown={handleKeyDown}
                placeholder="Search documentation, topics..."
                className={`w-full py-1 px-5 pr-12 rounded-full focus:outline-none transition-colors duration-400 ${
                  isDarkMode
                    ? "bg-gray-700 text-white placeholder-gray-400"
                    : "bg-gray-100 text-gray-900 placeholder-gray-500"
                }`}
              />
              <button
                onClick={handleSearch}
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-colors duration-400 hover:scale-110 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-orange-400"
                    : "text-gray-500 hover:text-orange-500"
                }`}
              >
                <Search size={20} />
              </button>
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && (
              <div
                ref={suggestionsRef}
                className={`absolute top-full left-0 right-0 mt-2 rounded-xl shadow-2xl border z-50 max-h-96 overflow-y-auto ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-600"
                    : "bg-white border-gray-200"
                }`}
              >
                {Object.keys(filteredSuggestions).length > 0 ? (
                  Object.entries(filteredSuggestions).map(
                    ([category, data]) => (
                      <div key={category} className="p-2">
                        {/* Category Header */}
                        <div
                          className={`flex items-center px-3 py-2 text-sm font-semibold ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {category}
                        </div>

                        {/* Category Items */}
                        {data.items.map((item, itemIndex) => {
                          const globalIndex =
                            Object.values(filteredSuggestions)
                              .slice(
                                0,
                                Object.keys(filteredSuggestions).indexOf(
                                  category
                                )
                              )
                              .reduce((acc, cat) => acc + cat.items.length, 0) +
                            itemIndex;

                          return (
                            <div
                              key={`${category}-${itemIndex}`}
                              onClick={() => selectSuggestion(item)}
                              className={`flex items-center justify-between px-4 py-3 mx-1 rounded-lg cursor-pointer transition-all duration-400 ${
                                selectedIndex === globalIndex
                                  ? isDarkMode
                                    ? "bg-gray-700 text-orange-400"
                                    : "bg-orange-50 text-orange-600"
                                  : isDarkMode
                                  ? "hover:bg-gray-700 text-gray-200"
                                  : "hover:bg-gray-50 text-gray-800"
                              }`}
                            >
                              <div className="flex items-center flex-1 min-w-0">
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium truncate">
                                    {item.name}
                                  </div>
                                  <div
                                    className={`text-sm truncate ${
                                      isDarkMode
                                        ? "text-gray-400"
                                        : "text-gray-500"
                                    }`}
                                  >
                                    {item.category}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center space-x-2 ml-3">
                                {item.image && (
                                  <img
                                    src={item.image}
                                    alt=""
                                    className="w-8 h-8 rounded-lg object-cover"
                                  />
                                )}
                                <ChevronRight
                                  size={14}
                                  className={`${
                                    isDarkMode
                                      ? "text-gray-500"
                                      : "text-gray-400"
                                  }`}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )
                  )
                ) : (
                  <div
                    className={`p-6 text-center ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <Search size={24} className="mx-auto mb-2 opacity-50" />
                    <div className="text-sm">No results found</div>
                    <div className="text-xs mt-1">
                      Try searching with different keywords
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-all duration-400 hover:scale-110 ${
              isDarkMode
                ? "bg-gray-700 text-orange-400 hover:bg-gray-700 cursor-pointer"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer"
            }`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Company Site Button */}
          <button
            onClick={navigateToCompany}
            className=" px-5 py-2 bg-orange-400 text-[15px] text-white font-semibold rounded-full hover:bg-orange-500 transition-all duration-400 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Visit Site
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
