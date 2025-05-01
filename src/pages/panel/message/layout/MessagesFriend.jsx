import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { getMessagesByConversation } from "../../../../services/messages/message.js";
import useWebSocket from "../../../../services/websocket/useWebSocket";
import { ENDPOINTS } from "../../../../config/environment.js";
import VideoCallPopup from "./VideoCallPopup";
import IncomingCallModal from "./IncomingCallModal";
import "../styles/MessagesFriend.css";

const sendButtonId = `send-buttom-${Math.random().toString(36).substr(2, 9)}`;
const textAreaId = `text-area-${Math.random().toString(36).substr(2, 9)}`;

function MessagesFriend({ selectedConversation, setSelectedConversation, updateConversations }) {
  const user = JSON.parse(localStorage.getItem('user'));
  const { socket, messages: socketMessages, sendMessageToSocket, clearMessages, joinConversation } = useWebSocket(ENDPOINTS.WEBSOCKET_URL);
  const [localMessages, setLocalMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [showVideoCall, setShowVideoCall] = useState(false);
  const messagesContainerRef = useRef(null);
  const [incomingCall, setIncomingCall] = useState(null); // { from: ID, name: String }
  const [pendingCallData, setPendingCallData] = useState(null); // usado internamente

  useEffect(() => {
    if (!socket) return;

    const handleSocketMessage = (event) => {
      try {
        const message = JSON.parse(event.data);

        if (message.to !== user.id) return;

        if (message.type === "call-request") {
          const accept = window.confirm(`${message.from} está te chamando para uma vídeo chamada. Aceitar?`);

          if (accept) {
            setShowVideoCall(true);
            socket.send(JSON.stringify({
              type: "call-accepted",
              from: user.id,
              to: message.from
            }));
          } else {
            socket.send(JSON.stringify({
              type: "call-rejected",
              from: user.id,
              to: message.from
            }));
          }
        }
      } catch (err) {
        console.error("Erro ao processar mensagem WebSocket:", err);
      }
    };

    socket.addEventListener('message', handleSocketMessage);

    return () => {
      socket.removeEventListener('message', handleSocketMessage);
    };
  }, [socket, user.id]);

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
    if (!socketMsg.sender || !socketMsg.sender.id) return;
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
      <div className="messages-header">
        <h2>Conversation{" "}{selectedConversation?.friendName || selectedConversation?.participants?.map((p) => p.name).join(", ")}</h2>
        {selectedConversation && (
          <button
            className="video-call-button"
            onClick={() => {
              setShowVideoCall(true);
              // Enviar solicitação de chamada para o destinatário
              socket.send(JSON.stringify({
                type: "call-request",
                from: user.id,
                to: selectedConversation.friendId || selectedConversation.participants.find(p => p.id !== user.id)?.id,
                callType: "video"
              }));
            }}
            aria-label="Start video call"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 10.5V7c0-1.1-.9-2-2-2H5C3.9 5 3 5.9 3 7v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-3.5l4 4v-11l-4 4z" />
            </svg>
          </button>
        )}
      </div>
      <div className="message-history" ref={messagesContainerRef}>
        {allMessages.map((msg, idx) => {
          if (!msg.sender || !msg.sender.id) return null;

          return (
            <div key={idx} className={`message ${msg.sender.id === user.id ? "sent" : "received"}`}>
              <div className="bubble">
                {msg.text}
              </div>
            </div>
          );
        })}
      </div>
      <div className="message-input-container">
        <textarea id={textAreaId} value={message} onKeyDown={handleKeyDown} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message..." />
        <button id={sendButtonId} onClick={sendMessageHandler}>Send</button>
      </div>
      {incomingCall && (
        <IncomingCallModal
          callerName={incomingCall.name}
          onAccept={() => {
            setShowVideoCall(true);
            socket.send(JSON.stringify({
              type: "call-accepted",
              from: user.id,
              to: incomingCall.from,
            }));
            setIncomingCall(null);
          }}
          onReject={() => {
            socket.send(JSON.stringify({
              type: "call-rejected",
              from: user.id,
              to: incomingCall.from,
            }));
            setIncomingCall(null);
          }}
        />
      )}
      {showVideoCall && (
        <div className="video-modal">
          <div className="video-content">
            <VideoCallPopup
              onClose={() => setShowVideoCall(false)}
              userId={user.id}
              friendId={
                selectedConversation.friendId ||
                selectedConversation.participants.find(p => p.id !== user.id)?.id
              }
              socket={socket}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default MessagesFriend;