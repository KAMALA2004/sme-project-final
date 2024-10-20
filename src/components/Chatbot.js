import React, { useState } from 'react';

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

    const handleSend = async (event) => {
        event.preventDefault();
        
        const newMessage = {
            message: input,
            sender: "user"
        };

        const newMessages = [...messages, newMessage];
        setMessages(newMessages);
        setInput('');

        await processMessageToWit(newMessages);
    };

    async function processMessageToWit(chatMessages) {
        const API_KEY = "ZHQRRA6VH7EOZPJBWKSQLU5Y4D6ARN5Y"; // Replace with your Wit.ai token
        const userMessage = chatMessages[chatMessages.length - 1].message;

        await fetch(`https://api.wit.ai/message?v=20240927&q=${encodeURIComponent(userMessage)}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        })
        .then(response => response.json())
        .then(data => {
            const botResponse = `Wit.ai processed your message: ${JSON.stringify(data)}`;
            setMessages([...chatMessages, {
                message: botResponse,
                sender: "Chatbot"
            }]);
        })
        .catch(error => {
            console.error('Error:', error);
            setMessages([...chatMessages, {
                message: "Sorry, I couldn't process that.",
                sender: "Chatbot"
            }]);
        });
    }

    return (
        <div className="container">
            <div className="response-area">
                {messages.map((message, index) => {
                    return (
                        <div key={index} className={message.sender === "Chatbot" ? 'chatbot-message message' : 'user-message message'}>
                            {message.message}
                        </div>
                    );
                })}
            </div>
            <div className="prompt-area">
                <input 
                    type="text" 
                    placeholder="Send a message..." 
                    value={input} 
                    onChange={handleChange} 
                />
                <button className="submit" type="submit" onClick={handleSend}>
                    Send
                </button>
            </div>
        </div>
    );
}

export default Chatbot;
