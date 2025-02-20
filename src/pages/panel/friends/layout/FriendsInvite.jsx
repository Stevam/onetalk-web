import React, { useState } from "react";
import { getInvites, inviteFriend } from "../../../../services/friends/FriendsService";
import { FaPlus } from "react-icons/fa";
import "../styles/FriendsInvite.css";

function FriendsInvite({ setPendingRequest }) {
  const [newFriendEmail, setNewFriendEmail] = useState("");
  const [error, setError] = useState("");
  
  const newFriendEmailId = `new-friend-${Math.random().toString(36).substr(2, 9)}`;
  const newFriendButtonId = `add-friend-button-${Math.random().toString(36).substr(2, 9)}`;

  const handleInviteFriend = async (e) => {
    e.preventDefault();
    if (!newFriendEmail) {
      setError("Please, insert a valid email.");
      return;
    }
    try {
      await inviteFriend(newFriendEmail);
      setNewFriendEmail("");
      setError("");
      const updatedFriends = await getInvites();
      setPendingRequest(updatedFriends);
    } catch (error) {
      setError("Failled to add a friend: " + error.message);
    }
  };

  return (
    <div className="friends-invite-layout">
      <form onSubmit={handleInviteFriend}>
        <div className="input-group">
          <input
            id={newFriendEmailId}
            type="email"
            value={newFriendEmail}
            onChange={(e) => setNewFriendEmail(e.target.value)}
            placeholder="Enter a friend email"
            required
          />
          <button id={newFriendButtonId} type="submit" className="add-friend-button">
            <FaPlus /> 
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

export default FriendsInvite;
