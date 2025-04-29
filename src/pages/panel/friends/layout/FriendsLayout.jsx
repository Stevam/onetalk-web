import React, { useState, useEffect, useRef } from "react";
import FriendsInvite from "../layout/FriendsInvite";
import FriendsListPending from "../layout/FriendsListPending";
import FriendsList from "../layout/FriendsList";
import Sidebar from "./../../../../component/Sidebar";
import Navbar from "./../../../../component/Navbar";
import Footer from "./../../../../component/Footer";
import { getFriendsList, getInvites } from "../../../../services/friends/FriendsService";
import "../styles/FriendsLayout.css";

function FriendsLayout() {
  const [error, setError] = useState("");
  const [friends, setFriends] = useState([]);
  const [pendingRequest, setPendingRequest] = useState([]);
  const didFetch = useRef(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;

    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const [friendsData, pendingData] = await Promise.all([
          getFriendsList(),
          getInvites(),
        ]);
        setFriends(friendsData);
        setPendingRequest(pendingData);
      } catch (error) {
        setError("Failled to get a list of friend: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="friends-layout">
      <Sidebar />
      <div className="friends-main-content">
        <Navbar />
        <div className="friends-content">
          <FriendsInvite setPendingRequest={setPendingRequest} />
          <FriendsListPending pendingRequest={pendingRequest} setPendingRequest={setPendingRequest} setFriends={setFriends} loading={loading} />
          <FriendsList friends={friends} setFriends={setFriends} loading={loading} />
          {error && <p className="error-message">{error}</p>}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default FriendsLayout;
