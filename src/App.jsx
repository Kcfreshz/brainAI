import { useEffect, useState } from "react";
import OverlaySidebar from "./components/OverlaySidebar";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";
import InputQuery from "./components/InputQuery";
import { useBot } from "./hooks/useBot";

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return saved || (prefersDark ? "dark" : "light");
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Load sessions from localStorage or start fresh
  const [sessions, setSessions] = useState(() => {
    return JSON.parse(localStorage.getItem("chat_sessions")) || [];
  });

  // Set the active session to the first one (if any)
  const [activeSessionId, setActiveSessionId] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("chat_sessions")) || [];
    return saved[0]?.id || null;
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Persist sessions in localStorage on change
  useEffect(() => {
    localStorage.setItem("chat_sessions", JSON.stringify(sessions));
  }, [sessions]);

  const { messages, sendMessage, regenerateLastResponse } = useBot({
    sessionId: activeSessionId,
    sessions,
    setSessions,
  });

  const createNewChat = () => {
    const id = Date.now().toString();
    const newSession = {
      id,
      title: "New Chat",
      messages: [],
    };
    setSessions([newSession, ...sessions]);
    setActiveSessionId(id);
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (sessions.length === 0) {
      createNewChat();
    }
  }, []);

  const deleteSession = (id) => {
    const filtered = sessions.filter((s) => s.id !== id);
    setSessions(filtered);

    if (id === activeSessionId) {
      setActiveSessionId(filtered[0]?.id || null);
    }
  };

  const switchSession = (id) => {
    setActiveSessionId(id);
    setIsSidebarOpen(false);
  };

  const sessionList = sessions.map(({ id, title, messages }) => ({
    id,
    title: title || messages?.[0]?.content.slice(0, 30) || "New Chat",
  }));

  return (
    <div className="flex flex-col h-screen w-screen text-[#2a2a2a] dark:text-[#edf3ff] bg-[#f3f7ff] dark:bg-gray-900">
      <OverlaySidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isMobile={isMobile}
        sessions={sessionList}
        activeSessionId={activeSessionId}
        onDelete={deleteSession}
        onSelect={switchSession}
        onNewChat={createNewChat}
        setTheme={setTheme}
        theme={theme}
      />

      <div className="flex flex-col h-screen w-screen bg-gray-100z dark:bg-blackz overflow-y-auto">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isMobile={isMobile}
        />

        <div className="flex-1 w-full flex justify-center">
          <div className="flex flex-col w-full max-w-6xl">
            <ChatBox
              messages={messages}
              onRegenerate={regenerateLastResponse}
            />

            <div className="mt-auto">
              <InputQuery sendMessage={sendMessage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
