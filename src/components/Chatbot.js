// //my initial code
// import React from "react"
// import {useLocation, useNavigate} from 'react-router-dom';

// function Home (){
//     const location=useLocation()

//     return (
//         <div className="homepage">

//             <h1>Hello {location.state.id} and welcome to the home</h1>

//         </div>
//     )
// }

// export default Home

// my code for chatbot
// import React, { useState } from 'react';
// // import './Chatbot.css'; // Importing external CSS

// function Chatbot() {
//     const [messages, setMessages] = useState([]); // Stores all messages
//     const [input, setInput] = useState(''); // Current user input

//     const sendMessage = (e) => {
//         e.preventDefault();
//         if (input.trim()) {
//             setMessages([...messages, { user: 'user', text: input }]);
//             // TODO: Send input to the backend and get response
//             setInput('');
//         }
//     };

//     return (
//         <div className="chatbot-container">
//             <div className="messages-container">
//                 {messages.map((message, index) => (
//                     <div key={index} className={`message ${message.user}`}>
//                         {message.text}
//                     </div>
//                 ))}
//             </div>
//             <form className="input-container" onSubmit={sendMessage}>
//                 <input
//                     type="text"
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     placeholder="Type a message..."
//                 />
//                 <button type="submit">Send</button>
//             </form>
//         </div>
//     );
// }

// export default Chatbot;


// code after defining components

import React from 'react';
import Navbar from './Navbar';
import ChatWindow from './ChatWindow';
import InputBar from './InputBar';
// import './App.css';

function Chatbot() {
  return (
    <div className="Chatbot">
      <Navbar />
      <div className="main-content">
    {/* Your other components will go here */}
    <ChatWindow />
    <InputBar />
  </div>
    </div>
  );
}


export default Chatbot;