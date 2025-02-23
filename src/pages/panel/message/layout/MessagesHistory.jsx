import React from "react";
import "../styles/MessagesHistory.css";

function MessagesHistory({ conversations, onSelectConversation }) {

  return (
    <div className="history-conversation">
      <h2>Messages</h2>
      <ul>
        {conversations.map((conversation) => (
          !conversation.lastMessage ? "" :
            <li key={conversation.id} onClick={() => onSelectConversation(conversation)}>
              {conversation.participants.map((p) => p.name).join(", ")} - {conversation.lastMessage.text}
            </li>
        ))}
      </ul>
    </div>
  );
}

export default MessagesHistory;
