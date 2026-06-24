import { useState, useRef, useEffect } from "react";
import { ChatMessages } from "./components/ChatMessages";
import { chatbot } from "supersimpledev";
import ChatInput from "./components/ChatInput";
import "./App.css";

function App() {
  const [chatmessage, setchatmessage] = useState(
    JSON.parse(localStorage.getItem("messages")) || [],
  );
  const scrollToLast = useRef(null);
  useEffect(() => {
    const containerElem = scrollToLast.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
    localStorage.setItem("messages", JSON.stringify(chatmessage));
  }, [chatmessage]);
  useEffect(() => {
    chatbot.addResponses({
      "kya kar rahe ho": "kuch nhi apki help",
      "tum kaha se ho": "mae sitapur se hu",
      "weather kaesa hai": "Garmi ho rhi hai",
      "barish ho rhi hai": "nhi barish nhi ho rhi",
    });
  }, []);
  function useAutoScroll(dependencies) {}
  return (
    <div className="app">
      <div className="welcome-heading">Welcome To Chatbot</div>
      <div className="chatbox-message" ref={scrollToLast}>
        {chatmessage.map((chatmessage) => (
          <ChatMessages
            message={chatmessage.message}
            sender={chatmessage.sender}
          />
        ))}
      </div>
      <ChatInput chatmessage={chatmessage} setchatmessage={setchatmessage} />
    </div>
  );
}

export default App;
