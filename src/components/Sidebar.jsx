import { Menu } from "lucide-react";

function Sidebar({ isSidebarOpen, setIsSidebarOpen, isMobile }) {
  return (
    <>
      {isMobile && (
        <div
          className={`bg-[#f3f7ff] dark:bg-gray-900 border-b-2 border-gray-200 dark:border-gray-800  p-2 fixed top-0 left-0 right-0 z-10 sidebar bg-bg-sidebar dark:bg-bg-sidebar flex items-center justify-between`}
        >
          <div className="rounded-full bg-[#e3ebf6] dark:bg-gray-700 p-2 inline-flex items-center justify-center">
            <Menu
              className="h-6 w-6 cursor-pointer"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
