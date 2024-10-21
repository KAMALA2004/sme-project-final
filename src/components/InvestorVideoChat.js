import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import SimplePeer from 'simple-peer';
import './VideoChat.css';

const socket = io('http://localhost:5000'); // Connect to the signaling server

const InvestorVideoChat = ({ eventId }) => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const [peer, setPeer] = useState(null); // Use state for the peer
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = mediaStream;
        }

        const newPeer = new SimplePeer({ initiator: true, stream: mediaStream });

        newPeer.on('signal', (signal) => {
          socket.emit('signal', { peerId: eventId, signal });
        });

        newPeer.on('stream', (remoteStream) => {
          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = remoteStream;
          }
        });

        socket.on('signal', (signal) => {
          if (signal.peerId !== socket.id) {
            newPeer.signal(signal);
          }
        });

        setPeer(newPeer); // Set the peer state
      } catch (error) {
        console.error("Error accessing media devices:", error);
      }
    };

    getUserMedia();

    return () => {
      if (peer) {
        peer.destroy();
      }
      // Clean up socket listener
      socket.off('signal');
    };
  }, [eventId]);

  const toggleMute = () => {
    if (peer) {
      const audioTracks = localVideoRef.current.srcObject.getTracks().filter(track => track.kind === 'audio');
      audioTracks.forEach(track => {
        track.enabled = !track.enabled; // Toggle the audio track
      });
      setIsMuted(!isMuted);
    }
  };

  const toggleVideo = () => {
    if (peer) {
      const videoTracks = localVideoRef.current.srcObject.getTracks().filter(track => track.kind === 'video');
      videoTracks.forEach(track => {
        track.enabled = !track.enabled; // Toggle the video track
      });
      setIsVideoOff(!isVideoOff);
    }
  };

  return (
    <div className="video-chat">
      <h2>Investor Meeting</h2>
      <video ref={localVideoRef} autoPlay playsInline />
      <video ref={remoteVideoRef} autoPlay playsInline />
      <div className="controls">
        <button className="control-button" onClick={toggleMute}>
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
        <button className="control-button" onClick={toggleVideo}>
          {isVideoOff ? 'Turn Video On' : 'Turn Video Off'}
        </button>
      </div>
    </div>
  );
};

export default InvestorVideoChat;
