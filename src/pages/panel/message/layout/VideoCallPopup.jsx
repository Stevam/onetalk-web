import React, { useEffect, useRef, useState } from 'react';
import "../styles/VideoCallPopup.css";

const VideoCallPopup = ({ onClose, userId, friendId, socket }) => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerRef = useRef(null);
  const localStreamRef = useRef(null);
  const isCaller = useRef(userId < friendId); // Simples estratégia determinística
  const candidatesQueue = useRef([]);

  useEffect(() => {
    const startCall = async () => {
      peerRef.current = new RTCPeerConnection({
        iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
        sdpSemantics: "unified-plan"
      });

      // Manipula ICE candidates
      peerRef.current.onicecandidate = (event) => {
        if (event.candidate) {
          socket.send(JSON.stringify({
            type: "ice-candidate",
            from: userId,
            to: friendId,
            candidate: event.candidate,
          }));
        }
      };

      // Quando receber track remota
      peerRef.current.ontrack = (event) => {
        remoteVideoRef.current.srcObject = event.streams[0];
      };

      // Captura a câmera local
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localStreamRef.current = stream;
        localVideoRef.current.srcObject = stream;

        stream.getTracks().forEach(track => {
          peerRef.current.addTrack(track, stream);
        });

        if (isCaller.current) {
          const offer = await peerRef.current.createOffer();
          await peerRef.current.setLocalDescription(offer);
          socket.send(JSON.stringify({
            type: "offer",
            from: userId,
            to: friendId,
            offer,
          }));
        }
      } catch (err) {
        console.error("Erro ao acessar mídia:", err);
      }
    };

    startCall();

    return () => {
      if (peerRef.current) {
        peerRef.current.close();
        peerRef.current = null;
      }
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  // Processa mensagens de sinalização recebidas
  useEffect(() => {
    if (!socket) return;

    const handleMessage = async (event) => {
      const msg = JSON.parse(event.data);
      if (msg.to !== userId) return;

      switch (msg.type) {
        case "offer":
          if (!peerRef.current) return;
          await peerRef.current.setRemoteDescription(new RTCSessionDescription(msg.offer));

          const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
          localStreamRef.current = stream;
          localVideoRef.current.srcObject = stream;
          stream.getTracks().forEach(track => {
            peerRef.current.addTrack(track, stream);
          });

          const answer = await peerRef.current.createAnswer();
          await peerRef.current.setLocalDescription(answer);
          socket.send(JSON.stringify({
            type: "answer",
            from: userId,
            to: friendId,
            answer,
          }));
          break;

        case "answer":
          await peerRef.current.setRemoteDescription(new RTCSessionDescription(msg.answer));

          // Aplicar candidatos em espera
          while (candidatesQueue.current.length) {
            await peerRef.current.addIceCandidate(new RTCIceCandidate(candidatesQueue.current.shift()));
          }
          break;

        case "ice-candidate":
          if (peerRef.current.remoteDescription) {
            await peerRef.current.addIceCandidate(new RTCIceCandidate(msg.candidate));
          } else {
            candidatesQueue.current.push(msg.candidate);
          }
          break;

        default:
          break;
      }
    };

    socket.addEventListener("message", handleMessage);
    return () => socket.removeEventListener("message", handleMessage);
  }, [socket, userId, friendId]);

  return (
    <div className="video-popup">
      <video ref={localVideoRef} autoPlay muted className="video-local" />
      <video ref={remoteVideoRef} autoPlay className="video-remote" />
      <button onClick={() => {
        onClose();
      }}>
        Encerrar
      </button>
    </div>
  );
}

export default VideoCallPopup;
