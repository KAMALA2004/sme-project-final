// src/components/Participant.js
import React from 'react';

const Participant = ({ name, isSpeaking }) => {
  return (
    <div className={`participant ${isSpeaking ? 'speaking' : ''}`}>
      <video autoPlay />
      <span>{name}</span>
    </div>
  );
};

export default Participant;
