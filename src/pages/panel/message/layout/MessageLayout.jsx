import React, { useState, useEffect } from "react";
import MessagesFriend from "./MessagesFriend";
import MessagesHistory from "./MessagesHistory";
import MessageOnlineFriends from "./MessageOnlineFriends";
import Sidebar from "../../../../component/Sidebar";
import Navbar from "../../../../component/Navbar";
import Footer from "../../../../component/Footer";
import { fakeApi } from "../../../../services/fakeapi.js";
import "../styles/MessageLayout.css";

function MessageLayout({ children }) {
  const user = JSON.parse(localStorage.getItem('user'));

  const [selectedConversation, setSelectedConversation] = useState(null);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    fakeApi.getConversations().then(setConversations);
  }, []);

  const handleSelectFriend = async (friend) => {
    const conversationOfUser = await fakeApi.getConversationByUser(friend.id);
    if (!conversationOfUser) {
      const newconversation = {
        //TODO: set add correct id
        id: Date.now(),
        //TODO: set add correct id
        participants: [{ id: 100, name: user.name }, { id: friend.id, name: friend.name }],
        createdAt: new Date()
      }

      await fakeApi.pushConversations(newconversation).then(() => {
        setSelectedConversation(newconversation);
      });

    } else {
      setSelectedConversation(conversationOfUser);
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
        <Footer />
      </div>
    </div>
  );
}

export default MessageLayout;
