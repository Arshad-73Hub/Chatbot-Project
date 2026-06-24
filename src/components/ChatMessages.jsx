import userImage from "../assets/user.png";
import robotImage from "../assets/robot.png";
import dayjs from "dayjs";
import "./ChatMessages.css";

export function ChatMessages({ message, sender }) {
  const currentTime = dayjs().format("hh:mma");
  return (
    <div>
      {sender === "user" ? (
        <div className="chatmessage-div-user">
          <div className="chatmessage-text">
            <p className="paratext">{message}</p>
            <p className="paratext2">{currentTime}</p>
          </div>
          <img src={userImage} alt="image" className="chatmessage-image" />
        </div>
      ) : (
        <div className="chatmessage-div-robot">
          <img src={robotImage} alt="image" className="chatmessage-image" />
          <div className="chatmessage-text">
            <p className="paratext">{message}</p>
            <p className="paratext2">{currentTime}</p>
          </div>
        </div>
      )}
    </div>
  );
}
