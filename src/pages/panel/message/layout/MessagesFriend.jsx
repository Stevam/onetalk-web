import React, { useState, useEffect } from "react";
import { fakeApi } from "../../../../services/fakeapi.js";
import "../styles/MessagesFriend.css";

const sendButtonId = `send-buttom-${Math.random().toString(36).substr(2, 9)}`;
const textAreaId = `text-area-${Math.random().toString(36).substr(2, 9)}`;

function MessagesFriend({ selectedConversation, setSelectedConversation, updateConversations }) {
  const user = JSON.parse(localStorage.getItem('user'));
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (selectedConversation) {
      fakeApi.getMessages(selectedConversation.id).then((messages) => {
        setMessages(messages);
      });
    } else {
      setMessages([]);
    }
  }, [selectedConversation]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        conversationId: selectedConversation.id,
        text: message,
        //TODO: set add correct
        sender: { name: user.name, id: 100 },
      };

      const updatedConversation = {
        ...selectedConversation,
        lastMessage: newMessage,
      };

      updateConversations(updatedConversation);
      setSelectedConversation(updatedConversation);

      fakeApi.pushMessages(newMessage).then(() => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setMessage("");
      });

    }
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="messages-view">
      <h2>Conversation{" "}{selectedConversation?.friendName || selectedConversation?.participants?.map((p) => p.name).join(", ")}</h2>
      <div className="message-history">
        {messages.map((msg, idx) => (
          //TODO: set add correct
          <div key={idx} className={`message ${msg.sender.id === 100 ? "sent" : "received"}`}>
            <br />
            {/* <strong>{msg.sender.name}:<br/></strong> {msg.text} */}
            <div className="bubble">
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="message-input-container">
        <textarea id={textAreaId} value={message} onKeyDown={handleKeyDown} onChange={(e) => setMessage(e.target.value)} placeholder="Type r message..." />
        <button id={sendButtonId} onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default MessagesFriend;
