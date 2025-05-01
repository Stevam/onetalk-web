import React from 'react';
import "../styles/IncomingCallModal.css";

function IncomingCallModal({ callerName, onAccept, onReject }) {
  return (
    <div className="incoming-call-backdrop">
      <div className="incoming-call-modal">
        <h3>{callerName} está te chamando</h3>
        <div className="incoming-call-buttons">
          <button className="accept" onClick={onAccept}>Aceitar</button>
          <button className="reject" onClick={onReject}>Recusar</button>
        </div>
      </div>
    </div>
  );
}

export default IncomingCallModal;