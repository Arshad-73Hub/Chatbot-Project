import { useState, useRef } from "react";
import { chatbot } from "supersimpledev";
import spinnerImage from "../assets/loading-spinner.gif";
import "./ChatInput.css";

function ChatInput({ chatmessage, setchatmessage }) {
  const [inputdata, setInputData] = useState("");
  const inputfieldempty = useRef(null);
  function handleinputdata(event) {
    const tempdata = event.target.value;
    if (tempdata)
      setInputData({ ...inputdata, message: tempdata, sender: "user" });
  }
  function sendinputdata() {
    if (inputdata) {
      const newchatmessage = [...chatmessage, inputdata];
      setchatmessage(newchatmessage);
      const response = chatbot.getResponse(inputdata.message);
      setTimeout(() => {
        setchatmessage([
          ...newchatmessage,
          { message: response, sender: "robot" },
        ]);
      }, 1000);
      setchatmessage([
        ...newchatmessage,
        {
          message: <img className="spinner-img" src={spinnerImage} />,
          sender: "robot",
        },
      ]);
      setInputData("");
      inputfieldempty.current.value = "";
    }
  }
  function clearLocalStorage() {
    localStorage.clear();
    setchatmessage([]);
  }
  return (
    <div className="input-text-div">
      <input
        ref={inputfieldempty}
        onChange={handleinputdata}
        type="text"
        placeholder="Send a message to Chatbot"
        className="input-text-box"
      />
      <button onClick={sendinputdata} className="input-text-button">
        Send
      </button>
      <button onClick={clearLocalStorage} className="buttonclear">
        Clear
      </button>
    </div>
  );
}
export default ChatInput;
