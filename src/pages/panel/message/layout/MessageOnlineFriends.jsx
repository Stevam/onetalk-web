import React, { useEffect, useState } from "react";
import { fakeApi } from "../../../../services/fakeapi";
import "../styles/MessageOnlineFriends.css";

function MessageOnlineFriends({ onSelectFriend }) {

  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    fakeApi.getOnlineFriends().then(setOnlineFriends);
  }, []);

  return (
    <div className="online-friends">
      <h2>Online friends</h2>
      <ul>
        {onlineFriends.map((friend) => (
          <li key={friend.id} onClick={() => onSelectFriend(friend)}>
            {friend.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MessageOnlineFriends;
