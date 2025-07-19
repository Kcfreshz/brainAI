// import { Menu, Plus, Moon } from "lucide-react";
// import { useState } from "react";

// function OverlaySidebar({ isSidebarOpen, setIsSidebarOpen, isMobile }) {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleSidebar = () => {
//     setIsExpanded((prev) => !prev);
//   };

//   return (
//     <aside>
//       <div
//         className={`h-screen bg-[#edf2fa] dark:bg-gray-900 transition-all duration-300 flex flex-col justify-between shadow-lg fixed top-0 left-0 z-20 ${
//           isExpanded ? "w-64" : "w-[72px]"
//         }`}
//       >
//         {/* Top Controls */}
//         <div className="p-4 space-y-4">
//           {/* Menu Button */}
//           <button
//             onClick={toggleSidebar}
//             className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-3 rounded-full shadow w-full"
//           >
//             <Menu size={20} />

//             {isExpanded && isSidebarOpen && (
//               <span className="text-sm font-medium">Menu</span>
//             )}
//           </button>

//           {/* New Chat Button */}
//           <button className="flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full shadow w-full">
//             <Plus size={20} />
//             {isExpanded && (
//               <span className="text-sm font-medium">New Chat</span>
//             )}
//           </button>
//         </div>

//         {/* Chat History */}
//         <div className="flex-1 overflow-y-auto px-4">
//           {isExpanded && (
//             <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
//               <li className="truncate">Chat with AI</li>
//               <li className="truncate">Blog Outline Gen</li>
//               <li className="truncate">SEO Tips</li>
//             </ul>
//           )}
//         </div>

//         {/* Bottom Theme Toggle */}
//         <div className="p-4">
//           <button className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-3 rounded-full shadow w-full">
//             <Moon size={20} />
//             {isExpanded && (
//               <span className="text-sm font-medium">Dark Mode</span>
//             )}
//           </button>
//         </div>
//       </div>

//       {isMobile && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 z-10 cursor-pointer"
//           onClick={() => setIsSidebarOpen((prev) => !prev)}
//           aria-label="Close sidebar"
//         ></div>
//       )}
//     </aside>
//   );
// }

// export default OverlaySidebar;

////////////////////////111111//////////////////////////

// import { Menu, Plus, Moon, Trash2 } from "lucide-react";
// import { useState } from "react";

// function OverlaySidebar({
//   isSidebarOpen,
//   setIsSidebarOpen,
//   isMobile,
//   createNewChat,
//   clearCurrentChat,
//   sessionTitles,
//   activeId,
//   switchSession,
// }) {
//   const [isExpanded, setIsExpanded] = useState(true);

//   const toggleSidebar = () => {
//     setIsExpanded((prev) => !prev);
//   };

//   return (
//     <aside>
//       <div
//         className={`h-screen bg-[#edf2fa] dark:bg-gray-900 transition-all duration-300 flex flex-col justify-between shadow-lg fixed top-0 left-0 z-20 ${
//           isExpanded ? "w-64" : "w-[72px]"
//         }`}
//       >
//         {/* Top Buttons */}
//         <div className="p-4 space-y-4">
//           <button
//             onClick={toggleSidebar}
//             className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-3 rounded-full shadow w-full"
//           >
//             <Menu size={20} />
//             {isExpanded && <span className="text-sm font-medium">Menu</span>}
//           </button>

//           <button
//             onClick={createNewChat}
//             className="flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full shadow w-full"
//           >
//             <Plus size={20} />
//             {isExpanded && (
//               <span className="text-sm font-medium">New Chat</span>
//             )}
//           </button>

//           <button
//             onClick={clearCurrentChat}
//             className="flex items-center space-x-3 bg-white dark:bg-gray-800 text-red-600 p-3 rounded-full shadow w-full"
//           >
//             <Trash2 size={20} />
//             {isExpanded && (
//               <span className="text-sm font-medium">Clear Chat</span>
//             )}
//           </button>
//         </div>

//         {/* Chat History */}
//         <div className="flex-1 overflow-y-auto px-4">
//           {isExpanded && (
//             <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
//               {sessionTitles.map(({ id, title }) => (
//                 <li
//                   key={id}
//                   onClick={() => {
//                     switchSession(id);
//                     if (isMobile) setIsSidebarOpen(false);
//                   }}
//                   className={`truncate cursor-pointer p-2 rounded ${
//                     activeId === id
//                       ? "bg-blue-100 dark:bg-gray-700 font-semibold"
//                       : "hover:bg-gray-200 dark:hover:bg-gray-800"
//                   }`}
//                 >
//                   {title}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Bottom Mode Toggle */}
//         <div className="p-4">
//           <button className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-3 rounded-full shadow w-full">
//             <Moon size={20} />
//             {isExpanded && (
//               <span className="text-sm font-medium">Dark Mode</span>
//             )}
//           </button>
//         </div>
//       </div>

//       {isMobile && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 z-10 cursor-pointer"
//           onClick={() => setIsSidebarOpen(false)}
//         ></div>
//       )}
//     </aside>
//   );
// }

// export default OverlaySidebar;
/////////////////////22222222//////////////////

// OverlaySidebar.jsx

// import { Menu, Plus, Moon, Trash2 } from "lucide-react";
// import { useState } from "react";
// import ThemeToggle from "./ThemeToggle";

// function OverlaySidebar({
//   isSidebarOpen,
//   setIsSidebarOpen,
//   isMobile,
//   sessions,
//   activeSessionId,
//   onDelete,
//   onSelect,
//   onNewChat,
// }) {
//   const [isExpanded, setIsExpanded] = useState(true);

//   const toggleSidebar = () => {
//     setIsExpanded((prev) => !prev);
//   };

//   return (
//     <aside className={!isMobile ? "" : ""}>
//       <div
//         className={`h-screen bg-[#edf2fa] dark:bg-gray-900 transition-all duration-300 flex flex-col justify-between shadow-lg fixed top-0 left-0 z-20 ${
//           isExpanded ? "w-64" : "w-[72px]"
//         }`}
//       >
//         {/* Top Controls */}
//         <div className="p-4 space-y-4">
//           {/* Menu Button */}
//           <button
//             onClick={toggleSidebar}
//             className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-3 rounded-full shadow w-full"
//           >
//             <Menu size={20} />
//             {isExpanded && isSidebarOpen && (
//               <span className="text-sm font-medium">Menu</span>
//             )}
//           </button>

//           {/* New Chat Button */}
//           <button
//             onClick={onNewChat}
//             className="flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full shadow w-full"
//           >
//             <Plus size={20} />
//             {isExpanded && (
//               <span className="text-sm font-medium">New Chat</span>
//             )}
//           </button>
//         </div>

//         {/* Chat History */}
//         <div className="flex-1 overflow-y-auto px-4">
//           {isExpanded && (
//             <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
//               {sessions.map(({ id, title }) => (
//                 <li
//                   key={id}
//                   className={`flex justify-between items-center group px-3 py-2 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 ${
//                     id === activeSessionId ? "bg-gray-300 dark:bg-gray-700" : ""
//                   }`}
//                   onClick={() => onSelect(id)}
//                 >
//                   <span className="truncate w-full pr-2">{title}</span>
//                   <Trash2
//                     className="h-4 w-4 text-red-400 opacity-0 group-hover:opacity-100"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       onDelete(id);
//                     }}
//                   />
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Bottom Theme Toggle */}
//         <div className="p-4">
//           <button className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-3 rounded-full shadow w-full">
//             <Moon size={20} />
//             {isExpanded && (
//               <span className="text-sm font-medium">Dark Mode</span>
//             )}
//           </button>
//         </div>
//       </div>

//       {isMobile && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 z-10 cursor-pointer"
//           onClick={() => setIsSidebarOpen((prev) => !prev)}
//           aria-label="Close sidebar"
//         ></div>
//       )}
//     </aside>
//   );
// }

// export default OverlaySidebar;

/////3333///////
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
            className={`p-6 space-y-4 dark:border-gray-600 ${
              !isExpanded ? "self-center" : ""
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
          <hr className="text-[#d9dbdd] dark:text-gray-600" />

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
          <div className="p-4 border-t border-[#d9dbdd] dark:border-gray-600">
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
