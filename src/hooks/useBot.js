import { useRef } from "react";
import axios from "axios";

export function useBot({ sessionId, sessions, setSessions }) {
  const typingInterval = useRef(null);
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;
  const model = import.meta.env.VITE_GROQ_MODEL;

  const createNewSession = () => {
    const newId = Date.now().toString();
    const newSession = {
      id: newId,
      title: "New Chat",
      messages: [],
    };
    const updated = [newSession, ...sessions];
    setSessions(updated);
    localStorage.setItem("chat_sessions", JSON.stringify(updated));
    localStorage.setItem("current_session_id", newId);
  };

  const deleteSession = (id) => {
    const filtered = sessions.filter((s) => s.id !== id);
    setSessions(filtered);
    localStorage.setItem("chat_sessions", JSON.stringify(filtered));

    if (id === sessionId) {
      const newActiveId = filtered[0]?.id || null;
      localStorage.setItem("current_session_id", newActiveId);
    }
  };

  const sendMessage = async (userInput) => {
    const current = sessions.find((s) => s.id === sessionId);
    if (!current) return;

    const userMessage = { role: "user", content: userInput };

    const isFirstMessage = current.messages.length === 0;

    const updatedSessions = sessions.map((s) => {
      if (s.id === sessionId) {
        return {
          ...s,
          title: isFirstMessage
            ? userInput.slice(0, 20).trim() + "..."
            : s.title,
          messages: [...s.messages, userMessage],
        };
      }
      return s;
    });

    setSessions(updatedSessions);
    localStorage.setItem("chat_sessions", JSON.stringify(updatedSessions));

    const botMessageId = Date.now();
    const placeholder = {
      id: botMessageId,
      role: "assistant",
      content: "",
      loading: true,
    };

    setSessions((prev) =>
      prev.map((s) =>
        s.id === sessionId
          ? { ...s, messages: [...s.messages, placeholder] }
          : s
      )
    );

    try {
      const response = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          model: model,
          messages: [
            ...current.messages.map(({ role, content }) => ({ role, content })),
            { role: "user", content: userInput },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      const fullText =
        response.data?.choices?.[0]?.message?.content || "No response.";

      let index = 0;
      clearInterval(typingInterval.current);

      typingInterval.current = setInterval(() => {
        setSessions((prev) =>
          prev.map((s) => {
            if (s.id !== sessionId) return s;
            return {
              ...s,
              messages: s.messages.map((m) =>
                m.id === botMessageId
                  ? {
                      ...m,
                      content: fullText.slice(0, index + 1),
                      loading: index < fullText.length - 1,
                    }
                  : m
              ),
            };
          })
        );

        index++;
        if (index >= fullText.length) {
          clearInterval(typingInterval.current);
        }
      }, 25);
    } catch (err) {
      console.error("API error:", err);
      setSessions((prev) =>
        prev.map((s) =>
          s.id === sessionId
            ? {
                ...s,
                messages: s.messages.map((m) =>
                  m.id === botMessageId
                    ? {
                        ...m,
                        content: "Something went wrong.",
                        loading: false,
                      }
                    : m
                ),
              }
            : s
        )
      );
    }
  };

  const regenerateLastResponse = async () => {
    const current = sessions.find((s) => s.id === sessionId);
    if (!current || current.messages.length < 2) return;

    const lastUserMessageIndex = [...current.messages]
      .reverse()
      .findIndex((msg) => msg.role === "user");

    if (lastUserMessageIndex === -1) return;

    const realIndex = current.messages.length - 1 - lastUserMessageIndex;
    // const lastUserMessage = current.messages[realIndex];
    const botMessageId = Date.now();
    const placeholder = {
      id: botMessageId,
      role: "assistant",
      content: "",
      loading: true,
    };

    setSessions((prev) =>
      prev.map((s) =>
        s.id === sessionId
          ? { ...s, messages: [...s.messages, placeholder] }
          : s
      )
    );

    try {
      const response = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          model: model,
          messages: [
            ...current.messages
              .filter((msg, index) => index <= realIndex)
              .map(({ role, content }) => ({ role, content })),
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      const fullText =
        response.data?.choices?.[0]?.message?.content || "No response.";

      let index = 0;
      clearInterval(typingInterval.current);

      typingInterval.current = setInterval(() => {
        setSessions((prev) =>
          prev.map((s) => {
            if (s.id !== sessionId) return s;
            return {
              ...s,
              messages: s.messages.map((m) =>
                m.id === botMessageId
                  ? {
                      ...m,
                      content: fullText.slice(0, index + 1),
                      loading: index < fullText.length - 1,
                    }
                  : m
              ),
            };
          })
        );

        index++;
        if (index >= fullText.length) {
          clearInterval(typingInterval.current);
        }
      }, 25);
    } catch (err) {
      console.error("API error:", err);
      setSessions((prev) =>
        prev.map((s) =>
          s.id === sessionId
            ? {
                ...s,
                messages: s.messages.map((m) =>
                  m.id === botMessageId
                    ? {
                        ...m,
                        content: "Something went wrong.",
                        loading: false,
                      }
                    : m
                ),
              }
            : s
        )
      );
    }
  };

  const messages = sessions.find((s) => s.id === sessionId)?.messages || [];

  return {
    messages,
    sendMessage,
    createNewSession,
    deleteSession,
    regenerateLastResponse,
    sessions,
    currentSessionId: sessionId,
    setCurrentSessionId: () => {},
  };
}
