import React, { forwardRef } from "react";

const Main = forwardRef(({ renderContent, isDarkMode }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex-1 overflow-y-auto transition-colors duration-400 ${
        isDarkMode ? "bg-[rgba(38,52,71)]" : "bg-gray-50 bg-opacity-80"
      }`}
    >
      {renderContent()}
    </div>
  );
});

Main.displayName = "Main";

export default Main;
