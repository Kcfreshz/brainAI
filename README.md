🌟 **Brain AI Chatbot**

Welcome to Brain AI, a sleek and interactive chat application powered by a large language model. This project offers a seamless conversational experience, complete with dynamic session management, real-time responses, and a polished user interface. It's built with modern web technologies, showcasing robust state management and a thoughtful approach to UI/UX.

---

## 🚀 Installation

Getting this project up and running on your local machine is super straightforward! Just follow these steps:

- **Clone the Repository**:
  Begin by cloning the project to your local system using Git:
  ```bash
  git clone https://github.com/your-username/brain-ai2.git # Replace with your actual repository URL
  ```
- **Navigate to the Project Directory**:
  Change into the project folder:
  ```bash
  cd brain-ai2
  ```
- **Install Dependencies**:
  Install all the required packages using your preferred package manager (npm is recommended):
  ```bash
  npm install
  ```
- **Environment Variables**:
  This project uses the Groq API for AI responses. You'll need to set up your API key.
  Create a `.env` file in the root directory of the project and add your Groq API key:
  ```dotenv
  VITE_GROQ_API_KEY=your_groq_api_key_here
  VITE_GROQ_MODEL=llama3-70b-8192 # Or another model if you prefer
  ```
  (You can obtain an API key from [Groq's developer platform](https://console.groq.com/docs/api)).
- **Start the Development Server**:
  Once dependencies are installed and your environment variables are set, start the development server:
  ```bash
  npm run dev
  ```
  The application should now be accessible in your browser, typically at `http://localhost:9000`.

---

## 💡 Usage

Interacting with the Brain AI Chatbot is designed to be intuitive and engaging. Here's how you can use it:

1.  **Start a New Chat**: Upon launching the application, a "New Chat" session is automatically created if no previous sessions exist. You can also click the `New Chat` button (plus icon) in the sidebar to begin a fresh conversation at any time.
2.  **Type Your Query**: Use the input box at the bottom of the screen to type your questions, prompts, or messages to the AI. The input field intelligently saves your draft, so you won't lose your thoughts if you navigate away.
3.  **Send Message**: Press the `Enter` key or click the `Send` (arrow-up) icon to submit your query.
4.  **Observe AI Response**: The AI's response will appear in the chat area above the input box, complete with a subtle typing animation to indicate activity.
5.  **Regenerate Response**: If the AI's last answer wasn't quite what you were looking for, simply click the `Regenerate` (rotate icon) button located below the last AI message. The AI will generate an alternative response based on the preceding conversation.
6.  **Copy Messages**: You can easily copy any message (both your queries and the AI's responses) to your clipboard by clicking the `Copy` icon next to the message.
7.  **Manage Sessions**:
    - **Switch Sessions**: All your conversations are saved. Access previous chats by selecting them from the sidebar. Each session is titled dynamically based on your first query.
    - **Delete Sessions**: Hover over a chat session in the sidebar and click the `Trash` (bin icon) to permanently remove it.
8.  **Toggle Theme**: Switch between `Dark Mode` and `Light Mode` using the theme toggle button located at the bottom of the sidebar. This allows you to personalize your viewing experience.
9.  **Responsive Sidebar**: The sidebar is responsive, automatically adjusting its display for mobile devices, ensuring a consistent experience across various screen sizes.

---

## ✨ Features

This project comes packed with thoughtful features designed to enhance your AI chat experience:

- 🤖 **AI-Powered Conversations**: Integrates with a powerful large language model (via Groq API) to provide intelligent and contextually relevant responses.
- 💬 **Dynamic Chat Sessions**: Effortlessly create, switch between, and manage multiple ongoing conversations, keeping your discussions organized.
- 💾 **Persistent Chat History**: All your chat sessions and messages are automatically saved to your browser's local storage, ensuring your conversations are always there when you return.
- ✍️ **Real-time Typing Indicator**: Provides a subtle "Assistant is typing..." animation, giving a more natural and engaging feel to the AI's response generation.
- 📄 **Markdown Rendering & Code Highlighting**: AI responses are rendered with full Markdown support, including syntax highlighting for code blocks, making complex information easy to read and digest.
- 🌗 **Dark Mode / Light Mode**: Offers a customizable theme toggle, allowing users to switch between a comfortable dark mode and a vibrant light mode.
- 🔄 **Regenerate Response**: Provides the ability to quickly re-generate the AI's last response, offering alternative answers without re-typing your query.
- 📋 **Copy to Clipboard**: A convenient feature to copy any message content directly to your clipboard with a single click.
- 📱 **Responsive User Interface**: Designed with mobile-first principles using Tailwind CSS, ensuring a fluid and accessible experience across desktops, tablets, and smartphones.
- 📝 **Input Draft Persistence**: Your unsent query is saved as a draft locally, preventing loss of work if you navigate away or refresh the page.

---

## 🛠️ Technologies Used

This project leverages a modern and robust stack to deliver a high-performance and user-friendly experience:

| Technology           | Description                                                                                 | Link                                                                    |
| :------------------- | :------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------- |
| **React 19**         | A declarative, component-based JavaScript library for building user interfaces.             | [React Official Website](https://react.dev/)                            |
| **Vite**             | A next-generation frontend tooling that provides an incredibly fast development experience. | [Vite Official Website](https://vitejs.dev/)                            |
| **Tailwind CSS**     | A utility-first CSS framework for rapidly building custom designs.                          | [Tailwind CSS Official Website](https://tailwindcss.com/)               |
| **Groq API**         | Powers the AI responses, offering fast and efficient language model inference.              | [Groq Developer Platform](https://console.groq.com/)                    |
| **Axios**            | A promise-based HTTP client for making API requests.                                        | [Axios GitHub Repository](https://github.com/axios/axios)               |
| **React Markdown**   | A React component for rendering Markdown.                                                   | [React Markdown GitHub](https://github.com/remarkjs/react-markdown)     |
| **rehype-highlight** | A rehype plugin to highlight code blocks in Markdown.                                       | [rehype-highlight GitHub](https://github.com/rehypejs/rehype-highlight) |
| **highlight.js**     | Syntax highlighter for the web.                                                             | [highlight.js Official Website](https://highlightjs.org/)               |
| **Lucide React**     | A beautiful, open-source icon library.                                                      | [Lucide React Official Site](https://lucide.dev/)                       |

---

## 🤝 Contributing

We welcome contributions to make this project even better! If you have ideas for improvements, new features, or bug fixes, please consider contributing. Here's how:

- 🍴 **Fork the repository**: Start by forking the project to your own GitHub account.
- 🌱 **Create a new branch**: For any new feature or bug fix, create a dedicated branch. Use a descriptive name like `feat/add-new-feature` or `fix/resolve-bug-x`.
- 🚀 **Make your changes**: Implement your modifications or new features.
- 🧪 **Test your changes**: Ensure your contributions work as expected and don't introduce new issues.
- 📝 **Commit your changes**: Write clear and concise commit messages explaining what you've done.
- ⬆️ **Push to your branch**: Push your local branch to your forked repository.
- 📤 **Open a Pull Request**: Submit a pull request to the `main` branch of this repository. Please describe your changes thoroughly, including why they're needed and what problem they solve.

We appreciate your efforts to improve this project!

---

## ⚖️ License

No specific license information has been provided for this project at this moment.

---

## 👤 Author

**Kelechukwu Awoke**

A passionate developer dedicated to crafting intuitive and performant web applications.

- LinkedIn: (https://www.linkedin.com/in/kcfreshz/)
- Twitter: (https://twitter.com/kcfresh__)
- Portfolio: (https://kelechukwu-portfolio.netlify.app)
- Email: (mailto:your.kelechukwuawoke@gmail.com)

---

## 🏆 Badges

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Groq](https://img.shields.io/badge/Groq-00E676?style=for-the-badge&logo=groq&logoColor=white)](https://console.groq.com/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://github.com/axios/axios)
[![React Markdown](https://img.shields.io/badge/React_Markdown-0366D6?style=for-the-badge&logo=markdown&logoColor=white)](https://github.com/remarkjs/react-markdown)

---

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
