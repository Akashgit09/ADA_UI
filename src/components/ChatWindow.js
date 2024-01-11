import React from 'react';
import Message from './Message';
// import './ChatWindow.css';

function ChatWindow() {
  // Assume messages is the state holding the chat messages
  const messages = [
    { id: 1, text: 'Hello!', user: 'bot' },
    // ... other messages
  ];

  return (
    <div className="chat-window">
      {messages.map(message => (
        <Message key={message.id} text={message.text} user={message.user} />
      ))}
    </div>
  );
}

export default ChatWindow;
