import { Menu, Plus, Trash2, Sparkle } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

function OverlaySidebar({
  isSidebarOpen,
  setIsSidebarOpen,
  isMobile,
  sessions,
  activeSessionId,
  onDelete,
  onSelect,
  onNewChat,
  theme,
  setTheme,
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    setIsExpanded(!isExpanded);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  function item() {
    return (
      <>
        <div
          className={`h-screen bg-[#edf2fa]  dark:bg-[#233043] transition-all duration-300 flex flex-col justify-between shadow-lg fixed top-0 left-0 z-20 ${
            isExpanded ? "w-64" : "w-[72px]"
          }`}
        >
          {/* Top Controls */}
          <div
            className={`p-6 space-y-4 dark:border-gray-600  ${
              !isExpanded ? "self-center" : "w-full"
            }`}
          >
            {/* Menu Button */}
            <button
              onClick={() => setIsExpanded((prev) => !prev)}
              className="flex items-center space-x-3 bg-[#cedbf15e]  dark:bg-gray-700 dark:hover:bg-gray-800 p-3 mb-10 rounded-full shadow cursor-pointer"
            >
              <Menu size={20} />
            </button>

            {/* New Chat Button */}
            <button
              onClick={onNewChat}
              className="flex justify-center items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full shadow w-full"
            >
              <Plus size={20} />
              {isExpanded && (
                <span className="text-sm font-medium">New Chat</span>
              )}
            </button>
          </div>
          <hr className="text-[#d9dbdd] dark:text-gray-600 " />

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto px-4 mt-5">
            {isExpanded && <p className="pb-3">Chat history</p>}
            {isExpanded && (
              <ul className="space-y-2 text-sm text-gray-700 dark:text-white">
                {sessions.map(({ id, title }) => (
                  <li
                    key={id}
                    className={`flex justify-between items-center group text-gray-800  
                      dark:text-white font-medium px-6 py-3 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 ${
                        id === activeSessionId
                          ? "bg-[#cedbf15e] dark:bg-gray-700"
                          : ""
                      }`}
                    onClick={() => onSelect(id)}
                  >
                    <Sparkle className="h-4 w-4 text-blue-500 mr-2" />
                    <span className="truncate w-full pr-2">{title}</span>
                    <Trash2
                      className="h-4 w-4 text-red-400 opacity-0 group-hover:opacity-100"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDelete(id);
                      }}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Bottom Theme Toggle */}
          <div className="p-4 border-t border-[#d9dbdd] dark:border-gray-600 mb-[20%]s mb-20 md:mb-0 w-full self-center">
            <div
              onClick={toggleTheme}
              className="flex justify-center items-center space-x-3 hover:bg-[#e0e4ebfb] bg-[#cedbf15e] dark:bg-gray-700 dark:hover:bg-gray-800 p-3 rounded-full shadow w-full cursor-pointer"
            >
              <ThemeToggle theme={theme} setTheme={setTheme} />
              {isExpanded && (
                <span className="text-sm font-medium text-gray-800 dark:text-white">
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </span>
              )}
            </div>
          </div>
        </div>

        {isMobile && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-15 cursor-pointer"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            aria-label="Close sidebar"
          ></div>
        )}
      </>
    );
  }

  return (
    <aside>
      {isSidebarOpen && item()}
      {!isMobile && item()}
    </aside>
  );
}

export default OverlaySidebar;
