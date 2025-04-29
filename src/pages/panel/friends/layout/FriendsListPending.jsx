import React, { useState } from "react";
import { FaUserCircle, FaCheck, FaTimes } from "react-icons/fa";
import { getFriendsList, acceptRequest, declineRequest } from "../../../../services/friends/FriendsService";
import { HashLoader } from "react-spinners";
import "../styles/FriendsListPending.css";

function FriendsListPending({ pendingRequest, setPendingRequest, setFriends, loading }) {
  const [error, setError] = useState("");
  const user = JSON.parse(localStorage.getItem('user'));
  const acceptButtonId = `friends-list-pending-accept-button-${Math.random().toString(36).substr(2, 9)}`;
  const declineButtonId = `friends-list-pending-decline-button-${Math.random().toString(36).substr(2, 9)}`;

  const handleAcceptRequest = async (requestId) => {
    setLoading(true);
    setError('');
    try {
      await acceptRequest(requestId);
      setPendingRequest(pendingRequest.filter(request => request.friendEmail !== requestId));
      const updatedFriends = await getFriendsList();
      setFriends(updatedFriends);
    } catch (error) {
      setError('Error accepting request: ' + err.message);
    } finally {
      setLoading(false);
    }
  }

  const handleDeclineRequest = async (requestId) => {
    setLoading(true);
    setError('');
    try {
      await declineRequest(requestId);
      setPendingRequest(pendingRequest.filter(request => request.friendEmail !== requestId));
    } catch (error) {
      setError('Error declining request: ' + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="friends-list-pending-layout">
      <h2>Pending Requests</h2>
      <div className="friends-list-pending-list">
        {loading ? <HashLoader size={50} color={"var(--text-color)"} /> :
          pendingRequest.length > 0 ? (
            pendingRequest.map((request) => (
              <div key={request.id} className="friends-list-pending-item">
                <FaUserCircle className="friends-list-pending-icon" />
                <span className="friends-list-pending-email">{request.friendEmail}</span>
                <div className="friends-list-pending-actions">
                  {
                    user.email == request.userSender ? '' :
                      <button
                        id={acceptButtonId}
                        onClick={() => handleAcceptRequest(request.userSender)}
                        className="friends-list-pending-accept-button">
                        <FaCheck />
                      </button>
                  }
                  <button
                    id={declineButtonId}
                    onClick={() => handleDeclineRequest(request.friendEmail)}
                    className="friends-list-pending-decline-button">
                    <FaTimes />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-friends-list-pending">No invites.</p>
          )
        }
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default FriendsListPending;