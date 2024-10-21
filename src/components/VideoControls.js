// src/components/VideoControls.js
import React from 'react';
import './VideoControls.css';

const VideoControls = ({ onMute, onVideoToggle, onScreenShare }) => {
  return (
    <div className="video-controls">
      <button onClick={onMute}>Mute/Unmute</button>
      <button onClick={onVideoToggle}>Video On/Off</button>
      <button onClick={onScreenShare}>Screen Share</button>
      <button className="leave-button">Leave Meeting</button>
    </div>
  );
};

export default VideoControls;
