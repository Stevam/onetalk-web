import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { getMessagesByConversation } from "../../../../services/messages/message.js";
import useWebSocket from "../../../../services/websocket/useWebSocket";
import { ENDPOINTS } from "../../../../config/environment.js";
import "../styles/MessagesFriend.css";

const sendButtonId = `send-buttom-${Math.random().toString(36).substr(2, 9)}`;
const textAreaId = `text-area-${Math.random().toString(36).substr(2, 9)}`;

function MessagesFriend({ selectedConversation, setSelectedConversation, updateConversations }) {
  const user = JSON.parse(localStorage.getItem('user'));
  const { messages: socketMessages, sendMessageToSocket, clearMessages, joinConversation } = useWebSocket(ENDPOINTS.WEBSOCKET_URL);
  const [localMessages, setLocalMessages] = useState([]);
  const [message, setMessage] = useState("");
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedConversation) {
        clearMessages();
        setLocalMessages([]);
        return;
      }

      try {
        const messagesByConversation = await getMessagesByConversation(selectedConversation.id);
        clearMessages();
        setLocalMessages(messagesByConversation); 
        joinConversation(selectedConversation.id)
      } catch (error) {
        console.error("Failed to load messages:", error);
      }
    };

    fetchMessages();
  }, [selectedConversation]);

  const allMessages = [...localMessages];
  socketMessages.forEach(socketMsg => {
    if (!allMessages.some(localMsg => localMsg.id === socketMsg.id)) {
      allMessages.push(socketMsg);
    }
  });

  useLayoutEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [allMessages]);

  const sendMessageHandler = () => {
    if (message.trim()) {
      const newMessage = {
        conversationId: selectedConversation.id,
        text: message,
        sender: { name: user.name, id: user.id },
      };

      const updatedConversation = {
        ...selectedConversation,
        lastMessage: newMessage,
      };

      updateConversations(updatedConversation);
      setSelectedConversation(updatedConversation);
      sendMessageToSocket(newMessage);
      setLocalMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
      sendMessageHandler();
    }
  };

  return (
    <div className="messages-view">
      <h2>Conversation{" "}{selectedConversation?.friendName || selectedConversation?.participants?.map((p) => p.name).join(", ")}</h2>
      <div className="message-history" ref={messagesContainerRef}>
        {allMessages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender.id === user.id ? "sent" : "received"}`}>
            <div className="bubble">
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="message-input-container">
        <textarea id={textAreaId} value={message} onKeyDown={handleKeyDown} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message..." />
        <button id={sendButtonId} onClick={sendMessageHandler}>Send</button>
      </div>
    </div>
  );
}

export default MessagesFriend;