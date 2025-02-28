import React, { useState } from "react";
import { FaUserCircle, FaTrash } from "react-icons/fa";
import { removeFriend } from "../../../../services/friends/FriendsService";
import { HashLoader } from "react-spinners";
import "../styles/FriendsList.css";

function FriendsList({ friends, setFriends, loading }) {
  const [error, setError] = useState("");
  const removeFriendButtonId = `remove-friend-button-${Math.random().toString(36).substr(2, 9)}`;

  const handleRemoveFriend = async (friendEmail) => {
    setLoading(true);
    setError('');
    try {
      await removeFriend(friendEmail);
      setFriends(friends.filter((friend) => friend.friendEmail !== friendEmail));
    } catch (error) {
      setError('Failed to remove friend: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="friends-list-layout">
      <h2>Friend list</h2>
      <div className="friends-list">
        { loading ? <HashLoader size={50} color={"var(--text-color)"} /> :
          friends.length > 0 ? (
            friends.map((friend) => (
              <li key={friend.id} className="friend-list-item">
                <div className="friend-list-info">
                  <FaUserCircle className="friend-list-icon" />
                  <span className="friend-list-email">{friend.friendEmail}</span>
                </div>
                <button
                  id={removeFriendButtonId}
                  className="friend-list-remove-button"
                  onClick={() => handleRemoveFriend(friend.friendEmail)}>
                  <FaTrash />
                </button>
              </li>
            ))
          ) : (<li className="no-friend-list">No friends found.</li>)
        }
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default FriendsList;
