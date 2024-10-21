// src/components/VideoChatLayout.js
import React from 'react';
import './VideoChatLayout.css';

const VideoChatLayout = ({ children }) => {
  return (
    <div className="video-chat-container">
      <div className="main-video-area">{children.mainVideo}</div>
      <div className="participant-grid">{children.participants}</div>
      <div className="sidebar">{children.sidebar}</div>
    </div>
  );
};

export default VideoChatLayout;
