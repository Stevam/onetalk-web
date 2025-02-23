import { getFriendsList } from "../../../../services/friends/FriendsService";
import React, { useEffect, useState, useRef } from "react";
import "../styles/MessageOnlineFriends.css";

function MessageOnlineFriends({ onSelectFriend }) {

  const [onlineFriends, setOnlineFriends] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const friendsData = await getFriendsList();
        setOnlineFriends(friendsData);
      } catch (error) {
        setError("Failled to get a list of friend: " + error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="online-friends">
      <h2>Online friends</h2>
      <ul>
        {onlineFriends.map((user) => (
          <li key={user.friend.id} onClick={() => onSelectFriend(user.friend)}>
            {user.friend.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MessageOnlineFriends;
