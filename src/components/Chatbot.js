import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: true }]);
      setInput('');
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'This is a bot response', user: false },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chatbot">
      <h2 className="chatbot__title">Chatbot</h2>
      <div className="chatbot__messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chatbot__message ${
              message.user ? 'chatbot__message--user' : 'chatbot__message--bot'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot__form">
        <input
          type="text"
          className="chatbot__input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="chatbot__button">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
