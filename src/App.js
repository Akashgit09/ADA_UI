
import Home from "./components/Chatbot"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/chatbot" element={<Chatbot/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;