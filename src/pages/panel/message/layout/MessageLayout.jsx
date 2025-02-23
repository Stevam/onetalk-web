import { saveConversation, getUserConversations, getConversationByFriend } from "../../../../services/conversations/conversation.js";
import React, { useState, useEffect } from "react";
import MessagesFriend from "./MessagesFriend";
import MessagesHistory from "./MessagesHistory";
import MessageOnlineFriends from "./MessageOnlineFriends";
import Sidebar from "../../../../component/Sidebar";
import Navbar from "../../../../component/Navbar";
import Footer from "../../../../component/Footer";
import "../styles/MessageLayout.css";

function MessageLayout() {
  const user = JSON.parse(localStorage.getItem('user'));

  const [selectedConversation, setSelectedConversation] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const conversations = await getUserConversations(user.id);
        setConversations(conversations);
      } catch (error) {
        setError("Failed to load conversations: " + error.message);
      }
    };
    fetchConversations();
  }, [user.id]);

  const handleSelectFriend = async (friend) => {
    const conversationWithFriend = await getConversationByFriend(friend.id);
    if (!conversationWithFriend) {
      const newconversation = {
        participants: [{ id: user.id, name: user.name }, { id: friend.id, name: friend.name }]
      }
      const newconversationSaved = await saveConversation({ "id": user.id, "name": user.name }, { "id": friend.id, "name": friend.name });
      setSelectedConversation(newconversationSaved);

    } else {
      setSelectedConversation(conversationWithFriend);
    }
  };

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
  };

  const updateConversations = (updatedConversation) => {
    setConversations((prevConversations) =>
      prevConversations.map((conversation) =>
        conversation.id === updatedConversation.id ? updatedConversation : conversation
      )
    );
  };

  return (
    <div className="message-layout">
      <Sidebar />
      <div className="message-main-content">
        <Navbar />
        <div className="message-content">
          <div className="left-column">
            <MessageOnlineFriends onSelectFriend={handleSelectFriend} />
            <MessagesHistory conversations={conversations} onSelectConversation={handleSelectConversation} />
          </div>
          <MessagesFriend selectedConversation={selectedConversation}
            setSelectedConversation={setSelectedConversation} updateConversations={updateConversations} />
        </div>
        {error && <p className="error-message">{error}</p>}
        <Footer />
      </div>
    </div>
  );
}

export default MessageLayout;
