import { useEffect, useState, useRef } from "react";
import { getAuthToken } from "../auth/authService";

function useWebSocket(url) {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    const token = getAuthToken();

    if (!token) {
      console.error("Token not found. WebSocket will not be started.");
      return;
    }

    socketRef.current = new WebSocket(`${url}/${token}`);

    socketRef.current.onopen = () => {
      console.log("WebSocket connected.");
    };

    socketRef.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setMessages((prevMessages) => [...prevMessages, data]);
      } catch (error) {
        console.error("Error processing WebSocket message:", error);
      }
    };

    socketRef.current.onclose = () => console.log("WebSocket disconnected");

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
        socketRef.current = null;
      }
    };
  }, [url]);

  const sendMessageToSocket = (message) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify(message));
    }
  };

  const clearMessages = () => {
    setMessages([]);
  };

  const joinConversation = (conversationId) => {
    const joinMessage = {
      type: "joinConversation",
      conversationId: conversationId
    };
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify(joinMessage));
    }
  }

  return { messages, sendMessageToSocket, clearMessages, joinConversation };
}

export default useWebSocket;
