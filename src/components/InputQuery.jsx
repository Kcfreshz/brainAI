import { ArrowUp, SendHorizontal } from "lucide-react";
import { useEffect, useState } from "react";

function InputQuery({ sendMessage }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    const savedInputDraft = localStorage.getItem("draft-input");
    if (savedInputDraft) {
      setInput(savedInputDraft);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("draft-input", input);
    return () => {
      localStorage.removeItem("draft-input");
    };
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <div>
      <form
        className="p-6 flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <label className="bg-[#e7ecf1] dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-800 p-2s rounded-full w-full flex items-center justify-between">
          <input
            type="text"
            placeholder="Ask me anything..."
            className="outline-0 my-0 mx-6 w-full bg-transparent h-12"
            autoFocus
            spellCheck="true"
            autoComplete="on"
            autoCorrect="on"
            aria-label="Type your query here"
            aria-describedby="query-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            type="submit"
            className="bg-[#3b82f6] p-2 mr-2 rounded-full text-white hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center"
          >
            <SendHorizontal className="text-white w-5 h-5 cursor-pointer" />
          </button>
        </label>
        {/* <ArrowUp className="cursor-pointer" /> */}
      </form>

      <div className="flex justify-center">
        <p className="text-center text-sm text-gray-500 ">
          Brain AI can make mistakes
        </p>

        <span className="mx-2">||</span>

        <p className="text-gray-400 text-sm text-center">
          Built with ❤️ by
          <a
            href="https://x.com/Kcfresh__"
            target="_blank"
            class="text-blue-500 underline hover:text-blue-600 ml-1"
          >
            KC Fresh
          </a>
        </p>
      </div>
    </div>
  );
}

export default InputQuery;
