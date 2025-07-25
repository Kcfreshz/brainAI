import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { RotateCcw, Copy } from "lucide-react";
import "highlight.js/styles/monokai-sublime.css";

function ChatBox({ messages, onRegenerate }) {
  const bottomRef = useRef(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  if (!messages) return <div>No messages yet</div>;

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="max-w-3xl mx-auto w-full">
        {messages.map((msg, i) => {
          const isBot = msg.role === "assistant";
          const isUser = msg.role === "user";
          const isLastBot = isBot && i === messages.length - 1;
          const isTyping = isBot && msg.loading;

          return (
            <div
              key={i}
              className={`my-6 ${isUser ? "text-right" : "text-left"}`}
            >
              <div className="inline-block relative max-w-[80%]">
                {/* Message bubble */}
                <div
                  className={`p-3 rounded-xl ${
                    isUser
                      ? "bg-[#e3ebf6] dark:bg-gray-700 mt-6"
                      : "bg-gray-200z dark:bg-gray-700z text-blackz dark:text-whitez"
                  } prose prose-sm sm:prose-base dark:prose-invert`}
                >
                  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                    {msg.content}
                  </ReactMarkdown>
                </div>

                {/* User Copy icon below message bubble */}
                {isUser && (
                  <div className="flex justify-end mt-1 pr-1 text-gray-500z">
                    <button
                      onClick={() => handleCopy(msg.content, i)}
                      title="Copy"
                      className="hover:text-gray-800z dark:hover:text-whitez transition flex items-center gap-1 cursor-pointer"
                    >
                      <Copy className="h-4 w-4" />
                      {copiedIndex === i && (
                        <span className="ml-2 text-green-400z text-sm">
                          Copied!
                        </span>
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Bot controls: copy + regenerate */}
              {isBot && (
                <div className="flex items-center gap-2 mt-1 text-gray-500z dark:text-gray-300z text-xs">
                  <button
                    onClick={() => handleCopy(msg.content, i)}
                    title="Copy"
                    className="hover:text-gray-800z dark:hover:text-whitez transition flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="h-4 w-4" />
                    {copiedIndex === i && (
                      <span className="ml-2 text-green-500z">Copied!</span>
                    )}
                  </button>

                  {isLastBot && !msg.loading && (
                    <button
                      onClick={() => onRegenerate(i)}
                      title="Regenerate response"
                      className="hover:text-gray-800z dark:hover:text-whitez transition flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </button>
                  )}
                </div>
              )}

              {/* Bot typing animation */}
              {isTyping && (
                <div className="mt-2 text-sm text-gray-500z dark:text-gray-400z animate-pulse flex items-center gap-1">
                  <span>Assistant is typing</span>
                  <span className="flex gap-1 text-lg">
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce delay-100">.</span>
                    <span className="animate-bounce delay-200">.</span>
                  </span>
                </div>
              )}
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default ChatBox;
