import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import SimplePeer from 'simple-peer';
import './VideoChat.css';

const socket = io('http://localhost:5000'); // Connect to the signaling server

const SMEVideoChat = ({ eventId }) => {
  const localVideoRef = useRef(null);
  const [peer, setPeer] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = mediaStream;
        }

        const newPeer = new SimplePeer({ initiator: false, stream: mediaStream });

        newPeer.on('signal', (signal) => {
          socket.emit('signal', { peerId: eventId, signal });
        });

        newPeer.on('stream', (remoteStream) => {
          // Handle incoming remote stream (e.g., display it on the screen if needed)
          // Here we can store it in a state if required, or you can manage it differently
        });

        socket.on('signal', (signal) => {
          if (signal.peerId !== socket.id) {
            newPeer.signal(signal);
          }
        });

        setPeer(newPeer);
      } catch (error) {
        console.error("Error accessing media devices:", error);
      }
    };

    getUserMedia();

    return () => {
      if (peer) {
        peer.destroy();
      }
      socket.off('signal');
    };
  }, [eventId]);

  const toggleMute = () => {
    if (localVideoRef.current) {
      const audioTracks = localVideoRef.current.srcObject.getTracks().filter(track => track.kind === 'audio');
      audioTracks.forEach(track => {
        track.enabled = !track.enabled; // Toggle the audio track
      });
      setIsMuted(prev => !prev);
    }
  };

  const toggleVideo = () => {
    if (localVideoRef.current) {
      const videoTracks = localVideoRef.current.srcObject.getTracks().filter(track => track.kind === 'video');
      videoTracks.forEach(track => {
        track.enabled = !track.enabled; // Toggle the video track
      });
      setIsVideoOff(prev => !prev);
    }
  };

  return (
    <div className="video-chat">
      <h2>SME Video Chat</h2>
      <div className="video-container">
        <video ref={localVideoRef} autoPlay playsInline style={{ width: '400px', height: '300px', border: '2px solid #007bff' }} />
      </div>
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

export default SMEVideoChat;
