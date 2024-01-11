import React from 'react';
// import './Message.css';

function Message({ text, user }) {
  return (
    <div className={`message ${user === 'bot' ? 'bot-msg' : 'user-msg'}`}>
      {text}
    </div>
  );
}

export default Message;
