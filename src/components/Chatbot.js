import React, { useState } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      message: "Hello! I am your chatbot. How can I assist you today?",
      sender: "Chatbot"
    }
  ]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSend = (event) => {
    event.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      message: input,
      sender: "user"
    };

    const botMessage = {
      message: `You said: "${input}"`,
      sender: "Chatbot"
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="container">
      <div className="response-area">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.sender === "Chatbot" ? 'chatbot-message message' : 'user-message message'}
          >
            {message.message}
          </div>
        ))}
      </div>
      <form className="prompt-area" onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Send a message..."
          value={input}
          onChange={handleChange}
        />
        <button className="submit" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chatbot;
