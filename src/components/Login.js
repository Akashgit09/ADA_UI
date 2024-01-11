import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
// import './styles.css'; // Import the external CSS file
import logo from "./invologo.png";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/", {
        email,
        password,
      });
      if (res.data === "exist") {
        // history("/home", { state: { id: email } });
        history("/chatbot");
      } else if (res.data === "notexist") {
        alert("User has not signed up");
      }
    } catch (e) {
      alert("Wrong details");
      console.log(e);
    }
  }

  return (
    <div className="bothbox">
      <div className="login">
        <img className="logo" src={logo} alt="logo"/>
        {/* <h1>Involead</h1> */}
        <form>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input type="submit" value="Login" onClick={submit} />
        </form>
        <p>OR</p>
        <Link to="/signup">Signup Page</Link>
      </div>
      {/* added new code for making side div */}
      <div className="secondbox">
        <h1>
        Join our comunity</h1>
      </div>
    </div>


  );
}

export default Login;
