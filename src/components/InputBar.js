import React, { useState } from 'react';
// import './InputBar.css';

function InputBar() {
  const [input, setInput] = useState('');

  const sendMessage = () => {
    // Logic to send message
  };

  return (
    <div className="input-bar">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default InputBar;
