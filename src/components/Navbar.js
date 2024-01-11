import AttachmentBar from './AttachmentBar';
// import './Navbar.css';
import React, { useState } from 'react';
function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-btn" onClick={toggleNav}>
        {isOpen ? '←' : '→'}
      </button>
      {/* Rest of your navbar items here */}
      <h2>Involead chatbot</h2>
      <AttachmentBar/>
    </div>
  );
}

export default Navbar;
